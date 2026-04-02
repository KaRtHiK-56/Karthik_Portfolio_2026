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
      
      <div className="bg-surface-container border-2 border-outline/10 rounded-none overflow-hidden hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(var(--primary-rgb),0.1)] hover:shadow-[12px_12px_0px_0px_rgba(var(--primary-rgb),0.2)]">
        <div className={`grid grid-cols-1 ${project.flow ? 'xl:grid-cols-2' : ''} divide-y xl:divide-y-0 xl:divide-x divide-outline/10`}>
          
          {/* Left Side: Content */}
          <div className="p-8 lg:p-12 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono text-primary tracking-widest">{project.tagId} / {project.category}</span>
            </div>

            <h3 className="font-brutal text-3xl lg:text-5xl font-black text-on-surface mb-8 leading-tight tracking-tighter uppercase">
              {project.title}
            </h3>

            {/* Metrics Bar */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${project.metrics.length > 2 ? 'md:grid-cols-3' : ''} ${project.metrics.length > 3 ? 'lg:grid-cols-4' : ''} gap-8 p-8 bg-surface-container-low border-2 border-outline/10 rounded-none mb-8`}>
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center py-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2 whitespace-nowrap">{metric.value}</div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-tighter leading-tight">{metric.subLabel}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-3">Problem</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-3">Solution</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary rounded-none uppercase font-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Flow Diagram (Optional) */}
          {project.flow && (
            <div className="p-8 xl:p-12 bg-surface-container-lowest/50 flex flex-col justify-center items-center relative">
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="w-full max-w-md space-y-4 relative z-10">
                {project.flow.map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      step.type === 'input' ? 'bg-primary/5 border-primary/20 text-primary' :
                      step.type === 'process' ? 'bg-secondary/5 border-secondary/20 text-secondary' :
                      step.type === 'system' ? 'bg-surface-container-high border-outline/10 text-on-surface-variant' :
                      'bg-primary/10 border-primary/30 text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        step.type === 'input' ? 'bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]' :
                        step.type === 'process' ? 'bg-secondary shadow-[0_0_8px_rgba(var(--secondary-rgb),0.6)]' :
                        step.type === 'system' ? 'bg-outline' :
                        'bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]'
                      }`} />
                      <span className="text-xs font-mono tracking-wide">{step.label}</span>
                    </div>
                    {i < project.flow.length - 1 && (
                      <div className="py-2">
                        {step.label === 'MCP Server (Context Engine)' ? (
                          <ArrowUpDown className="w-3 h-3 text-outline" />
                        ) : (
                          <ArrowDown className="w-3 h-3 text-outline" />
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

