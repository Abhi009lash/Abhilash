import React, { useState } from 'react';
import { Folder } from '../folder/Folder';

export interface ContactSectionProps {
  email?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = 'abhilash@example.com',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const folderCards = [
    <div
      key="card-1"
      className="w-full h-full flex items-center justify-center p-1.5 text-center select-none"
    >
      <span className="text-[9px] font-extrabold text-neutral-900 leading-tight tracking-tight">
        App Development
      </span>
    </div>,

    <div
      key="card-2"
      className="w-full h-full flex items-center justify-center p-1.5 text-center select-none"
    >
      <span className="text-[9px] font-extrabold text-neutral-900 leading-tight tracking-tight">
        Full Stack Application
      </span>
    </div>,

    <div
      key="card-3"
      className="w-full h-full flex items-center justify-center p-1.5 text-center select-none"
    >
      <span className="text-[9px] font-extrabold text-neutral-900 leading-tight tracking-tight">
        AI Agents
      </span>
    </div>,
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Background ambient purple light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5227FF]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 z-10 py-16">
        {/* Left Column: 3D Interactive Folder */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div
            style={{ height: '600px', position: 'relative' }}
            className="w-full flex items-center justify-center relative"
          >
            {/* Ambient folder back glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#5227FF]/20 blur-3xl pointer-events-none" />

            <Folder size={2} color="#5227FF" items={folderCards} className="custom-folder" />
          </div>
        </div>

        {/* Right Column: Contact Form & Info */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Let’s Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#704bf7] via-purple-400 to-indigo-300">
                Intelligent
              </span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Have an AI project, full-stack application, or collaboration in mind? Drop a message or reach out directly at{' '}
              <a href={`mailto:${email}`} className="text-purple-400 hover:text-purple-300 underline underline-offset-4 font-mono text-sm">
                {email}
              </a>
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-emerald-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-neutral-400">
                Thank you for reaching out. I’ll get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-[#5227FF] focus:outline-none focus:ring-1 focus:ring-[#5227FF] text-white text-sm placeholder:text-neutral-600 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-[#5227FF] focus:outline-none focus:ring-1 focus:ring-[#5227FF] text-white text-sm placeholder:text-neutral-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or vision..."
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-[#5227FF] focus:outline-none focus:ring-1 focus:ring-[#5227FF] text-white text-sm placeholder:text-neutral-600 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#5227FF] hover:bg-[#431de6] active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#5227FF]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5227FF]"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
