import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background tech-grid-bg transition-colors duration-300">
          <Navbar />
          
          <main className="pt-32 pb-20 px-6 md:px-12 relative">
            {/* Background Orbs */}
            <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
            
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/contact" element={<Contact />} />
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
