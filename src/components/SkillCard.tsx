import { motion } from 'motion/react';
import { Brain, Database, Cpu, Cloud } from 'lucide-react';
import { SkillCategory } from '../constants';

const ICON_MAP: Record<string, any> = {
  Brain,
  Database,
  Cpu,
  Cloud,
};

export function SkillCard({ category, index }: { category: SkillCategory; index: number; key?: string | number }) {
  const Icon = ICON_MAP[category.icon] || Brain;

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-surface-container p-8 border-2 border-outline/20 hover:border-primary transition-all duration-300 rounded-none relative overflow-hidden ${
        category.id === '1' ? 'md:col-span-8' : 'md:col-span-4'
      }`}
    >
      <div className="flex justify-between items-start mb-10 relative z-10">
        <div>
          <div className="font-mono text-[10px] text-primary mb-1 uppercase tracking-[0.3em] font-black">
            SUB_MODULE: {category.subModule}
          </div>
          <h2 className="font-brutal text-3xl font-black text-on-surface uppercase tracking-tighter">
            {category.title}
          </h2>
        </div>
        <Icon className="w-10 h-10 text-primary" />
      </div>

      <div className={`grid gap-8 relative z-10 ${category.id === '1' ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
        <div className="space-y-6">
          {category.skills.slice(0, category.id === '1' ? 2 : 3).map(skill => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between font-mono text-[10px] font-black uppercase tracking-widest text-primary/80">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-4 w-full bg-primary/5 border border-primary/20 rounded-none overflow-hidden p-[2px]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-none" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {category.id === '1' && (
          <div className="space-y-6">
            {category.skills.slice(2).map(skill => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between font-mono text-[10px] font-black uppercase tracking-widest text-primary/80">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-4 w-full bg-primary/5 border border-primary/20 rounded-none overflow-hidden p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary rounded-none" 
                  />
                </div>
              </div>
            ))}
            {category.tags && (
              <div className="flex flex-wrap gap-2 mt-6">
                {category.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary text-on-primary font-mono text-[10px] font-black uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 right-0 p-4 opacity-[0.03] pointer-events-none">
        <Icon className="w-48 h-48 text-primary" />
      </div>
    </motion.section>
  );
}
