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
                <Sun className="text-yellow-400 group-hover:text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]" size={24} />
            ) : (
                <Moon className="text-cyan-600 group-hover:text-cyan-500" size={24} />
            )}
        </button>
    );
};

export default ThemeToggle;
