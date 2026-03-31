import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Send, Github, Linkedin, Twitter, Mail, Edit3, Bot, Share2, Network, Cpu, CheckCheck, BarChart3 } from 'lucide-react';
import { PROJECTS } from '../constants';

const ROLES = [
  'AI Agent Engineer',
  'LLM Specialist',
  'Generative AI Engineer'
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-20 sm:space-y-32 px-4 sm:px-6 md:px-12">
      {/* Hero Section */}
      <section className="min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center relative pt-8 sm:pt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2 w-fit bg-surface-container-low rounded-lg border border-white/5"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-primary uppercase">STATUS_ACTIVE</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-brutal text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter text-on-surface mb-3 sm:mb-4 break-words leading-tight"
        >
          KARTHIK <span className="gradient-text">L</span>
        </motion.h1>

        <div className="h-16 sm:h-20 md:h-24 overflow-hidden mb-4 sm:mb-0">
          <AnimatePresence mode="wait">
            <motion.h2
              key={ROLES[roleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary-container leading-tight"
            >
              {ROLES[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-end mt-4 sm:mt-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
              Building enterprise-grade AI solutions with proven impact across TCS and Manhattan Associates. Specialized in LLM systems, autonomous agents, and scalable AI architectures that drive business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: 'Years Experience', value: '4+' },
              { label: 'Efficiency Gain', value: '40%' },
              { label: 'System Uptime', value: '99.9%' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 sm:p-5 md:p-6 bg-surface-container-low rounded-xl border border-white/5"
              >
                <div className="font-brutal text-2xl sm:text-3xl md:text-4xl text-primary mb-1">{stat.value}</div>
                <div className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mb-10 sm:mb-16">
          <h2 className="font-brutal text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">CORE_CAPABILITIES</h2>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-primary-container to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { 
              title: 'Autonomous AI Agents', 
              desc: 'Developing self-reasoning agents capable of multi-step task execution and environment adaptation.',
              icon: Bot,
              tag: '01 // AUTO_REASON'
            },
            { 
              title: 'MCP Powered Agents', 
              desc: 'Implementing Model Context Protocol architectures to connect AI to specialized external data silos.',
              icon: Share2,
              tag: '02 // CONTEXT_BRIDGE'
            },
            { 
              title: 'LLM Pipelines', 
              desc: 'End-to-end RAG and fine-tuning pipelines optimized for throughput and factual accuracy.',
              icon: Network,
              tag: '03 // INFRA_FLOW'
            },
            { 
              title: 'Scalable AI APIs', 
              desc: 'Robust, distributed backend systems designed to handle millions of inference requests per minute.',
              icon: Cpu,
              tag: '04 // SCALE_ENGINE'
            },
          ].map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-5 sm:p-6 md:p-8 bg-surface-container-high rounded-xl border border-white/5 hover:border-primary-container/30 transition-all duration-500 flex flex-col gap-4 sm:gap-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-surface-container-highest text-primary">
                <cap.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
              <div className="mt-auto font-mono text-[9px] sm:text-[10px] text-primary/50 group-hover:text-primary transition-colors">
                {cap.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 md:py-24 border border-primary-container/20 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-12 lg:p-16 bg-surface/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05),transparent_70%)]"></div>
        
        <div className="text-center mb-10 sm:mb-16 relative z-10">
          <h2 className="font-brutal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-container mb-4 sm:mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-display px-4">
            Building enterprise AI solutions that deliver real business impact through intelligent systems and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 relative z-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-5 sm:p-6 md:p-8 bg-surface-container-low rounded-xl sm:rounded-2xl border border-secondary-container/30 hover:border-primary-container/50 transition-all duration-500 relative overflow-hidden flex flex-col gap-6 sm:gap-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/5 to-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-brutal text-lg sm:text-xl md:text-2xl font-bold text-on-surface mb-3 sm:mb-4 group-hover:text-primary-container transition-colors">
                  {project.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-primary-container/30 text-[9px] sm:text-[10px] font-mono text-primary-container tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to="/projects" 
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-mono text-xs font-bold rounded-full w-fit hover:scale-105 transition-all shadow-lg shadow-primary-container/20"
                >
                  View Details <Send className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center relative z-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full border border-primary-container/50 text-primary-container font-mono text-xs sm:text-sm font-bold hover:bg-primary-container/10 transition-all group"
          >
            View All Projects <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Neural Connect Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden group border border-outline-variant">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/15 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary-container/15 rounded-full blur-[80px]"></div>
            
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <h2 className="font-brutal text-xl sm:text-2xl font-bold tracking-tight break-words">NEURAL_CONNECT</h2>
              </div>
              <p className="text-[10px] sm:text-xs text-on-surface-variant font-mono tracking-tight">INITIATE DIRECT ENCRYPTED COMMUNICATION CHANNEL</p>
            </div>

            <form 
              className="space-y-4 sm:space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const message = formData.get('message') as string;
                const subject = encodeURIComponent(`Neural Connect from ${name}`);
                const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
                const mailtoUrl = `mailto:karthiksurya611@gmail.com?subject=${subject}&body=${body}`;
                window.location.href = mailtoUrl;
              }}
            >
              <div className="space-y-1">
                <label className="font-mono text-[9px] sm:text-[10px] text-primary tracking-widest uppercase pl-1">Ident_Name</label>
                <input 
                  name="name"
                  required
                  className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container text-on-surface py-3 sm:py-4 px-3 sm:px-4 rounded-lg placeholder:text-outline/40 transition-all font-mono text-xs sm:text-sm" 
                  placeholder="USER_INPUT_REQUIRED"
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[9px] sm:text-[10px] text-primary tracking-widest uppercase pl-1">Network_Address</label>
                <input 
                  name="email"
                  required
                  className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container text-on-surface py-3 sm:py-4 px-3 sm:px-4 rounded-lg placeholder:text-outline/40 transition-all font-mono text-xs sm:text-sm" 
                  placeholder="EMAIL@DOMAIN.COM"
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[9px] sm:text-[10px] text-primary tracking-widest uppercase pl-1">Packet_Payload</label>
                <textarea 
                  name="message"
                  required
                  className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container text-on-surface py-3 sm:py-4 px-3 sm:px-4 rounded-lg placeholder:text-outline/40 transition-all font-mono text-xs sm:text-sm resize-none" 
                  placeholder="TRANSMIT_MESSAGE_HERE..."
                  rows={4}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary-container to-secondary-container py-3 sm:py-4 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-widest text-on-primary hover:opacity-90 transition-all shadow-[0_10px_30px_rgba(0,229,255,0.15)] flex justify-center items-center gap-2"
              >
                INIT_TRANSMISSION <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div className="bg-surface-container-low p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-outline-variant">
            <h4 className="font-mono text-[9px] sm:text-[10px] text-slate-500 tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 text-center">EXTERNAL_NODES</h4>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: 'GITHUB', icon: Github, url: 'https://github.com/KaRtHiK-56' },
                { name: 'LINKEDIN', icon: Linkedin, url: 'https://www.linkedin.com/in/l-karthik/' },
                { name: 'MEDIUM', icon: Edit3, url: 'https://karthikvegeta.medium.com/' },
                { name: 'EMAIL', icon: Mail, url: 'mailto:karthiksurya611@gmail.com' },
              ].map(node => (
                <a key={node.name} href={node.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 sm:gap-3 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-surface-container group-hover:bg-primary-container/20 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                    <node.icon className="w-4 h-4 sm:w-5 sm:h-5 text-outline group-hover:text-primary-container" />
                  </div>
                  <span className="font-mono text-[8px] sm:text-[9px] text-slate-500 group-hover:text-primary transition-colors text-center">{node.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://picsum.photos/seed/network/600/400" 
              alt="Network Node" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}