// import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import GlowingButton from './components/GlowingButton';
import { Users, Send, Rocket, Zap, Code } from 'lucide-react';
import heroBg from './assets/hero-bg.png';

function App() {
  const links = [
    {
      label: 'Orbit Gang – Telegram',
      sublabel: 'Join the inner circle',
      href: 'https://t.me/c/3184251398/2',
      icon: <Send size={24} />,
    },
    {
      label: 'Orbit Gang – X List',
      sublabel: 'Curated crypto alpha',
      href: 'https://x.com/i/lists/1981471869862891977?s=20',
      icon: <Rocket size={24} />,
    },
    {
      label: 'List Join – DM',
      sublabel: 'Direct Message Access',
      href: 'https://x.com/SYNEX98_36',
      icon: <Users size={24} />,
    },
    {
      label: 'CT Legends x Group',
      sublabel: 'Join via DM',
      href: 'https://x.com/Bijon_BB',
      icon: <Zap size={24} />,
    },
    {
      label: 'Website Developer',
      sublabel: 'CryptoAI_Insider',
      href: 'https://x.com/ai_elon_musk',
      icon: <Code size={24} />,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
      <ParticleBackground />

      {/* Hero Section */}
      <header className="relative w-full flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center z-10">
        <div
          className="absolute top-0 left-0 w-full h-[500px] z-[-1] opacity-60 mask-image-gradient"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />

        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">InfoFi</span>
            <span className="text-gradient drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"> Legend</span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-100/80 max-w-2xl mx-auto font-light tracking-wide mb-6">
            The Next Wave Begins
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="text-sm text-cyan-300 font-medium">Elite community connections, curated for crypto legends.</span>
          </div>
        </div>
      </header>

      {/* Links Section */}
      <main className="w-full max-w-2xl px-4 pb-20 z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <div key={index} className="animate-float" style={{ animationDelay: `${index * 0.1}s`, animationDuration: '8s' }}>
              <GlowingButton {...link} />
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 text-center text-gray-500 text-sm z-10 relative">
        <p>© 2025 InfoFi Legend. All rights reserved.</p>
        <div className="h-[1px] w-full max-w-[200px] mx-auto mt-4 bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
      </footer>
    </div>
  );
}

export default App;
