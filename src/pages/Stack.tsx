import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { SkillCard } from '../components/SkillCard';

export default function StackPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <header className="mb-16 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-[1px] w-8 bg-primary-container"></div>
          <span className="font-mono text-xs text-primary tracking-[0.2em]">CORE_SYSTEMS_LOADED</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-brutal text-6xl md:text-9xl font-black tracking-tighter text-on-surface mb-8 leading-[0.8] uppercase"
        >
          MY <span className="text-primary bg-black px-4 -ml-4 inline-block transform -skew-x-12">ARSENAL</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed"
        >
          Carefully selected tools — each chosen for production-grade performance.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {SKILLS.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Neural Architecture Map Section */}
      <section className="mt-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">VISUAL_HEURISTICS</div>
          <h2 className="font-brutal text-4xl font-bold text-on-surface">Neural Architecture Map</h2>
        </div>
        
        <div className="bg-black p-6 md:p-12 border-2 border-primary/20 relative overflow-hidden min-h-[400px] rounded-none">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="200" r="100" stroke="#00e5ff" strokeDasharray="8 8" strokeWidth="2" />
              <circle cx="400" cy="200" r="150" stroke="#00e5ff" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="100" y1="100" x2="400" y2="200" stroke="#00e5ff" strokeWidth="2" opacity="0.2" />
              <line x1="700" y1="300" x2="400" y2="200" stroke="#00e5ff" strokeWidth="2" opacity="0.2" />
              <line x1="100" y1="300" x2="400" y2="200" stroke="#00e5ff" strokeWidth="2" opacity="0.2" />
              <line x1="700" y1="100" x2="400" y2="200" stroke="#00e5ff" strokeWidth="2" opacity="0.2" />
              <rect x="96" y="96" width="8" height="8" fill="#00e5ff" />
              <rect x="696" y="296" width="8" height="8" fill="#00e5ff" />
              <rect x="96" y="296" width="8" height="8" fill="#00e5ff" />
              <rect x="696" y="96" width="8" height="8" fill="#00e5ff" />
              <rect x="394" y="194" width="12" height="12" fill="#00e5ff" />
            </svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <motion.div 
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-black p-6 border-2 border-primary/40 self-start rounded-none"
            >
              <div className="font-mono text-[10px] text-primary mb-2 font-black uppercase tracking-widest">INPUT_LAYER</div>
              <div className="text-sm font-black text-on-surface mb-2 uppercase">Structured Data Streams</div>
              <div className="text-[10px] text-primary/60 font-mono uppercase tracking-widest">LATENCY: 12ms</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-primary text-black p-6 border-2 border-primary self-center rounded-none"
            >
              <div className="font-mono text-[10px] text-black/60 mb-2 font-black uppercase tracking-widest">PROCESSING_UNIT</div>
              <div className="text-sm font-black mb-2 uppercase">Multi-Agent Orchestrator</div>
              <div className="text-[10px] text-black/60 font-mono uppercase tracking-widest">THROUGHPUT: HIGH</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, x: -10 }}
              className="bg-black p-6 border-2 border-primary/40 self-end rounded-none"
            >
              <div className="font-mono text-[10px] text-primary mb-2 font-black uppercase tracking-widest">OUTPUT_LAYER</div>
              <div className="text-sm font-black text-on-surface mb-2 uppercase">Agentic Execution</div>
              <div className="text-[10px] text-primary/60 font-mono uppercase tracking-widest">ACCURACY: 99.4%</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
