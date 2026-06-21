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
          src="/photos/AboutUsphoto.jpeg"
          alt="Shreshth Public School"
          className="w-full h-full object-cover md:object-cover object-[center_20%] md:object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-school-dark/90 via-school-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-school-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-2xl">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">8+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">1000+</div>
                <div className="text-sm text-white/70">Students</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">99%</div>
                <div className="text-sm text-white/70">Results</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-school-accent">30:1</div>
                <div className="text-sm text-white/70">Student-Teacher Ratio</div>
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
