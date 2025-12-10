import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full glass-panel hover:scale-110 transition-transform duration-300 group"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="text-yellow-300 group-hover:text-yellow-200 drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]" size={24} />
            ) : (
                <Moon className="text-cyan-500 group-hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]" size={24} />
            )}
        </button>
    );
};

export default ThemeToggle;
