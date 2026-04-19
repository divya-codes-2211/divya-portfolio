import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-2xl border transition-all duration-500 ${
          scrolled 
          ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-purple-500/5 scale-95" 
          : "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border-transparent"
        }`}
      >
        {/* Compact Logo */}
        <div className="text-lg font-bold tracking-tighter text-zinc-900 dark:text-white">
          DIVYANJALI
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800" />

        {/* Centered Links */}
        <div className="flex gap-6 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          {['about', 'projects', 'education', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="capitalize hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800" />

        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:scale-110 transition-all active:scale-95"
        >
          {isDark ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-zinc-600" />}
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
