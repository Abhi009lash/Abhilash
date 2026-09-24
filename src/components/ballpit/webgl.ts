/**
 * Utility to verify WebGL support and prevent Three.js WebGLRenderer crashes
 * such as "Cannot read properties of null (reading 'precision')".
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');

    return Boolean(gl && gl instanceof WebGLRenderingContext || (window.WebGL2RenderingContext && gl instanceof WebGL2RenderingContext));
  } catch {
    return false;
  }
}

/**
 * Checks whether the user has requested reduced motion in their system preferences.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
