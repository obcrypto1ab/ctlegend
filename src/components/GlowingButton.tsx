// import React from 'react';
import { ExternalLink } from 'lucide-react';

interface GlowingButtonProps {
    href: string;
    label: string;
    sublabel?: string;
    icon?: React.ReactNode;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ href, label, sublabel, icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between py-5 px-8 my-4 w-full max-w-xl mx-auto 
                 glass-panel rounded-2xl transition-all duration-300 hover:scale-[1.02] 
                 hover:shadow-[0_0_40px_rgba(0,234,255,0.3)] border border-white/5 hover:border-cyan-400/80
                 overflow-hidden active:scale-95"
            style={{ textDecoration: 'none' }}
        >
            {/* Animated Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

            <div className="flex items-center gap-6 z-10 w-full justify-start relative">
                {icon && (
                    <div className="p-3.5 rounded-xl bg-white/5 group-hover:bg-cyan-400/20 text-cyan-400 group-hover:text-cyan-200 
                                  transition-all shadow-inner group-hover:shadow-[0_0_15px_rgba(0,234,255,0.4)]">
                        {icon}
                    </div>
                )}
                <div className="flex flex-col text-left flex-grow">
                    <span className="text-xl font-bold text-white group-hover:text-cyan-50 transition-colors tracking-wide drop-shadow-md">
                        {label}
                    </span>
                    {sublabel && (
                        <span className="text-sm font-medium text-gray-400 group-hover:text-cyan-200/80 transition-colors mt-0.5">
                            {sublabel}
                        </span>
                    )}
                </div>
            </div>

            <ExternalLink
                size={22}
                className="text-gray-500 group-hover:text-cyan-400 opacity-60 group-hover:opacity-100 transition-all duration-300 
                         transform translate-x-4 group-hover:translate-x-0 z-10"
            />

            {/* Intense Neon Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: 'inset 0 0 30px rgba(0, 234, 255, 0.1), inset 0 0 10px rgba(212, 0, 255, 0.05)',
                }}
            />
        </a>
    );
};

export default GlowingButton;
