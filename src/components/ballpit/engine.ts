import {
  MathUtils,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import type { BallpitEngineConfig, SizeData } from './types';

export class BallpitEngine {
  #config: BallpitEngineConfig;
  #resizeObserver?: ResizeObserver;
  #intersectionObserver?: IntersectionObserver;
  #resizeTimer?: number;
  #animationFrameId = 0;
  #lastTime = performance.now();
  #isAnimating = false;
  #isVisible = false;
  #boundResize = this.#onResize.bind(this);
  #boundVisibilityChange = this.#onVisibilityChange.bind(this);

  canvas!: HTMLCanvasElement;
  camera!: PerspectiveCamera;
  cameraFov = 45;
  cameraMaxAspect = 1.5;
  scene!: Scene;
  renderer!: WebGLRenderer;
  size: SizeData = {
    width: 0,
    height: 0,
    wWidth: 0,
    wHeight: 0,
    ratio: 0,
    pixelRatio: 1,
  };

  onBeforeRender: (deltaInfo: { delta: number }) => void = () => {};
  onAfterResize: (size: SizeData) => void = () => {};

  constructor(config: BallpitEngineConfig) {
    this.#config = { ...config };
    this.#initRenderer();
    this.#initCamera();
    this.#initScene();
    this.resize();
    this.#initObservers();
  }

  #initRenderer() {
    if (!this.#config.canvas) {
      throw new Error('BallpitEngine: canvas element is required');
    }
    this.canvas = this.#config.canvas;

    const glTest =
      this.canvas.getContext('webgl2') ||
      this.canvas.getContext('webgl') ||
      this.canvas.getContext('experimental-webgl');

    if (!glTest) {
      throw new Error('WebGL context is not supported or could not be initialized.');
    }

    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
      ...(this.#config.rendererOptions ?? {}),
    });

    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  #initCamera() {
    this.camera = new PerspectiveCamera(this.cameraFov, 1, 0.1, 1000);
    this.camera.position.set(0, 0, 20);
    this.camera.lookAt(0, 0, 0);
  }

  #initScene() {
    this.scene = new Scene();
  }

  #initObservers() {
    window.addEventListener('resize', this.#boundResize);
    if (this.#config.size === 'parent' && this.canvas.parentElement) {
      this.#resizeObserver = new ResizeObserver(() => this.resize());
      this.#resizeObserver.observe(this.canvas.parentElement);
    }

    this.#intersectionObserver = new IntersectionObserver((entries) => {
      this.#isAnimating = entries[0]?.isIntersecting ?? false;
      if (this.#isAnimating) {
        this.#startAnimation();
      } else {
        this.#stopAnimation();
      }
    }, { threshold: 0 });

    this.#intersectionObserver.observe(this.canvas);
    document.addEventListener('visibilitychange', this.#boundVisibilityChange);
  }

  #onResize() {
    if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
    this.#resizeTimer = window.setTimeout(() => this.resize(), 100);
  }

  resize() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    if (this.#config.size instanceof Object) {
      w = this.#config.size.width;
      h = this.#config.size.height;
    } else if (this.#config.size === 'parent' && this.canvas.parentElement) {
      const parent = this.canvas.parentElement;
      w = parent.offsetWidth || parent.clientWidth || parent.getBoundingClientRect().width || 300;
      h = parent.offsetHeight || parent.clientHeight || parent.getBoundingClientRect().height || 300;
    }

    this.size.width = Math.max(w, 1);
    this.size.height = Math.max(h, 1);
    this.size.ratio = this.size.width / this.size.height;

    this.camera.aspect = this.size.ratio;
    if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
      const tanFov = Math.tan(MathUtils.degToRad(this.cameraFov / 2));
      const newTan = tanFov / (this.camera.aspect / this.cameraMaxAspect);
      this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(newTan));
    } else {
      this.camera.fov = this.cameraFov;
    }
    this.camera.updateProjectionMatrix();

    const fovRad = (this.camera.fov * Math.PI) / 180;
    this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
    this.size.wWidth = this.size.wHeight * this.camera.aspect;

    const pr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setSize(this.size.width, this.size.height, false);
    this.renderer.setPixelRatio(pr);
    this.size.pixelRatio = pr;

    this.onAfterResize(this.size);
  }

  #onVisibilityChange() {
    if (document.hidden) {
      this.#stopAnimation();
    } else if (this.#isAnimating) {
      this.#startAnimation();
    }
  }

  #startAnimation() {
    if (this.#isVisible) return;
    this.#isVisible = true;
    this.#lastTime = performance.now();

    const tick = (now: number) => {
      this.#animationFrameId = requestAnimationFrame(tick);
      const delta = Math.min((now - this.#lastTime) / 1000, 0.1);
      this.#lastTime = now;

      this.onBeforeRender({ delta });
      this.renderer.render(this.scene, this.camera);
    };

    this.#animationFrameId = requestAnimationFrame(tick);
  }

  #stopAnimation() {
    if (!this.#isVisible) return;
    cancelAnimationFrame(this.#animationFrameId);
    this.#isVisible = false;
  }

  clear() {
    this.scene.traverse((obj) => {
      if ('isMesh' in obj && obj.isMesh) {
        const mesh = obj as unknown as { geometry?: { dispose: () => void }; material?: { dispose: () => void } };
        mesh.geometry?.dispose();
        mesh.material?.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    window.removeEventListener('resize', this.#boundResize);
    document.removeEventListener('visibilitychange', this.#boundVisibilityChange);
    this.#resizeObserver?.disconnect();
    this.#intersectionObserver?.disconnect();
    if (this.#resizeTimer) clearTimeout(this.#resizeTimer);

    this.#stopAnimation();
    this.clear();
    this.renderer.dispose();
  }
}
