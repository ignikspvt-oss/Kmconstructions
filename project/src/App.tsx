import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white mb-2">KM Constructions</h1>
          <p className="text-gray-400">Building Trust. Building Tomorrow.</p>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'projects': return <Projects />;
      case 'media': return <Media />;
      case 'contact': return <Contact />;
      default: return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="transition-all duration-500 ease-in-out">
        {renderSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
      <WhatsAppButton />
    </div>
  );
}

export default App;