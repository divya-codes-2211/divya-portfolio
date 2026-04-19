import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, LineChart } from 'lucide-react';
import ProjectCard from './ProjectCard';
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

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.1 }}
        variants={fadeInUp}
      >
        <SectionHeading subtitle="Portfolio" title="Recent Analysis" />
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <ProjectCard 
          title="Market Sentiment"
          desc="Analyzing commerce trends and real-time social feeds to predict consumer volatility."
          tags={["Python", "Pandas", "NLP"]}
          icon={LineChart}
        />
        <ProjectCard 
          title="LPCPS Analytics"
          desc="Optimizing campus resource allocation based on historical student traffic data at Lucknow Public."
          tags={["SQL", "Tableau", "Stats"]}
          icon={Layers}
        />
        <ProjectCard 
          title="Finance Clustering"
          desc="Segmenting banking customers based on transactional history and credit patterns."
          tags={["ML", "Clustering", "R"]}
          icon={Database}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
