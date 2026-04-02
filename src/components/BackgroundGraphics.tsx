import React from 'react';
import { motion } from 'motion/react';

export const BackgroundGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-pulse delay-700" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse delay-1000" />
        
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse delay-300" />
        <div className="absolute left-0 top-2/4 h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse delay-500" />
        <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse delay-1500" />
      </div>

      {/* Floating Tech Particles - reduced count on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0.1 + Math.random() * 0.2,
            scale: 0.5 + Math.random() * 1
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 100 + 'px'],
            x: [null, (Math.random() - 0.5) * 100 + 'px'],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
        />
      ))}
      
      {/* Additional particles for desktop only */}
      <div className="hidden md:block">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`desktop-${i}`}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0.1 + Math.random() * 0.2,
              scale: 0.5 + Math.random() * 1
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 100 + 'px'],
              x: [null, (Math.random() - 0.5) * 100 + 'px'],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent shadow-[0_0_15px_rgba(0,229,255,0.2)]"
      />

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[100]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
             backgroundSize: '100% 2px, 3px 100%'
           }} 
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-[101]"
           style={{
             backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
             backgroundRepeat: 'repeat',
             mixBlendMode: 'overlay'
           }}
      />
    </div>
  );
};
