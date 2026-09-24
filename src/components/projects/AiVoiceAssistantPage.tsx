import React from 'react';
import { ScrollExpand } from '../ui/ScrollExpand';
import { SpotlightTextReveal } from '../about/SpotlightTextReveal';
import heroImg from '../../assets/ai-voice-assistant-hero.jpg';

export interface AiVoiceAssistantPageProps {
  onBack?: () => void;
}

export const AiVoiceAssistantPage: React.FC<AiVoiceAssistantPageProps> = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) onBack();
    else window.location.hash = '#projects';
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff4532]/30 selection:text-white relative">
      {/* Floating Transparent Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/25 hover:bg-black/50 backdrop-blur-md text-white/90 hover:text-white text-xs font-semibold border border-white/20 transition-all active:scale-95 cursor-pointer shadow-2xl hover:border-white/40"
      >
        <span>←</span> Back to Portfolio
      </button>

      {/* Full Bleed ScrollExpand Hero Stage */}
      <section className="w-full relative">
        <ScrollExpand
          src={heroImg}
          alt="AI Voice Assistant Showcase"
          scrollHint="Scroll"
          useWindowScroll
          mediaZoom={1.05}
          holdDistance={0}
        />
      </section>

      {/* Reused Magnificent Lens / Spotlight Reveal Section (Centered Text) */}
      <section className="w-full bg-black text-white flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 pt-6 pb-8 overflow-hidden selection:bg-white selection:text-black">
        <div className="max-w-4xl w-full mx-auto z-10">
          <SpotlightTextReveal
            radius={95}
            spotlightColor="#ff4532"
            contentClassName="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold leading-[1.55] tracking-tight"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#ff4532] mb-4">
                AI Voice Assistant
              </h2>
              <p>
                A multilingual <span className="text-[#ff4532]">AI Voice Assistant</span> built for natural, real-time voice conversations.
              </p>
              <p>
                It uses <span className="text-[#ff4532]">Sarvam AI Speech-to-Text (STT)</span> to understand spoken input and an <span className="text-[#ff4532]">LLM</span> to generate intelligent responses.
              </p>
              <p>
                <span className="text-[#ff4532]">Sarvam AI Text-to-Speech (TTS)</span> converts responses into natural-sounding speech.
              </p>
              <p>
                The application maintains conversation history, allowing users to revisit previous interactions.
              </p>
              <p>
                It supports voice interaction and <span className="text-[#ff4532]">multilingual conversations</span> through a clean, intuitive interface.
              </p>
              <p className="pt-2 text-sm sm:text-base md:text-lg text-neutral-300 font-mono">
                Built with <span className="text-[#ff4532]">Python</span>, <span className="text-[#ff4532]">Streamlit</span>, <span className="text-[#ff4532]">Sarvam AI</span>, and <span className="text-[#ff4532]">LLM technologies</span>.
              </p>
            </div>
          </SpotlightTextReveal>
        </div>
      </section>
    </div>
  );
};

export default AiVoiceAssistantPage;
