import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl h-[85vh] bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
                <h3 className="text-zinc-900 dark:text-white font-bold text-lg">Divyanjali_Resume.pdf</h3>
                <div className="flex items-center gap-3">
                  <a 
                    href="/resume.pdf"
                    download="Divyanjali_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    <Download size={16} /> Download
                  </a>
                  <button 
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-xl transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              {/* Modal Body */}
              <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-800/50">
                <iframe 
                  src="/resume.pdf" 
                  className="w-full h-full border-none"
                  title="Resume Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header id="about" className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Hero Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex-1 space-y-8 text-center lg:text-left"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-zinc-500">2nd Year B.Com @ LPCPS Lucknow</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            Crunching <span className="text-purple-600">Data</span> <br/> 
            with Commerce.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
            I'm <span className="text-zinc-900 dark:text-white font-medium">Divyanjali Tiwari</span>, a student at <span className="text-purple-600 font-semibold">Lucknow Public College of Professional Studies</span>. I bridge commerce with predictive analytics.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="w-full sm:w-auto text-center px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold shadow-xl shadow-purple-500/10"
              >
                Start a Collaboration
              </motion.a>
              <motion.button 
                onClick={() => setIsResumeOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto justify-center px-8 py-4 bg-transparent text-zinc-900 dark:text-white border-2 border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 rounded-2xl font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Download size={20} />
                Resume
              </motion.button>
            </div>
            <div className="flex gap-4 w-full sm:w-auto justify-center">
              <motion.a 
                whileHover={{ y: -5, color: "#9333ea" }}
                href="https://github.com/divya-codes-2211" 
                className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-colors"
              >
                <GithubIcon />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#9333ea" }}
                href="www.linkedin.com/in/divyanjali-tiwari-30b59a369" 
                className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-colors"
              >
                <LinkedinIcon />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait Photo */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="relative group flex-shrink-0"
        >
          <div className="absolute -inset-4 bg-purple-500/10 rounded-[3.5rem] blur-2xl group-hover:bg-purple-500/20 transition-all duration-700" />
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-96 md:w-80 md:h-[480px] bg-zinc-200 dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <img 
              src="https://ik.imagekit.io/gwv0quzrfq/pfp.png?updatedAt=1775108297446" 
              alt="Divyanjali Tiwari"
              className="w-full h-full object-cover grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-700 scale-110 hover:scale-100 active:scale-100"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-1 opacity-70 text-center">Lucknow, India</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </header>
    </>
  );
};

export default Hero;
