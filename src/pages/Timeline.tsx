import { motion } from 'motion/react';
import { TIMELINE } from '../constants';
import { TimelineItem } from '../components/TimelineItem';

export default function TimelinePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <section className="relative">
        <div className="mb-12 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-mono text-primary text-[10px] tracking-[0.2em] font-black">SYSTEM_TRACE // v4.0</span>
            <div className="h-[1px] w-12 bg-primary/20"></div>
          </motion.div>
          
          <motion.h1
            className="font-brutal text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-on-surface mb-8 leading-[0.8] uppercase break-words max-w-full"
          >
            WHERE<br/>
            <span className="text-primary bg-surface-container-highest px-4 inline-block transform -skew-x-12 -translate-x-2 max-w-full break-words ai-glow-primary">
              I'VE_SHIPPED
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-on-surface-variant font-display text-2xl leading-tight ai-prompt-cursor"
          >
            Building AI solutions that drive real business impact across enterprise environments.
          </motion.p>
        </div>

        <div className="relative ml-4 md:ml-8 mt-24">
          {/* Vertical Solid Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary" />
          
          <div className="max-w-3xl">
            {TIMELINE.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
