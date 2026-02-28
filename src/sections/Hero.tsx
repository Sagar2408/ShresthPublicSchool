import React from 'react';
import { heroContent, } from '@/data/content';
import { ChevronRight } from '@/components/Icons';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Heroimage.jpg"
          alt="BK Gyan Deep Public School"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-school-dark/90 via-school-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-school-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-school-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium"> {}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              {heroContent.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-school-accent font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {heroContent.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {heroContent.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollToSection('#admissions')}
                className="group flex items-center gap-2 bg-school-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25"
              >
                {heroContent.ctaPrimary}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                {heroContent.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">28+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">5000+</div>
                <div className="text-sm text-white/70">Students</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">98%</div>
                <div className="text-sm text-white/70">Results</div>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Info Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 bg-school-accent rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Expert Faculty</h3>
                <p className="text-white/70 text-sm">200+ qualified teachers</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all mt-8">
                <div className="w-12 h-12 bg-school-secondary rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Modern Labs</h3>
                <p className="text-white/70 text-sm">Science & Computer Labs</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 bg-school-primary rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Sports Facilities</h3>
                <p className="text-white/70 text-sm">Indoor & Outdoor Games</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all mt-8">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Library</h3>
                <p className="text-white/70 text-sm">Rich Collection of Books</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
