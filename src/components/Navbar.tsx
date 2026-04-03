import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/timeline' },
  { name: 'Stack', path: '/stack' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline/10 flex justify-between items-center px-6 md:px-12 h-20 transition-colors duration-300">
      <Link to="/" className="text-xl font-bold tracking-tighter text-on-surface font-sans">
        KARTHIK<span className="text-primary">.AI</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <motion.div
            key={link.path}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              to={link.path}
              className={cn(
                "text-sm tracking-wide transition-all duration-300 glitch-hover",
                location.pathname === link.path 
                  ? "text-primary font-semibold" 
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 bg-surface-container-low border border-outline/10 rounded-full">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase font-black">AI_CORE_ONLINE</span>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-surface-container-high border border-outline/20 text-primary hover:bg-primary/10 transition-all"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-on-surface"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-background border-b border-outline/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg tracking-wide transition-all duration-300",
                  location.pathname === link.path 
                    ? "text-primary font-semibold" 
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
