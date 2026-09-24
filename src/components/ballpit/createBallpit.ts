import { Plane, Raycaster, Vector2, Vector3 } from 'three';
import { BallpitEngine } from './engine';
import { BallpitSpheres } from './instancedSpheres';
import { PointerTracker } from './pointer';
import type { BallpitProps, CreateBallpitReturn } from './types';

export function createBallpit(canvas: HTMLCanvasElement, config: BallpitProps = {}): CreateBallpitReturn {
  const engine = new BallpitEngine({
    canvas,
    size: 'parent',
  });

  let spheres = new BallpitSpheres(engine.renderer, config);
  engine.scene.add(spheres);

  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersectionPoint = new Vector3();
  const ndc = new Vector2();
  let isPaused = false;

  const pointerTracker = new PointerTracker(canvas, {
    onMove(data) {
      ndc.set(data.nPosition.x, data.nPosition.y);
      raycaster.setFromCamera(ndc, engine.camera);
      engine.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      spheres.physics.center.copy(intersectionPoint);
      spheres.config.controlSphere0 = true;
    },
    onLeave() {
      spheres.config.controlSphere0 = false;
    },
  });

  engine.onBeforeRender = (deltaInfo) => {
    if (!isPaused) {
      spheres.update(deltaInfo);
    }
  };

  engine.onAfterResize = (size) => {
    spheres.config.maxX = size.wWidth / 2;
    spheres.config.maxY = size.wHeight / 2;
  };

  const initializeSpheres = (cfg: BallpitProps) => {
    engine.clear();
    engine.scene.remove(spheres);
    spheres = new BallpitSpheres(engine.renderer, cfg);
    engine.scene.add(spheres);
  };

  return {
    setCount(count: number) {
      initializeSpheres({ ...spheres.config, count });
    },
    updateConfig(newProps: Record<string, unknown>) {
      if (newProps.count !== undefined && newProps.count !== spheres.config.count) {
        initializeSpheres({ ...spheres.config, ...newProps } as BallpitProps);
      } else {
        Object.assign(spheres.config, newProps);
        if (Array.isArray(newProps.colors)) {
          spheres.setColors(newProps.colors as number[]);
        }
        if (newProps.minSize !== undefined || newProps.maxSize !== undefined || newProps.size0 !== undefined) {
          spheres.physics.setSizes();
        }
      }
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      pointerTracker.dispose();
      engine.dispose();
    },
  };
}
