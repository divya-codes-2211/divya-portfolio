import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-zinc-100 dark:border-zinc-900 text-center bg-zinc-50/30 dark:bg-transparent">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white">
          <span className="md:hidden">DT<span className="text-purple-600">.</span></span>
          <span className="hidden md:inline">DIVYANJALI<span className="text-purple-600">.</span>T</span>
        </div>
        <div className="text-zinc-400 text-sm font-medium">
          &copy; 2024 • Commerce & Analytics Portfolio • LPCPS Lucknow
        </div>
        <div className="flex justify-center gap-8">
          <motion.a whileHover={{ y: -5 }} href="https://github.com/divya-codes-2211" className="text-zinc-400 hover:text-purple-600 transition-colors">
            <GithubIcon />
          </motion.a>
          <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/divyanjali-tiwari-30b59a369" className="text-zinc-400 hover:text-purple-600 transition-colors">
            <LinkedinIcon />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
