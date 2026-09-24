import React from 'react';
import { LogoLoop, type LogoItem } from '../ui/LogoLoop';
import {
  PythonIcon,
  FastApiIcon,
  RestApiIcon,
  PostgreSqlIcon,
  RedisIcon,
  GithubIcon,
  VercelIcon,
  ReactIcon,
  JavascriptIcon,
  TypescriptIcon,
  TailwindIcon,
  ReactNativeIcon,
  LangChainIcon,
  LangGraphIcon,
  MachineLearningIcon,
  DeepLearningIcon,
  NlpIcon,
  ComputerVisionIcon,
  McpIcon,
  AiAgentsIcon,
} from './techIcons';

export interface ProjectItem {
  title: string;
  category: string;
  color: string;
  badge: string;
}

const projects: ProjectItem[] = [
  {
    title: 'AI Voice Assistance',
    category: 'Autonomous Speech & AI',
    color: 'from-purple-600/30 to-indigo-600/20',
    badge: 'AI & Voice',
  },
  {
    title: 'WhatsApp Service',
    category: 'Automated Messaging & Bots',
    color: 'from-emerald-600/30 to-teal-600/20',
    badge: 'Automation',
  },
  {
    title: 'IBunify CRM',
    category: 'Enterprise SaaS Platform',
    color: 'from-blue-600/30 to-cyan-600/20',
    badge: 'Full-Stack',
  },
  {
    title: 'IBunify Mobile App',
    category: 'Cross-Platform Mobile',
    color: 'from-violet-600/30 to-fuchsia-600/20',
    badge: 'Mobile App',
  },
  {
    title: 'Karnik Website',
    category: 'Corporate Web Platform',
    color: 'from-amber-600/30 to-orange-600/20',
    badge: 'Web App',
  },
  {
    title: 'Mahanagar Properties Website',
    category: 'Real Estate Portal',
    color: 'from-sky-600/30 to-blue-600/20',
    badge: 'Portal',
  },
];

const techLogos: LogoItem[] = [
  { title: 'Python', node: <PythonIcon /> },
  { title: 'FastAPI', node: <FastApiIcon /> },
  { title: 'REST API', node: <RestApiIcon /> },
  { title: 'PostgreSQL', node: <PostgreSqlIcon /> },
  { title: 'Redis', node: <RedisIcon /> },
  { title: 'GitHub', node: <GithubIcon /> },
  { title: 'Vercel', node: <VercelIcon /> },
  { title: 'React', node: <ReactIcon /> },
  { title: 'JavaScript', node: <JavascriptIcon /> },
  { title: 'TypeScript', node: <TypescriptIcon /> },
  { title: 'Tailwind CSS', node: <TailwindIcon /> },
  { title: 'React Native', node: <ReactNativeIcon /> },
  { title: 'LangChain', node: <LangChainIcon /> },
  { title: 'LangGraph', node: <LangGraphIcon /> },
  { title: 'Machine Learning', node: <MachineLearningIcon /> },
  { title: 'Deep Learning', node: <DeepLearningIcon /> },
  { title: 'NLP', node: <NlpIcon /> },
  { title: 'Computer Vision', node: <ComputerVisionIcon /> },
  { title: 'MCP', node: <McpIcon /> },
  { title: 'AI Agents', node: <AiAgentsIcon /> },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto space-y-16 z-10">

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 overflow-hidden hover:-translate-y-1 shadow-lg"
            >
              {/* Card with Gradient & Glow */}
              <div className={`h-40 w-full bg-gradient-to-br ${proj.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-white border border-white/10">
                    {proj.badge}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">0{idx + 1}</span>
                </div>
                <div className="z-10">
                  <span className="text-xs text-neutral-400 block mb-1 font-medium tracking-wide">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LogoLoop Tech Marquee */}
        <div className="pt-8 border-t border-neutral-900/60">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 text-center mb-6">
            Core Technologies & Engineering Stack
          </p>
          <LogoLoop
            logos={techLogos}
            speed={18}
            direction="left"
            logoHeight={38}
            gap={24}
            hoverSpeed={6}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Core Technologies"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
