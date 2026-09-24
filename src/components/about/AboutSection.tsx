import React from 'react';
import { SpotlightTextReveal } from './SpotlightTextReveal';

export interface AboutSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc,
  imageAlt = 'Abhilash - AI Full-Stack Developer',
}) => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 selection:bg-white selection:text-black"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-neutral-800/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 z-10 py-12">
        {/* Left Column: Big Circular Frame with White Background */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
          <div className="relative group">
            {/* Outer ambient glow ring */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-white/20 via-neutral-400/10 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* The Big White Circle Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px] rounded-full overflow-hidden bg-white shadow-2xl flex items-center justify-center ring-4 ring-neutral-800/80 border-2 border-white/40">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                /* Sleek default avatar placeholder when no image is provided */
                <div className="flex flex-col items-center justify-center text-neutral-400 group-hover:scale-105 transition-transform duration-500">
                  <svg
                    className="w-24 h-24 sm:w-32 sm:h-32 text-neutral-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mt-2">
                    Profile Portrait
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: About Me with Magnifying Masking Effect */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Interactive Magnifying Lens & Spotlight Reveal */}
          <SpotlightTextReveal
            radius={85}
            spotlightColor="#ff4532"
            contentClassName="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-[1.4] tracking-tight"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#ff4532] mb-2">
                About Me
              </h2>
              <p>
                I’m an <span className="text-[#ff4532]">AI Full-Stack Developer</span> who turns ideas into intelligent, scalable digital products.
              </p>
              <p>
                I build <span className="text-[#ff4532]">AI-powered applications</span>, modern web experiences, and intelligent automation from frontend to backend.
              </p>
              <p>
                Focused on combining clean engineering, thoughtful design, and <span className="text-[#ff4532]">practical AI</span> to create products that make an impact.
              </p>
            </div>
          </SpotlightTextReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
