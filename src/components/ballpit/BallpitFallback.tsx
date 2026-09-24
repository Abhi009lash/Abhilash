import React from 'react';

interface BallpitFallbackProps {
  className?: string;
}

export const BallpitFallback: React.FC<BallpitFallbackProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden flex items-center justify-center bg-radial from-purple-900/20 via-slate-900/10 to-transparent ${className}`}
      aria-hidden="true"
    >
      <div className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl -top-10 -left-10 animate-pulse pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl bottom-0 right-0 animate-pulse pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-sky-500/15 blur-2xl top-1/2 left-1/3 pointer-events-none" />
    </div>
  );
};
