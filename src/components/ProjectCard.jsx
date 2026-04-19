import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ProjectCard = ({ title, desc, tags, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -12, transition: { type: "spring", stiffness: 300 } }}
    className="group p-8 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-[2.5rem] border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500"
  >
    <div className="w-14 h-14 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-purple-600 mb-8 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{title}</h3>
    <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3 italic text-sm">
      "{desc}"
    </p>
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-500 rounded-full text-[10px] font-bold uppercase tracking-wider group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
          {tag}
        </span>
      ))}
    </div>
    <button className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white group/btn">
      View Dataset <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform text-purple-500" />
    </button>
  </motion.div>
);

export default ProjectCard;
