import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <header className="mb-24 space-y-8 relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="inline-block px-4 py-1 bg-surface-container border-2 border-primary text-[10px] font-mono text-primary tracking-[0.3em] uppercase font-black">
          // DATA_REPOSITORY_V4
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-brutal text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-on-surface mb-8 leading-[0.8] uppercase break-words"
        >
          Projects That<br/>
          <span className="text-primary bg-surface-container-highest px-4 -ml-4 inline-block transform -skew-x-12 ai-glow-primary">SHIP</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-on-surface-variant font-display text-2xl leading-tight ai-prompt-cursor"
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

