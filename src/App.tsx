// import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import GlowingButton from './components/GlowingButton';
import ThemeToggle from './components/ThemeToggle';
import { Users, Send, Rocket, Zap, Code } from 'lucide-react';
import heroBg from './assets/hero-bg.png';

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
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-start transition-colors duration-500 bg-[var(--bg-primary)]">
      <ParticleBackground />
      <ThemeToggle />

      {/* Hero Section */}
      <header className="relative w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center z-10 min-h-[50vh]">
        {/* Parallax Background Layer */}
        <div
          className="absolute top-0 left-0 w-full h-full z-[-1] opacity-50 transition-opacity duration-500 dark:opacity-60"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          }}
        />

        {/* Soft Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/40 to-[var(--bg-primary)] z-[-1]" />

        <div className="animate-fade-in relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter transition-all duration-300">
            <span className="text-[var(--text-primary)] drop-shadow-2xl">InfoFi</span>
            <span className="text-gradient drop-shadow-[0_0_25px_rgba(212,0,255,0.4)]"> Legend</span>
          </h1>

          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-[var(--color-neon-cyan)] font-light tracking-wide drop-shadow-[0_0_10px_rgba(0,234,255,0.3)]">
              The Next Wave Begins
            </p>
            <div className="inline-block px-6 py-2 rounded-full border border-[var(--color-neon-purple)]/30 bg-[var(--bg-secondary)]/50 backdrop-blur-md shadow-[0_0_15px_rgba(212,0,255,0.1)]">
              <span className="text-base md:text-lg text-[var(--text-secondary)] font-medium">
                Elite community connections, curated for crypto legends.
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Links Section */}
      <main className="w-full max-w-3xl px-6 pb-24 z-10 animate-fade-in flex flex-col items-center" style={{ animationDelay: '0.2s' }}>
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <div key={index} className="animate-float" style={{ animationDelay: `${index * 0.15}s`, animationDuration: '7s' }}>
              <GlowingButton {...link} />
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-8 text-center text-[var(--text-secondary)] text-sm z-10 relative mt-auto">
        <p className="opacity-70 pb-2">© 2025 InfoFi Legend. The Future is Now.</p>
        <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)] to-transparent opacity-30"></div>
      </footer>
    </div>
  );
}

export default App;
