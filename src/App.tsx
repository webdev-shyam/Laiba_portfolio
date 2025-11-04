import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AnimatedBackground from './components/AnimatedBackground';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Education />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
