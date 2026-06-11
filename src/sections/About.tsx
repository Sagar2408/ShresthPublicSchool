import React from 'react';
import { aboutContent } from '@/data/content';

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
                src="/photos/WelcomePhoto.jpeg"
                alt="Shreshth Public School Campus"
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
            <div className="absolute -z-10 bottom-0 right-0 w-full h-full bg-school-primary/10 rounded-2xl" />
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
                { icon: '✓', text: 'Classes from Nursery to Class V' },
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
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-2 border-2 border-school-primary text-school-primary px-6 py-3 rounded-lg font-medium hover:bg-school-primary hover:text-white transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
