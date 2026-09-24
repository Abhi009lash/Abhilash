import React from 'react';

export const PythonIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fill="#387eb8" d="M11.91 0c-4.48 0-4.18 1.94-4.18 1.94l.01 2.01h4.25v.6H4.25S0 4.09 0 8.64s3.71 4.38 3.71 4.38h1.22v-1.74s-.07-2.08 2.05-2.08h7.09s1.98.03 1.98-1.94V3.88S16.51 0 11.91 0zm-2.3 1.19a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72z" />
    <path fill="#ffe052" d="M12.09 24c4.48 0 4.18-1.94 4.18-1.94l-.01-2.01h-4.25v-.6h7.74s4.25.46 4.25-4.09-3.71-4.38-3.71-4.38h-1.22v1.74s.07 2.08-2.05 2.08H9.78s-1.98-.03-1.98 1.94v3.38s-.42 3.88 4.29 3.88zm2.3-1.19a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72z" />
  </svg>
);

export const FastApiIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-teal-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 3.5l4.5 7h-3.5v6.5l-4.5-7h3.5V3.5z" />
  </svg>
);

export const RestApiIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-emerald-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
    <circle cx="8" cy="6" r="2" fill="currentColor" />
    <circle cx="16" cy="12" r="2" fill="currentColor" />
    <circle cx="10" cy="18" r="2" fill="currentColor" />
  </svg>
);

export const PostgreSqlIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-sky-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z" />
  </svg>
);

export const RedisIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-red-500' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 16l10 5 10-5-10-5z" />
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-neutral-200' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const VercelIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-white' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L24 22H0L12 1z" />
  </svg>
);

export const ReactIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-cyan-400' }) => (
  <svg className={className} viewBox="-11.5 -10.232 23 20.463" fill="currentColor">
    <circle r="2.05" />
    <g stroke="currentColor" fill="none" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const JavascriptIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-amber-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M6 16.5c.8.9 1.8 1.4 3 1.4 1.5 0 2.4-.8 2.4-2.1v-7.8h-2.3v7.8c0 .5-.3.8-.8.8-.4 0-.8-.2-1.1-.6l-1.2 1.3zm8.3.1c1.2.8 2.5 1.3 3.9 1.3 2.5 0 4.1-1.3 4.1-3.3 0-1.8-1.2-2.7-3.1-3.4l-.7-.3c-1.1-.4-1.6-.8-1.6-1.5 0-.7.6-1.3 1.7-1.3 1 0 1.9.4 2.6.9l.9-1.8c-.9-.6-2-1-3.4-1-2.4 0-3.9 1.4-3.9 3.2 0 1.7 1.1 2.6 3 3.3l.8.3c1.1.4 1.7.9 1.7 1.6 0 .9-.8 1.5-2 1.5-1.3 0-2.3-.5-3.1-1.3l-.9 1.5z" fill="#000" />
  </svg>
);

export const TypescriptIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-blue-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M4 8h7v2.2H8.8v7.8H6.3v-7.8H4V8zm8.6 6.8c.7.4 1.5.7 2.3.7 1.1 0 1.7-.5 1.7-1.3 0-.8-.6-1.2-1.8-1.6l-.8-.3c-1.6-.6-2.5-1.4-2.5-2.8 0-1.7 1.3-3 3.5-3 1.2 0 2.2.3 2.9.8l-.7 2c-.6-.4-1.3-.6-2.1-.6-.9 0-1.4.4-1.4 1 0 .7.5 1 1.7 1.4l.8.3c1.8.6 2.7 1.5 2.7 3 0 1.9-1.4 3.1-3.8 3.1-1.4 0-2.6-.4-3.4-1l.9-1.7z" fill="#FFF" />
  </svg>
);

export const TailwindIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-cyan-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

export const ReactNativeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-sky-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="M12 18h.01" />
  </svg>
);

export const LangChainIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-emerald-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const LangGraphIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-indigo-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export const MachineLearningIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-purple-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const DeepLearningIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-fuchsia-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
  </svg>
);

export const NlpIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-violet-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 9h8M8 13h4" />
  </svg>
);

export const ComputerVisionIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-pink-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const McpIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-purple-300' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
  </svg>
);

export const AiAgentsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-rose-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2M20 14h2M9 13v2M15 13v2" />
  </svg>
);
