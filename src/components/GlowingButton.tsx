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
            className="group relative flex items-center justify-between p-4 my-3 w-full max-w-md mx-auto 
                 glass-panel rounded-xl transition-all duration-300 hover:scale-[1.02] 
                 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] border border-white/5 hover:border-cyan-400/50"
            style={{ textDecoration: 'none' }}
        >
            <div className="flex items-center gap-4">
                {icon && (
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {icon}
                    </div>
                )}
                <div className="flex flex-col text-left">
                    <span className="text-lg font-bold text-white group-hover:text-cyan-50 transition-colors">
                        {label}
                    </span>
                    {sublabel && (
                        <span className="text-sm text-gray-400 group-hover:text-cyan-200/70 transition-colors">
                            {sublabel}
                        </span>
                    )}
                </div>
            </div>

            <ExternalLink
                size={20}
                className="text-gray-500 group-hover:text-cyan-400 opacity-50 group-hover:opacity-100 transition-all transform group-hover:translate-x-1"
            />

            {/* Neon Glow Overlay */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: 'inset 0 0 20px rgba(0, 243, 255, 0.1)',
                }}
            />
        </a>
    );
};

export default GlowingButton;
