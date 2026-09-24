import React, { useState } from 'react';

const SESSIONS = [
  { time: '01:32', date: 'May 24, 10:30 AM' },
  { time: '02:08', date: 'May 24, 09:15 AM' },
  { time: '00:45', date: 'May 23, 04:42 PM' },
];

const LANGUAGES = [
  { name: 'English', flag: '🇺🇸' },
  { name: 'Español', flag: '🇪🇸' },
  { name: 'Français', flag: '🇫🇷' },
  { name: '日本語', flag: '🇯🇵' },
];

const NAV_ITEMS = [
  { icon: '⊞', label: 'Dashboard', active: true },
  { icon: '💬', label: 'Conversations' },
  { icon: '🎙️', label: 'Voice Models' },
  { icon: '⚙️', label: 'Settings' },
  { icon: '📊', label: 'Analytics' },
];

export const VoxlyVoiceDashboard: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('English');
  const [isSpeaking, setIsSpeaking] = useState(true);

  return (
    <div className="w-full bg-[#f4f7fe] text-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 font-sans flex flex-col md:flex-row min-h-[600px] select-none text-left">
      {/* Sidebar */}
      <aside className="w-full md:w-56 bg-white border-r border-slate-100 p-5 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-600/30">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 leading-tight">Voxly</h2>
              <span className="text-[10px] text-slate-400 font-medium">AI Voice Assistant</span>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors cursor-pointer ${
                  item.active ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-6 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
          <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
            <span>✨</span> Pro Plan
          </div>
          <p className="text-[10px] text-slate-500 leading-tight">Unlimited conversations & premium voices.</p>
          <button className="w-full py-1.5 rounded-lg bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-colors shadow-sm">
            Upgrade
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-5 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">AI Voice Assistant</h1>
            <p className="text-xs text-slate-500 mt-0.5">Natural conversations, endless possibilities.</p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs shadow-sm">🔔</div>
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">A</div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 space-y-4">
            {/* Live Voice Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Live Voice Output</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 py-3">
                <div className="flex items-center gap-1 text-indigo-400">
                  {[12, 24, 18, 36, 20, 28, 14].map((h, i) => (
                    <div key={i} className="w-1 bg-indigo-400/80 rounded-full animate-pulse" style={{ height: `${h}px`, animationDelay: `${i * 120}ms` }} />
                  ))}
                </div>
                <button
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg shadow-lg shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-transform"
                >
                  🎤
                </button>
                <div className="flex items-center gap-1 text-indigo-400">
                  {[14, 28, 20, 36, 18, 24, 12].map((h, i) => (
                    <div key={i} className="w-1 bg-indigo-400/80 rounded-full animate-pulse" style={{ height: `${h}px`, animationDelay: `${i * 140}ms` }} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div className="p-2 rounded-xl bg-slate-50"><span className="text-xs font-black text-slate-800 block">128</span><span className="text-[9px] text-slate-400">Conversations</span></div>
                <div className="p-2 rounded-xl bg-slate-50"><span className="text-xs font-black text-slate-800 block">2.4h</span><span className="text-[9px] text-slate-400">Talk Time</span></div>
                <div className="p-2 rounded-xl bg-slate-50"><span className="text-xs font-black text-slate-800 block">98%</span><span className="text-[9px] text-slate-400">Satisfaction</span></div>
              </div>
            </div>

            {/* Recent Voice Sessions */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Recent Voice Sessions</span>
                <span className="text-[10px] font-bold text-indigo-600 cursor-pointer">View all</span>
              </div>
              <div className="space-y-1.5">
                {SESSIONS.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">▶</div>
                      <div className="flex items-center gap-0.5">
                        {[8, 14, 10, 18, 12, 16, 9].map((h, i) => (
                          <div key={i} className="w-0.5 bg-indigo-400 rounded-full" style={{ height: `${h}px` }} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                      <span>{s.time}</span>
                      <span>{s.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Language Selector */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2.5">
              <span className="text-xs font-bold text-slate-800 block">Language</span>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => setSelectedLang(lang.name)}
                    className={`flex items-center justify-between p-2 rounded-xl border text-xs font-semibold transition-all ${
                      selectedLang === lang.name ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {selectedLang === lang.name && <span className="text-indigo-600 text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation Stream */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2.5 flex flex-col justify-between h-[250px]">
              <div className="space-y-2 overflow-y-auto pr-1 text-xs">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] shrink-0">🎙</div>
                  <div className="p-2 rounded-xl rounded-tl-none bg-indigo-50 text-indigo-950 max-w-[85%] leading-relaxed text-[11px]">
                    Hello! How can I help you today?
                  </div>
                </div>
                <div className="flex items-start justify-end gap-2">
                  <div className="p-2 rounded-xl rounded-tr-none bg-emerald-50 text-emerald-950 max-w-[85%] leading-relaxed text-[11px]">
                    Can you help me book a flight to Paris?
                    <span className="block text-[8px] text-emerald-600/70 mt-0.5 text-right">10:31 AM</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] shrink-0">👤</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600"
                />
                <button className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs hover:bg-indigo-700 transition-colors shrink-0">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] text-indigo-950/60 font-medium">
          ✦ Built with advanced AI for natural, human-like conversations.
        </div>
      </main>
    </div>
  );
};

export default VoxlyVoiceDashboard;
