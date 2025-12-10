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
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 bg-[var(--bg-primary)] text-center font-sans selection:bg-cyan-500/30">

      {/* Background & Overlay */}
      <ParticleBackground />
      {/* Readability Overlay: Black 50% as requested */}
      <div className="fixed inset-0 bg-black/50 pointer-events-none z-0" />
      {/* Subtle Gradient to smooth edges */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]/80 pointer-events-none z-0" />

      <ThemeToggle />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl py-12 px-4 flex flex-col items-center justify-center min-h-[80vh]">

        {/* Header Section */}
        <header className="animate-fade-in mb-12 transform hover:scale-[1.01] transition-transform duration-700">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-tight">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">InfoFi</span>
            <span className="text-gradient drop-shadow-[0_0_35px_rgba(212,0,255,0.5)]"> Legend</span>
          </h1>

          <div className="space-y-6 flex flex-col items-center">
            <p className="text-2xl md:text-3xl text-cyan-300 font-light tracking-wide drop-shadow-[0_0_12px_rgba(0,234,255,0.4)] animate-pulse-slow">
              The Next Wave Begins
            </p>

            <div className="inline-block px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,234,255,0.1)] hover:bg-white/10 transition-colors">
              <span className="text-base md:text-lg text-gray-300 font-medium">
                Elite community connections, curated for <span className="text-gradient font-bold">crypto legends</span>.
              </span>
            </div>
          </div>
        </header>

        {/* Links Grid */}
        <div className="w-full max-w-2xl flex flex-col gap-5 px-2">
          {links.map((link, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <GlowingButton {...link} />
            </div>
          ))}
        </div>

      </div>

      <footer className="w-full py-8 text-center text-[var(--text-secondary)] text-sm z-10 relative opacity-60 hover:opacity-100 transition-opacity">
        <p>© 2025 InfoFi Legend / The Future is Now.</p>
      </footer>
    </div>
  );
}

export default App;
