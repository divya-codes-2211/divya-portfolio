import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

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

const Education = () => {
  return (
    <section id="education" className="py-32 bg-zinc-50 dark:bg-zinc-900/20 border-y border-zinc-100 dark:border-zinc-900 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <SectionHeading subtitle="Education" title="Academic Path" />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {[
            { 
              year: "2024 — 2027", 
              degree: "Bachelor of Commerce (B.Com)", 
              school: "Lucknow Public College of Professional Studies", 
              desc: "Currently in 2nd Year. Merging core commerce principles with modern data analytics techniques." 
            },
            { 
              year: "2024", 
              degree: "Data Analysis Certification", 
              school: "Google Professional Cert", 
              desc: "Focusing on data cleaning, analysis, and visualization using SQL and R." 
            }
          ].map((edu, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="flex gap-8 group p-8 rounded-[2.5rem] border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="text-sm font-bold text-zinc-400 dark:text-zinc-600 mt-1 whitespace-nowrap tracking-tighter">
                {edu.year}
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 transition-colors">{edu.degree}</h4>
                <div className="text-purple-600 dark:text-purple-400 font-medium mb-3">{edu.school}</div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
