import React from 'react';
import { Ballpit } from '../ballpit/Ballpit';
import { GooeyNav, type GooeyNavItem } from '../navigation/GooeyNav';

const navItems: GooeyNavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Floating Transparent Gooey Navigation */}
      <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      {/* Interactive 3D Ballpit Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
        aria-hidden="true"
      >
        <Ballpit
          count={50}
          gravity={0}
          friction={0.998}
          wallBounce={0.95}
          followCursor={false}
          colors={[0xa855f7, 0x6366f1, 0x06b6d4]}
          maxVelocity={0.15}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Next-Generation Frontend{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400">
            Engineered for Precision
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
          Robust, performant, and resilient user interfaces built with React 19,
          Three.js, and strict engineering standards.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-[0.98] text-white font-semibold transition-all duration-150 shadow-lg shadow-purple-600/30 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 active:scale-[0.98] text-slate-200 font-semibold border border-slate-700 transition-all duration-150 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-400 focus-visible:outline-offset-2"
          >
            View Documentation
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
