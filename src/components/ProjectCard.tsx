import { motion } from 'motion/react';
import { Project } from '../constants';
import { ArrowDown, ArrowUpDown } from 'lucide-react';

export function ProjectCard({ project, index }: { project: Project; index: number; key?: string }) {
  const isFullWidth = project.fullWidth;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative group ${isFullWidth ? 'col-span-full' : ''}`}
    >
      <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-3xl -z-10" />
      
      <div className="bg-[#0A0C10]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
        <div className={`grid grid-cols-1 ${project.flow ? 'xl:grid-cols-2' : ''} divide-y xl:divide-y-0 xl:divide-x divide-white/5`}>
          
          {/* Left Side: Content */}
          <div className="p-8 lg:p-12 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest">{project.tagId} / {project.category}</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
              {project.title}
            </h3>

            {/* Metrics Bar */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${project.metrics.length > 2 ? 'md:grid-cols-3' : ''} ${project.metrics.length > 3 ? 'lg:grid-cols-4' : ''} gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-2xl mb-8`}>
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center py-2">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 whitespace-nowrap">{metric.value}</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter leading-tight">{metric.subLabel}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Problem</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Solution</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/10 text-[10px] font-mono text-cyan-400 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Flow Diagram (Optional) */}
          {project.flow && (
            <div className="p-8 xl:p-12 bg-white/[0.01] flex flex-col justify-center items-center relative">
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="w-full max-w-md space-y-4 relative z-10">
                {project.flow.map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      step.type === 'input' ? 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400' :
                      step.type === 'process' ? 'bg-purple-500/5 border-purple-500/20 text-purple-400' :
                      step.type === 'system' ? 'bg-white/[0.03] border-white/10 text-slate-400' :
                      'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        step.type === 'input' ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]' :
                        step.type === 'process' ? 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]' :
                        step.type === 'system' ? 'bg-slate-500' :
                        'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
                      }`} />
                      <span className="text-xs font-mono tracking-wide">{step.label}</span>
                    </div>
                    {i < project.flow.length - 1 && (
                      <div className="py-2">
                        {step.label === 'MCP Server (Context Engine)' ? (
                          <ArrowUpDown className="w-3 h-3 text-slate-700" />
                        ) : (
                          <ArrowDown className="w-3 h-3 text-slate-700" />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

