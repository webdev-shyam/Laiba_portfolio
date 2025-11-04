import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 shadow-[0_0_30px_rgba(122,62,240,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className=" h-[100px] w-[100px] rounded-lg placeholder:text-2xl font-bold bg-gradient-to-r flex justify-center items-center from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">
          <img className="h-[70px] w-[70px] rounded-full" src="assets/heroine.jpg" alt="logo" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7A3EF0]/50 transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
