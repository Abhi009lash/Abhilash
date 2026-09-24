import React, { useEffect, useRef, useState } from 'react';
import { BallpitFallback } from './BallpitFallback';
import { createBallpit } from './createBallpit';
import type { BallpitProps, CreateBallpitReturn } from './types';
import { isWebGLAvailable, prefersReducedMotion } from './webgl';

export const Ballpit: React.FC<BallpitProps> = ({
  className = '',
  followCursor = false,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<CreateBallpitReturn | null>(null);
  const isFirstRender = useRef(true);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(() => {
    return isWebGLAvailable() && !prefersReducedMotion();
  });

  useEffect(() => {
    if (!webGLSupported) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      instanceRef.current = createBallpit(canvas, {
        followCursor,
        ...props,
      });
    } catch (err) {
      // Graceful fallback to avoid app crashes when WebGL context fails
      console.warn('Ballpit WebGL initialization failed, switching to fallback:', err);
      setWebGLSupported(false);
      return;
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.dispose();
        instanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webGLSupported]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (instanceRef.current) {
      instanceRef.current.updateConfig({ followCursor, ...props });
    }
  }, [props, followCursor]);

  if (!webGLSupported) {
    return <BallpitFallback className={className} />;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`${className} block w-full h-full pointer-events-auto`}
      style={{ touchAction: 'none' }}
      aria-hidden="true"
    />
  );
};

export default Ballpit;
