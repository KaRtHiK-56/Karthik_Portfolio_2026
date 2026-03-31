import { motion } from 'motion/react';
import { TimelineEvent } from '../constants';

export function TimelineItem({ event, index }: { event: TimelineEvent; index: number; key?: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-20 relative pl-12 group"
    >
      {/* Square Marker */}
      <div className={`absolute -left-[10px] top-1 w-6 h-6 border-2 transform rotate-45 transition-all duration-500 group-hover:rotate-0 ${
        event.isCurrent 
          ? "bg-primary border-primary shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" 
          : "bg-black border-primary/40 group-hover:border-primary"
      }`} />
      
      <span className="font-mono text-[10px] font-black text-primary/60 tracking-[0.3em] block mb-2 uppercase">
        {event.period}
      </span>
      <h3 className="font-brutal text-3xl font-black text-on-surface mb-1 group-hover:text-primary transition-colors uppercase tracking-tighter">
        {event.company}
      </h3>
      <p className="font-mono text-[10px] text-primary/40 mb-6 uppercase font-black tracking-widest">
        ROLE: {event.role}
      </p>
      
      <div className="bg-black p-8 border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary transition-all duration-300 rounded-none">
        <p className="text-on-surface-variant group-hover:text-black text-base leading-tight transition-colors font-display">
          {event.description}
        </p>
        {event.skills && (
          <div className="flex flex-wrap gap-2 mt-6">
            {event.skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-primary/10 group-hover:bg-black text-[10px] font-mono text-primary group-hover:text-primary transition-colors border border-primary/20 uppercase font-black">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
