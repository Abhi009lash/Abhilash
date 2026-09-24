import type { WebGLRendererParameters } from 'three';

export interface SizeData {
  width: number;
  height: number;
  wWidth: number;
  wHeight: number;
  ratio: number;
  pixelRatio: number;
}

export interface BallpitEngineConfig {
  canvas?: HTMLCanvasElement;
  id?: string;
  rendererOptions?: Partial<WebGLRendererParameters>;
  size?: 'parent' | { width: number; height: number };
}

export interface BallpitPhysicsConfig {
  count: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  maxSize: number;
  minSize: number;
  size0: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  maxVelocity: number;
  controlSphere0?: boolean;
  followCursor?: boolean;
}

export interface BallpitProps extends Partial<BallpitPhysicsConfig> {
  className?: string;
  colors?: number[];
  ambientColor?: number;
  ambientIntensity?: number;
  lightIntensity?: number;
  materialParams?: {
    metalness?: number;
    roughness?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
  };
}

export interface PointerData {
  position: { x: number; y: number };
  nPosition: { x: number; y: number };
  hover: boolean;
  touching: boolean;
  onEnter: (data: PointerData) => void;
  onMove: (data: PointerData) => void;
  onClick: (data: PointerData) => void;
  onLeave: (data: PointerData) => void;
  dispose?: () => void;
}

export interface CreateBallpitReturn {
  dispose: () => void;
  setCount: (count: number) => void;
  togglePause: () => void;
  updateConfig: (newProps: Record<string, unknown>) => void;
}

export const DEFAULT_BALLPIT_CONFIG = {
  count: 200,
  colors: [0xaa3bff, 0x6366f1, 0x38bdf8],
  ambientColor: 0xffffff,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true,
};
