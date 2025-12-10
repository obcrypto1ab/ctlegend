// import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import GlowingButton from './components/GlowingButton';
import ThemeToggle from './components/ThemeToggle';
import { Users, Send, Rocket, Zap, Code } from 'lucide-react';

function App() {
  const links = [
    {
      label: 'Orbit Gang – Telegram',
      sublabel: 'Join the inner circle',
      href: 'https://t.me/c/3184251398/2',
      icon: <Send size={28} />,
    },
    {
      label: 'Orbit Gang – X List',
      sublabel: 'Curated crypto alpha',
      href: 'https://x.com/i/lists/1981471869862891977?s=20',
      icon: <Rocket size={28} />,
    },
    {
      label: 'List Join – DM',
      sublabel: 'Direct Message Access',
      href: 'https://x.com/SYNEX98_36',
      icon: <Users size={28} />,
    },
    {
      label: 'CT Legends x Group',
      sublabel: 'Join via DM',
      href: 'https://x.com/Bijon_BB',
      icon: <Zap size={28} />,
    },
    {
      label: 'Website Developer',
      sublabel: 'CryptoAI_Insider',
      href: 'https://x.com/ai_elon_musk',
      icon: <Code size={28} />,
    },
  ];

  return (
    // Main Container - Allows scrolling if content is too tall
    <div className="min-h-screen w-full relative transition-colors duration-500 bg-[var(--bg-primary)] text-center font-sans selection:bg-cyan-500/30 overflow-x-hidden">

      {/* 1. Background Layer (Video/Canvas) - Fixed, Z-Index -1 */}
      <ParticleBackground />

      {/* 2. Readability Overlay - Fixed or Absolute, Z-Index 0 */}
      {/* 40-60% Black Overlay as requested */}
      <div className="fixed inset-0 bg-black/60 pointer-events-none z-[0]" />

      {/* Optional: Extra gradient for depth */}
      <div className="fixed inset-0 bg-gradient-to-t from-[var(--bg-primary)]/90 via-transparent to-[var(--bg-primary)]/40 pointer-events-none z-[0]" />

      <ThemeToggle />

      {/* 3. Content Wrapper - Relative, Z-Index 10 */}
      <div className="relative z-[10] flex flex-col items-center justify-center min-h-screen w-full py-16 px-4">

        <div className="w-full max-w-5xl flex flex-col items-center">
          {/* Header Section */}
          <header className="animate-fade-in mb-16 transform hover:scale-[1.01] transition-transform duration-700 w-full">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-tight">
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">InfoFi</span>
              <br className="md:hidden" />
              <span className="text-gradient drop-shadow-[0_0_40px_rgba(212,0,255,0.6)]"> Legend</span>
            </h1>

            <div className="space-y-8 flex flex-col items-center">
              <p className="text-2xl md:text-4xl text-cyan-300 font-light tracking-wide drop-shadow-[0_0_15px_rgba(0,234,255,0.5)] animate-pulse-slow max-w-2xl">
                The Next Wave Begins
              </p>

              <div className="inline-block px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,234,255,0.15)] hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,234,255,0.25)]">
                <span className="text-base md:text-lg text-gray-200 font-medium">
                  Elite community connections, curated for <span className="text-gradient font-bold">crypto legends</span>.
                </span>
              </div>
            </div>
          </header>

          {/* Links Grid */}
          <main className="w-full max-w-xl flex flex-col gap-6 px-2 mb-12">
            {links.map((link, index) => (
              <div key={index} className="animate-fade-in w-full" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <GlowingButton {...link} />
              </div>
            ))}
          </main>

          <footer className="w-full pt-8 text-center text-[var(--text-secondary)] text-sm opacity-60 hover:opacity-100 transition-opacity">
            <p className="tracking-widest uppercase text-xs">© 2025 InfoFi Legend • Future Is Now</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
