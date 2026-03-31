import { Link, useLocation } from 'react-router-dom';
import { 
  Database, 
  Briefcase, 
  Brain, 
  History,
  Terminal
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SIDE_LINKS = [
  { name: 'HOME', path: '/', icon: Database },
  { name: 'ABOUT', path: '/about', icon: Terminal },
  { name: 'PROJECTS', path: '/projects', icon: Briefcase },
  { name: 'SKILLS', path: '/stack', icon: Brain },
  { name: 'LOGS', path: '/timeline', icon: History },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r-2 border-primary bg-black flex-col z-40 pt-24">
      <div className="px-8 mb-8">
        <div className="flex items-center gap-3 mb-12 border-b-2 border-primary/20 pb-8">
          <div className="w-12 h-12 rounded-none bg-primary/10 overflow-hidden border-2 border-primary">
            <img 
              src="https://picsum.photos/seed/dev/100/100" 
              alt="Developer Avatar" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-primary font-black tracking-tighter font-mono text-sm uppercase">KARTHIK_AI</div>
            <div className="text-[10px] text-primary/60 font-mono uppercase tracking-widest">STATUS_ACTIVE</div>
          </div>
        </div>

        <nav className="space-y-2">
          {SIDE_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 font-mono text-[10px] font-black tracking-[0.2em] transition-all group uppercase",
                location.pathname === link.path
                  ? "bg-primary text-black"
                  : "text-primary/60 hover:bg-primary/10 hover:text-primary"
              )}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t-2 border-primary/20">
        <div className="text-[10px] text-primary/40 font-mono text-center uppercase tracking-[0.3em]">
          V4.2.0_STABLE
        </div>
      </div>
    </aside>
  );
}
