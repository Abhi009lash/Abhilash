import React, { useState } from 'react';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 14,
  direction = 'left',
  logoHeight = 40,
  gap = 48,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = true,
  fadeOutColor = '#000000',
  ariaLabel = 'Technology partners',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isHorizontal = direction === 'left' || direction === 'right';
  const isReverse = direction === 'right' || direction === 'down';

  // Calculate animation duration (if hoverSpeed is undefined, speed is always steady)
  const activeSpeed = isHovered && hoverSpeed !== undefined ? hoverSpeed : speed;
  const duration = activeSpeed > 0 ? 1000 / activeSpeed : 0;

  // Duplicate list to achieve continuous infinite marquee loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const maskGradient = isHorizontal
    ? `linear-gradient(to right, ${fadeOutColor}, transparent 12%, transparent 88%, ${fadeOutColor})`
    : `linear-gradient(to bottom, ${fadeOutColor}, transparent 12%, transparent 88%, ${fadeOutColor})`;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => hoverSpeed !== undefined && setIsHovered(true)}
      onMouseLeave={() => hoverSpeed !== undefined && setIsHovered(false)}
      className={`relative overflow-hidden w-full pointer-events-none ${className}`}
      style={{
        height: isHorizontal ? `${logoHeight + 20}px` : '100%',
      }}
    >
      {/* Edge Fade Out Overlays */}
      {fadeOut && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: maskGradient }}
        />
      )}

      {/* Marquee Track */}
      <div
        className="flex items-center w-max"
        style={{
          gap: `${gap}px`,
          animation: duration > 0 ? `logo-loop-scroll ${duration}s linear infinite` : 'none',
          animationDirection: isReverse ? 'reverse' : 'normal',
          animationPlayState: 'running',
        }}
      >
        {duplicatedLogos.map((item, idx) => {
          const content = (
            <div
              className={`flex items-center justify-center text-white/90 select-none ${
                scaleOnHover ? 'hover:scale-125 transition-transform duration-300' : ''
              }`}
              style={{ height: `${logoHeight}px` }}
              title={item.title}
              aria-label={item.title}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt ?? item.title ?? 'logo'}
                  style={{ height: `${logoHeight}px` }}
                  className="object-contain filter brightness-200"
                />
              ) : item.node ? (
                <div className="flex items-center justify-center">
                  {item.node}
                </div>
              ) : (
                <span className="text-sm font-semibold tracking-wide select-none whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </div>
          );

          if (item.href) {
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                className="cursor-pointer focus:outline-none"
              >
                {content}
              </a>
            );
          }

          return <div key={idx}>{content}</div>;
        })}
      </div>

      <style>{`
        @keyframes logo-loop-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
