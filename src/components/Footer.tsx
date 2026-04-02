export function Footer() {
  return (
    <footer className="w-full py-16 border-t-2 border-primary/20 flex flex-col items-center gap-12 px-10 bg-surface-container">
      <div className="flex flex-wrap justify-center gap-12">
        <a href="https://github.com/KaRtHiK-56" className="text-primary/60 font-mono text-[10px] tracking-[0.4em] hover:text-on-primary hover:bg-primary px-4 py-2 transition-all uppercase font-black">GITHUB</a>
        <a href="https://www.linkedin.com/in/l-karthik" className="text-primary/60 font-mono text-[10px] tracking-[0.4em] hover:text-on-primary hover:bg-primary px-4 py-2 transition-all uppercase font-black">LINKEDIN</a>
        <a href="https://karthikvegeta.medium.com" className="text-primary/60 font-mono text-[10px] tracking-[0.4em] hover:text-on-primary hover:bg-primary px-4 py-2 transition-all uppercase font-black">MEDIUM</a>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="text-primary/60 font-mono text-[10px] tracking-[0.2em] uppercase text-center max-w-xl leading-relaxed">
          Designed & built by Karthik L · AI Agent Engineer · Hosur, Tamil Nadu 🇮🇳
        </p>
        <div className="flex items-center gap-4 border-2 border-primary px-6 py-3">
          <span className="w-2 h-2 bg-primary animate-pulse"></span>
          <span className="text-[10px] font-mono text-primary uppercase font-black tracking-[0.5em]">SYSTEM_OPERATIONAL_v4.0</span>
        </div>
      </div>
    </footer>
  );
}
