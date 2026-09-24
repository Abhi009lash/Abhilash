import {
  AmbientLight,
  Color,
  InstancedMesh,
  Object3D,
  PMREMGenerator,
  PointLight,
  SphereGeometry,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { BallpitMaterial } from './material';
import { BallpitPhysics } from './physics';
import { DEFAULT_BALLPIT_CONFIG, type BallpitPhysicsConfig, type BallpitProps } from './types';

const transformDummy = new Object3D();

export class BallpitSpheres extends InstancedMesh {
  config: BallpitPhysicsConfig & Required<Pick<BallpitProps, 'colors' | 'ambientColor' | 'ambientIntensity' | 'lightIntensity'>>;
  physics: BallpitPhysics;
  ambientLight: AmbientLight;
  pointLight: PointLight;

  constructor(renderer: WebGLRenderer, params: BallpitProps = {}) {
    const config = { ...DEFAULT_BALLPIT_CONFIG, ...params };
    const roomEnv = new RoomEnvironment();
    const pmrem = new PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(roomEnv).texture;
    pmrem.dispose();

    const geometry = new SphereGeometry(1, 32, 32);
    const material = new BallpitMaterial({
      envMap: envTexture,
      ...config.materialParams,
    });
    material.envMapRotation.x = -Math.PI / 2;

    super(geometry, material, config.count);
    this.config = config;
    this.physics = new BallpitPhysics(config);

    this.ambientLight = new AmbientLight(config.ambientColor, config.ambientIntensity);
    this.add(this.ambientLight);

    this.pointLight = new PointLight(config.colors[0] ?? 0xffffff, config.lightIntensity);
    this.add(this.pointLight);

    this.setColors(config.colors);
  }

  setColors(colors: number[]) {
    if (!Array.isArray(colors) || colors.length === 0) return;

    const colorObjects = colors.map((c) => new Color(c));
    const getColorAt = (ratio: number, out = new Color()) => {
      const clamped = Math.max(0, Math.min(1, ratio));
      const scaled = clamped * (colorObjects.length - 1);
      const idx = Math.floor(scaled);
      const start = colorObjects[idx];
      if (idx >= colorObjects.length - 1) return start.clone();
      const alpha = scaled - idx;
      const end = colorObjects[idx + 1];
      out.r = start.r + alpha * (end.r - start.r);
      out.g = start.g + alpha * (end.g - start.g);
      out.b = start.b + alpha * (end.b - start.b);
      return out;
    };

    for (let idx = 0; idx < this.count; idx++) {
      const c = getColorAt(idx / Math.max(this.count - 1, 1));
      this.setColorAt(idx, c);
      if (idx === 0) {
        this.pointLight.color.copy(c);
      }
    }

    if (this.instanceColor) {
      this.instanceColor.needsUpdate = true;
    }
  }

  update(deltaInfo: { delta: number }) {
    this.physics.update(deltaInfo);

    for (let idx = 0; idx < this.count; idx++) {
      transformDummy.position.fromArray(this.physics.positionData, 3 * idx);

      if (idx === 0 && this.config.followCursor === false) {
        transformDummy.scale.setScalar(0);
      } else {
        transformDummy.scale.setScalar(this.physics.sizeData[idx]);
      }

      transformDummy.updateMatrix();
      this.setMatrixAt(idx, transformDummy.matrix);

      if (idx === 0) {
        this.pointLight.position.copy(transformDummy.position);
      }
    }

    this.instanceMatrix.needsUpdate = true;
  }
}
