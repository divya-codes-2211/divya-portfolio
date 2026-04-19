import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, PieChart, BarChart3, Table, Cpu, Binary, Cloud, Layers, LineChart, Code2 } from 'lucide-react';

const TechMarquee = () => {
  const skills = [
    { name: "Python", icon: Terminal },
    { name: "SQL", icon: Database },
    { name: "Tableau", icon: PieChart },
    { name: "Power BI", icon: BarChart3 },
    { name: "Pandas", icon: Table },
    { name: "Scikit-Learn", icon: Cpu },
    { name: "TensorFlow", icon: Binary },
    { name: "AWS", icon: Cloud },
    { name: "BigQuery", icon: Layers },
    { name: "Excel", icon: Table },
    { name: "Data Viz", icon: LineChart },
    { name: "R Language", icon: Code2 }
  ];

  return (
    <div className="py-10 bg-white dark:bg-zinc-950 overflow-hidden border-y border-zinc-100 dark:border-zinc-900">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex animate-marquee whitespace-nowrap"
      >
        {[...skills, ...skills].map((skill, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.1, color: "#9333ea" }}
            className="flex items-center gap-3 mx-10 text-xl font-medium text-zinc-400 dark:text-zinc-600 lowercase tracking-tight transition-colors cursor-default group"
          >
            <skill.icon size={20} className="text-zinc-300 dark:text-zinc-700 group-hover:text-purple-500 transition-colors" />
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
