import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoName from '../assets/logo-name.svg';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ['hero', 'portfolio', 'services', 'about', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 shadow-md backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-2 group">
            <div>
              <img src={logoName} alt="Elm Grove Renovations" className="h-12" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal relative group ${activeSection === link.href.substring(1) ? 'text-deepTeal' : 'text-deepTeal/70'}`}>

                {link.name}
                <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-goldenOlive transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />

              </a>
            )}
            <a
              href="#contact"
              className="bg-deepTeal text-cream px-5 py-2.5 rounded-lg font-medium hover:bg-teal transition-colors shadow-lg shadow-deepTeal/20">

              Request a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-deepTeal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
            <X className="h-6 w-6" /> :

            <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-cream border-t border-sage/20 overflow-hidden">

            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-serif text-deepTeal hover:text-teal pl-2 border-l-2 border-transparent hover:border-goldenOlive transition-all"
              onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              className="block w-full text-center bg-deepTeal text-cream py-3 rounded-lg font-medium mt-6"
              onClick={() => setIsMobileMenuOpen(false)}>

                Request a Consultation
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}