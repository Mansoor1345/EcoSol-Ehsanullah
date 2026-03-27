import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Slide up when scrolling down past 100px, slide down when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col shadow-sm transition-transform duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Thin Contact Bar */}
      <div className="bg-green-900 text-green-50 py-1.5 w-full text-[10px] sm:text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-4">
            <a href="mailto:ecosolenergiespak@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} className="opacity-70" /> ecosolenergiespak@gmail.com
            </a>
            <span className="opacity-30 hidden sm:inline">|</span>
            <a href="https://wa.me/923353444801" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} className="opacity-70" /> +92 335 3444801
            </a>
          </div>
          <div className="hidden md:block text-green-200/70">
            Premium Solar Solutions Pakistan
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white py-3 shadow-md' : 'bg-white py-5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-16 h-16 bg-transparent flex items-center justify-center transition-transform group-hover:scale-105 overflow-visible">
              <img src="/images/Images/Logo png.png" alt="ECO-SOL ENERGIES" className="w-full h-full object-contain scale-[1.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                ECO-SOL ENERGIES
              </span>
              <span className="text-xs text-green-600 font-medium tracking-wide">
                WE BRIGHTEN UP YOUR HOMES
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPage === item.id
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 transition-transform origin-left ${
                    currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get Free Site Survey
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-100 pt-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all text-center"
              >
                Get Free Site Survey
              </button>
            </nav>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}
