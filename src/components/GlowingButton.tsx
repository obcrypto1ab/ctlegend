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
                 hover:shadow-[0_0_30px_rgba(0,234,255,0.25)] border border-white/10 hover:border-cyan-400/60
                 overflow-hidden"
            style={{ textDecoration: 'none' }}
        >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

            <div className="flex items-center gap-6 z-10 w-full justify-start">
                {icon && (
                    <div className="p-3.5 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 transition-colors shadow-inner">
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
                className="text-gray-500 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10"
            />

            {/* Neon Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: 'inset 0 0 25px rgba(0, 234, 255, 0.05)',
                }}
            />
        </a>
    );
};

export default GlowingButton;
