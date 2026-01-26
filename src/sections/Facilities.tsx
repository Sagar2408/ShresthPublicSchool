import React from 'react';
import { facilities } from '@/data/content';
import { Tv, FlaskConical, Monitor, BookOpen, Trophy, Bus, HeartPulse, Music } from '@/components/Icons';

const iconMap: { [key: string]: React.FC<{ className?: string; size?: number }> } = {
  Tv,
  FlaskConical,
  Monitor,
  BookOpen,
  Trophy,
  Bus,
  HeartPulse,
  Music,
};

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Facilities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for our students
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-large transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden img-zoom">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-school-primary rounded-xl flex items-center justify-center">
                      {IconComponent && <IconComponent size={24} className="text-white" />}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-school-dark mb-3 group-hover:text-school-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '60+', label: 'Smart Classrooms' },
            { value: '6', label: 'Science Labs' },
            { value: '2000+', label: 'Books in Library' },
            { value: '2', label: 'Sports Coaches' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 rounded-xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-school-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
