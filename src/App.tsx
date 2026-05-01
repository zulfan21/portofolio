import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Loading } from '@/components/Loading';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
          {/* 🔥 FIX GLOBAL OVERFLOW */}
          
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;