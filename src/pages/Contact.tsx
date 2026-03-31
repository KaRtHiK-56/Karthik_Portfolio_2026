import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Edit3, Send, Share2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 md:px-12 space-y-24">
      {/* Header */}
      <section className="space-y-8">
        <div className="inline-block px-4 py-1 bg-black border-2 border-primary text-[10px] font-mono text-primary tracking-[0.3em] uppercase font-black">
          // CONTACT_NODE
        </div>
        <h1 className="font-brutal text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase break-words">
          STK_<span className="text-primary bg-black px-4 -ml-4 inline-block transform -skew-x-12">CONTACT</span>
        </h1>
        <p className="font-display text-xl sm:text-2xl text-on-surface-variant leading-tight max-w-2xl">
          Initiate direct encrypted communication channel for high-impact AI collaborations.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Form */}
        <div className="lg:col-span-7">
          <div className="bg-black p-6 sm:p-12 border-2 border-primary relative overflow-hidden group rounded-none shadow-[8px_8px_0px_0px_rgba(0,229,255,1)]">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Share2 className="w-8 h-8 text-primary" />
                <h2 className="font-brutal text-3xl sm:text-4xl font-black tracking-tighter uppercase break-words">NEURAL_CONNECT</h2>
              </div>
              <p className="text-[10px] text-primary/60 font-mono tracking-[0.4em] uppercase font-black">INITIATE DIRECT ENCRYPTED COMMUNICATION CHANNEL</p>
            </div>

            <form 
              className="space-y-10" 
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
              <div className="space-y-3">
                <label className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase font-black">Ident_Name</label>
                <input 
                  name="name"
                  required
                  className="w-full bg-black border-2 border-primary/20 focus:border-primary text-on-surface py-6 px-8 rounded-none placeholder:text-primary/20 transition-all font-mono text-sm outline-none uppercase font-black" 
                  placeholder="USER_INPUT_REQUIRED"
                />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase font-black">Network_Address</label>
                <input 
                  name="email"
                  required
                  className="w-full bg-black border-2 border-primary/20 focus:border-primary text-on-surface py-6 px-8 rounded-none placeholder:text-primary/20 transition-all font-mono text-sm outline-none uppercase font-black" 
                  placeholder="EMAIL@DOMAIN.COM"
                  type="email"
                />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase font-black">Packet_Payload</label>
                <textarea 
                  name="message"
                  required
                  className="w-full bg-black border-2 border-primary/20 focus:border-primary text-on-surface py-6 px-8 rounded-none placeholder:text-primary/20 transition-all font-mono text-sm outline-none resize-none uppercase font-black" 
                  placeholder="TRANSMIT_MESSAGE_HERE..."
                  rows={6}
                />
              </div>
              <button type="submit" className="w-full bg-primary py-6 rounded-none font-mono text-base font-black tracking-[0.3em] text-black hover:bg-white transition-all flex justify-center items-center gap-4 group uppercase border-2 border-primary">
                INIT_TRANSMISSION <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Nodes */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-black p-6 sm:p-12 border-2 border-primary rounded-none">
            <h4 className="font-mono text-[10px] text-primary/40 tracking-[0.5em] uppercase mb-16 text-center font-black">EXTERNAL_NODES</h4>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {[
                { name: 'GITHUB', icon: Github, url: 'https://github.com/KaRtHiK-56' },
                { name: 'LINKEDIN', icon: Linkedin, url: 'https://www.linkedin.com/in/l-karthik/' },
                { name: 'MEDIUM', icon: Edit3, url: 'https://karthikvegeta.medium.com/' },
                { name: 'EMAIL', icon: Mail, url: 'mailto:karthiksurya611@gmail.com' },
              ].map(node => (
                <a 
                  key={node.name} 
                  href={node.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-8 rounded-none bg-black border-2 border-primary/20 hover:border-primary hover:bg-primary transition-all group"
                >
                  <div className="w-12 h-12 sm:w-16 h-16 flex items-center justify-center rounded-none bg-primary/10 group-hover:bg-black transition-all">
                    <node.icon className="w-6 h-6 sm:w-8 h-8 text-primary group-hover:text-primary" />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-primary/40 group-hover:text-black transition-colors">{node.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="p-12 bg-black border-2 border-primary rounded-none relative overflow-hidden group">
            <h5 className="font-mono text-[10px] text-primary mb-8 tracking-[0.4em] uppercase font-black">System_Status</h5>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                <span className="text-[10px] text-primary/40 font-mono font-black tracking-widest uppercase">ENCRYPTION</span>
                <span className="text-[10px] text-primary font-mono font-black tracking-widest uppercase">AES-256_ACTIVE</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                <span className="text-[10px] text-primary/40 font-mono font-black tracking-widest uppercase">LATENCY</span>
                <span className="text-[10px] text-primary font-mono font-black tracking-widest uppercase">14MS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-primary/40 font-mono font-black tracking-widest uppercase">UPLINK</span>
                <span className="text-[10px] text-primary font-mono font-black tracking-widest uppercase">STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
