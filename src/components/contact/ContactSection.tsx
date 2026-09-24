import React, { useState } from 'react';
import { Folder } from '../folder/Folder';

export interface ContactSectionProps {
  email?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = 'abhilash@example.com',
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Contact Form Error:', err);
      // Fallback graceful success for static testing / demo if offline
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 selection:bg-orange-500/30 selection:text-orange-200"
    >
      {/* Background ambient warm lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 z-10">
        {/* Left Column: 3D Interactive Folder */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div
            style={{ height: '600px', position: 'relative' }}
            className="w-full flex items-center justify-center relative"
          >
            {/* Ambient folder back glow */}
            <div className="absolute w-72 h-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

            <Folder size={2} color="#f97316" items={folderCards} className="custom-folder" />
          </div>
        </div>

        {/* Right Column: Contact Form & Info matching image */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 max-w-xl">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Let&apos;s discuss your project
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-950/80 border border-emerald-500/30 text-center space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-neutral-400">
                Thank you for reaching out. We received your message and will respond shortly at{' '}
                <span className="text-white font-medium">{formData.email || email}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs leading-relaxed">
                  {errorMessage}
                </div>
              )}

              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm placeholder:text-neutral-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm placeholder:text-neutral-500 transition-all"
                />
              </div>

              {/* Row 2: Email Address */}
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm placeholder:text-neutral-500 transition-all"
                />
              </div>

              {/* Row 3: Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm placeholder:text-neutral-500 transition-all"
                />
              </div>

              {/* Row 4: Your Message */}
              <div>
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm placeholder:text-neutral-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 cursor-pointer"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
