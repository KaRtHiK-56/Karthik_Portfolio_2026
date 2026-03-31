import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
        >
          Projects That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Ship</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-slate-400 text-xl font-light leading-relaxed"
        >
          Each built around a real problem. Measured by impact, not lines of code.
        </motion.p>
      </header>

      <section className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>
    </div>
  );
}

