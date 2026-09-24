import React, { useEffect, useRef, useState } from 'react';

export interface SpotlightTextRevealProps {
  children?: React.ReactNode;
  baseContent?: React.ReactNode;
  revealContent?: React.ReactNode;
  radius?: number;
  spotlightColor?: string;
  className?: string;
  contentClassName?: string;
}

const CANVAS_OFFSET = 300; // Generous padding so circle is never clipped

export const SpotlightTextReveal: React.FC<SpotlightTextRevealProps> = ({
  children,
  baseContent,
  revealContent,
  radius = 85,
  spotlightColor = '#ff4532',
  className = '',
  contentClassName = 'text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-[1.4] tracking-tight',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const currentRadius = useRef(0);
  const animFrameId = useRef(0);

  const topLayerRef = useRef<HTMLDivElement>(null);

  const contentToRender = children ?? baseContent;
  const revealedContentToRender = revealContent ?? contentToRender;

  useEffect(() => {
    const updateLoop = () => {
      // Smooth physics interpolation towards mouse coordinates
      const lerpFactor = 0.18;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      const targetR = isHovered ? radius : 0;
      currentRadius.current += (targetR - currentRadius.current) * 0.16;

      const cx = (currentPos.current.x + CANVAS_OFFSET).toFixed(2);
      const cy = (currentPos.current.y + CANVAS_OFFSET).toFixed(2);
      const r = currentRadius.current.toFixed(2);

      if (topLayerRef.current) {
        topLayerRef.current.style.clipPath = `circle(${r}px at ${cx}px ${cy}px)`;
        topLayerRef.current.style.setProperty('-webkit-clip-path', `circle(${r}px at ${cx}px ${cy}px)`);
      }

      animFrameId.current = requestAnimationFrame(updateLoop);
    };

    animFrameId.current = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animFrameId.current);
  }, [isHovered, radius]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const initialX = e.clientX - rect.left;
      const initialY = e.clientY - rect.top;
      targetPos.current = { x: initialX, y: initialY };
      currentPos.current = { x: initialX, y: initialY };
    }
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative select-none cursor-default overflow-hidden ${className}`}
    >
      {/* Base Layer: Warm beige off-white text with highlight words */}
      <div className={`${contentClassName} text-[#d6cfb8] transition-colors duration-300`}>
        {contentToRender}
      </div>

      {/* Masked Reveal Layer: Expanded Canvas with 1:1 Pixel-Aligned Black Text on Coral Red */}
      <div
        ref={topLayerRef}
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: `-${CANVAS_OFFSET}px`,
          left: `-${CANVAS_OFFSET}px`,
          right: `-${CANVAS_OFFSET}px`,
          bottom: `-${CANVAS_OFFSET}px`,
          backgroundColor: spotlightColor,
          clipPath: `circle(0px at ${CANVAS_OFFSET}px ${CANVAS_OFFSET}px)`,
          WebkitClipPath: `circle(0px at ${CANVAS_OFFSET}px ${CANVAS_OFFSET}px)`,
          willChange: 'clip-path',
        }}
      >
        {/* Inner container exactly aligning reveal text 1:1 with base layer */}
        <div
          className={`${contentClassName} text-black [&_*]:!text-black`}
          style={{
            paddingTop: `${CANVAS_OFFSET}px`,
            paddingLeft: `${CANVAS_OFFSET}px`,
            paddingRight: `${CANVAS_OFFSET}px`,
            paddingBottom: `${CANVAS_OFFSET}px`,
          }}
        >
          {revealedContentToRender}
        </div>
      </div>
    </div>
  );
};

export default SpotlightTextReveal;
