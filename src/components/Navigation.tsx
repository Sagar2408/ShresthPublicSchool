import React, { useState, useEffect } from 'react';
import { navItems, schoolInfo } from '@/data/content';
import { Menu, X, Phone } from './Icons';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-school-primary text-white py-2 transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              {schoolInfo.phone[0]}
            </span>
            <span className="hidden sm:block">{schoolInfo.email}</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon - Sat: 7:30 AM - 2:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-4 mt-10'
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-3"
            >
              {/* SCHOOL LOGO */}
              <div
                className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white ${isScrolled ? 'ring-2 ring-school-primary' : 'ring-2 ring-white'
                  }`}
              >
                <img
                  src="/images/avtar.png"
                  alt="Shreshth Public School Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* SCHOOL NAME */}
              <div className={`hidden sm:block ${isScrolled ? 'text-school-dark' : 'text-white'}`}>
                <h1 className="text-lg font-bold leading-tight">
                  {schoolInfo.name}
                </h1>
                <p className="text-xs opacity-80">
                  {schoolInfo.board} Affiliated
                </p>
              </div>
            </a>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-school-primary/10 ${isScrolled ? 'text-school-dark hover:text-school-primary' : 'text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollToSection('#admissions')}
                className="bg-school-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-school-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
          <div className="container-custom py-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-school-dark hover:bg-school-primary/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t">
              <button
                onClick={() => scrollToSection('#admissions')}
                className="w-full bg-school-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
