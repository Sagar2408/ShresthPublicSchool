import React from 'react';
import { aboutContent, schoolInfo } from '@/data/content';
import { ArrowRight } from '@/components/Icons';

const About: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src="/images/frontpic.jpg"
                alt="Shresth Public School Campus"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-school-primary">28+</div>
                    <div className="text-xs lg:text-sm text-gray-600">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-school-secondary">5000+</div>
                    <div className="text-xs lg:text-sm text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-school-accent">98%</div>
                    <div className="text-xs lg:text-sm text-gray-600">Results</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-school-primary/10 rounded-2xl" />
          </div>

          {/* Right Content - Text */}
          <div>
            {/* Section Header */}
            <div className="mb-6">
              <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                About Our School
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
                {aboutContent.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {aboutContent.intro}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {aboutContent.history}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '✓', text: 'CBSE Affiliated Curriculum' },
                { icon: '✓', text: 'Classes from Nursery to XII' },
                { icon: '✓', text: 'Modern Infrastructure' },
                { icon: '✓', text: 'Holistic Development' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-school-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#facilities')}
                className="group flex items-center gap-2 bg-school-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Explore Facilities
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-2 border-2 border-school-primary text-school-primary px-6 py-3 rounded-lg font-medium hover:bg-school-primary hover:text-white transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* School Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Board Affiliation', value: schoolInfo.board, icon: 'GraduationCap' },
            { label: 'Classes Offered', value: schoolInfo.classes, icon: 'Building2' },
            { label: 'Year Established', value: schoolInfo, icon: 'Calendar' },
            { label: 'Location', value: schoolInfo.location, icon: 'MapPin' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-school-primary/10 rounded-lg flex items-center justify-center mb-4">
                {item.icon === 'GraduationCap' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-primary">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                )}
                {item.icon === 'Building2' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-primary">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
                    <path d="M18 10V4a2 2 0 0 0-2-2h-1.5a1.5 1.5 0 0 0-1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-.5A1.5 1.5 0 0 0 7.5 4H6a2 2 0 0 0-2 2v6"/>
                  </svg>
                )}
                {item.icon === 'Calendar' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-primary">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                )}
                {item.icon === 'MapPin' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className="text-lg font-semibold text-school-dark">{}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
