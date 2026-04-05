import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundGraphics } from './components/BackgroundGraphics';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';
import Games from './pages/Games';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AnalyticsTracker />
        <div className="min-h-screen bg-background tech-grid-bg transition-colors duration-300 relative overflow-hidden">
          <CustomCursor />
          <BackgroundGraphics />
          <Navbar />
          
          <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-0 relative">
            {/* Background Orbs - adjusted for mobile */}
            <div className="fixed top-[-10%] right-[-10%] sm:right-[-5%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] left-[-10%] sm:left-[-5%] w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-purple-500/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none z-0" />
            
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/games" element={<Games />} />
              </Routes>
            </div>
          </main>

          <div className="">
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
