import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Cursor } from './components/Cursor';
import { Contact } from './components/Contact';
import { About } from './components/About';

function App() {
  const [activeSection, setActiveSection] = useState('Projects');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <Navbar 
        activeSection={activeSection} 
        onNavigate={(section) => setActiveSection(section)}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((current) => !current)}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Cursor />
    </>
  );
}

export default App;
