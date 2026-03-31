import { motion } from 'motion/react';
import { Bot, Brain, Zap, Rocket, Terminal } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-24">
      {/* Header */}
      <section className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="font-mono text-primary text-[10px] tracking-[0.5em] uppercase">SYSTEM_OVERVIEW</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-brutal text-6xl md:text-9xl font-black tracking-tighter text-on-surface mb-8 leading-[0.8] uppercase"
        >
          About<br/>
          <span className="text-primary bg-black px-4 -ml-4 inline-block transform -skew-x-12">Karthik_L</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-on-surface-variant font-display text-2xl leading-relaxed"
        >
          AI Engineer with a passion for building intelligent systems that solve real-world problems.
        </motion.p>
      </section>

      {/* Bio */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="aspect-square rounded-none overflow-hidden border-2 border-primary bg-black relative group">
            <img 
              src="https://picsum.photos/seed/karthik/600/600" 
              alt="Karthik L" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-60"></div>
            <div className="absolute bottom-6 left-6 bg-primary text-black px-4 py-2 transform -skew-x-12">
              <h2 className="font-brutal text-2xl font-black uppercase">Karthik L</h2>
              <p className="font-mono text-[10px] font-black tracking-widest">AI_ENGINEER_V4</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h3 className="font-mono text-xl font-black text-primary uppercase tracking-widest border-b-2 border-primary/20 pb-2">THE_JOURNEY</h3>
            <p className="text-on-surface-variant leading-tight text-xl font-display">
              I'm an AI Engineer with 4+ years of experience building production-grade AI solutions that drive business impact. My journey spans from TCS to Manhattan Associates, where I've specialized in LLM systems, autonomous agents, and scalable AI architectures.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xl font-black text-primary uppercase tracking-widest border-b-2 border-primary/20 pb-2">CORE_PHILOSOPHY</h3>
            <p className="text-on-surface-variant leading-tight text-xl font-display">
              I believe in building AI systems that are not just technically impressive, but genuinely useful. Every project I undertake focuses on solving real business problems with measurable impact.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xl font-black text-primary uppercase tracking-widest border-b-2 border-primary/20 pb-2">WHAT_DRIVES_ME</h3>
            <p className="text-on-surface-variant leading-tight text-xl font-display">
              The challenge of transforming complex business requirements into elegant AI solutions keeps me motivated. Whether it's implementing a Text-to-SQL engine that processes 500+ queries or developing RAG pipelines that enhance customer experience, I thrive on pushing the boundaries of what's possible with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="font-brutal text-3xl font-bold uppercase tracking-tight">KEY_STRENGTHS</h2>
          <div className="h-px w-24 bg-primary-container/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'AI Agents', icon: Bot, emoji: '🤖' },
            { title: 'LLM Systems', icon: Brain, emoji: '🧠' },
            { title: 'FastAPI', icon: Zap, emoji: '⚡' },
            { title: 'Production', icon: Rocket, emoji: '🚀' },
          ].map((strength, i) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-black border-2 border-primary/20 flex flex-col items-center text-center gap-4 group hover:border-primary hover:bg-primary transition-all rounded-none"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">{strength.emoji}</div>
              <strength.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
              <h4 className="font-mono text-[10px] font-black tracking-[0.3em] uppercase group-hover:text-black">{strength.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
