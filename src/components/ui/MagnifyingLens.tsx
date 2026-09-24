import React, { useState, useRef, useCallback } from 'react';

export interface MagnifyingLensProps {
  src: string;
  alt?: string;
  zoom?: number;
  lensSize?: number;
  className?: string;
}

export const MagnifyingLens: React.FC<MagnifyingLensProps> = ({
  src,
  alt = 'Magnified preview',
  zoom = 2.4,
  lensSize = 160,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, relX: 0, relY: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const clampedX = Math.max(0, Math.min(clientX, rect.width));
      const clampedY = Math.max(0, Math.min(clientY, rect.height));

      setPos({
        x: clampedX,
        y: clampedY,
        relX: rect.width > 0 ? clampedX / rect.width : 0,
        relY: rect.height > 0 ? clampedY / rect.height : 0,
      });
    },
    []
  );

  return (
    <div
      ref={containerRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerMove={handlePointerMove}
      className={`relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 select-none group cursor-crosshair ${className}`.trim()}
    >
      {/* Base Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block object-cover select-none"
        loading="lazy"
        draggable={false}
      />

      {/* Magnifier Lens */}
      <div
        className="pointer-events-none absolute rounded-full border-2 border-indigo-400/90 shadow-[0_0_30px_rgba(99,102,241,0.6),inset_0_0_15px_rgba(255,255,255,0.3)] overflow-hidden transition-opacity duration-200 z-30"
        style={{
          width: `${lensSize}px`,
          height: `${lensSize}px`,
          left: `${pos.x - lensSize / 2}px`,
          top: `${pos.y - lensSize / 2}px`,
          opacity: isHovered ? 1 : 0,
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `${pos.relX * 100}% ${pos.relY * 100}%`,
          backgroundSize: `${containerRef.current ? containerRef.current.clientWidth * zoom : 1000}px auto`,
        }}
      >
        {/* Center Target Indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_#818cf8]" />
          <div className="absolute w-6 h-[1px] bg-indigo-400/30" />
          <div className="absolute h-6 w-[1px] bg-indigo-400/30" />
        </div>
      </div>

      {/* Floating Prompt Pill */}
      <div className="absolute bottom-4 right-4 pointer-events-none z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-neutral-300 font-mono flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
        Hover to Magnify ({zoom}x)
      </div>
    </div>
  );
};

export default MagnifyingLens;
