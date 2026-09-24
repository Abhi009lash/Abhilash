import React from 'react';
import { AccordionGallery, type AccordionGalleryItem } from '../gallery/AccordionGallery';
import { LogoLoop, type LogoItem } from '../ui/LogoLoop';
import heroImg from '../../assets/ai-voice-assistant-hero.jpg';
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

const projectGalleryItems: AccordionGalleryItem[] = [
  {
    label: 'AI Voice Assistance',
    category: 'Autonomous Speech & AI',
    badge: 'AI & Voice',
    image: heroImg,
    link: '#ai-voice-assistant',
    color: 'from-purple-900/80 via-indigo-950/50 to-black',
  },
  {
    label: 'WhatsApp Service',
    category: 'Automated Messaging & Bots',
    badge: 'Automation',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=900&auto=format&fit=crop',
    link: '#',
    color: 'from-emerald-900/80 via-teal-950/50 to-black',
  },
  {
    label: 'IBunify CRM',
    category: 'Enterprise SaaS Platform',
    badge: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    link: '#',
    color: 'from-blue-900/80 via-cyan-950/50 to-black',
  },
  {
    label: 'IBunify Mobile App',
    category: 'Cross-Platform Mobile',
    badge: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop',
    link: '#',
    color: 'from-violet-900/80 via-fuchsia-950/50 to-black',
  },
  {
    label: 'AI Dynamic Dashboard',
    category: 'Autonomous Analytics & Intelligence',
    badge: 'AI Dashboard',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900&auto=format&fit=crop',
    link: '#',
    color: 'from-cyan-900/80 via-indigo-950/50 to-black',
  },
  {
    label: 'Karnik Website',
    category: 'Corporate Web Platform',
    badge: 'Web App',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
    link: '#',
    color: 'from-amber-900/80 via-orange-950/50 to-black',
  },
  {
    label: 'Mahanagar Properties',
    category: 'Real Estate Portal',
    badge: 'Portal',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop',
    link: '#',
    color: 'from-sky-900/80 via-blue-950/50 to-black',
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

      <div className="max-w-5xl w-full mx-auto space-y-10 z-10">
        {/* AccordionGallery Interactive Showcase */}
        <AccordionGallery
          items={projectGalleryItems}
          defaultIndex={0}
          expandRatio={0.45}
          trigger="hover"
          height="360px"
        />

        {/* LogoLoop Tech Marquee */}
        <div className="pt-4">
          <LogoLoop
            logos={techLogos}
            speed={14}
            direction="left"
            logoHeight={44}
            gap={60}
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
