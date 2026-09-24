import React, { useState, useEffect } from 'react';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AiVoiceAssistantPage } from './components/projects/AiVoiceAssistantPage';
import { ClickSpark } from './components/ui/ClickSpark';

export const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#ai-voice-assistant') {
    return (
      <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <AiVoiceAssistantPage onBack={() => { window.location.hash = '#projects'; }} />
      </ClickSpark>
    );
  }

  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ClickSpark>
  );
};

export default App;
