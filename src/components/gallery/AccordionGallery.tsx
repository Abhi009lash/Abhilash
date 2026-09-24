import React, { useState } from 'react';

export interface AccordionGalleryItem {
  image?: string;
  label: string;
  link?: string;
  category?: string;
  badge?: string;
  color?: string;
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  expandRatio?: number;
  trigger?: 'hover' | 'click';
  className?: string;
  height?: number | string;
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultIndex = 0,
  trigger = 'hover',
  className = '',
  height = '360px',
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`w-full flex flex-col md:flex-row gap-2 sm:gap-3 overflow-hidden rounded-2xl select-none ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const colorGradient = item.color || 'from-purple-900/60 via-indigo-900/40 to-black';

        return (
          <div
            key={index}
            onMouseEnter={trigger === 'hover' ? () => handleInteraction(index) : undefined}
            onClick={trigger === 'click' ? () => handleInteraction(index) : undefined}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-neutral-800/80 hover:border-neutral-700 bg-neutral-950/80 flex flex-col justify-end ${
              isActive
                ? 'flex-[3] md:flex-[3.2] shadow-xl shadow-purple-950/20'
                : 'flex-1 md:flex-1 opacity-70 hover:opacity-90'
            }`}
          >
            {/* Background Image or Gradient Layer */}
            {item.image ? (
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{
                  transform: isActive ? 'scale(1.05)' : 'scale(1.0)',
                }}
              />
            ) : null}

            {/* Gradient Dark Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${colorGradient} mix-blend-multiply transition-opacity duration-300 ${
                isActive ? 'opacity-90' : 'opacity-70'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Card Content */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end h-full">
              {/* Bottom Project Label & Details */}
              <div className="space-y-1.5">
                {item.category && isActive && (
                  <span className="text-[11px] text-neutral-400 font-medium tracking-wide block animate-fadeIn">
                    {item.category}
                  </span>
                )}

                <h3
                  className={`font-bold text-white transition-all duration-300 ${
                    isActive
                      ? 'text-lg sm:text-xl md:text-2xl text-white leading-tight'
                      : 'text-xs md:text-sm text-neutral-300 md:[writing-mode:vertical-rl] md:rotate-180 md:tracking-wide'
                  }`}
                >
                  {item.label}
                </h3>

                {isActive && item.link && (
                  <div className="pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${item.label}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-90 shadow-md group/btn"
                    >
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
