import React from 'react';
import { infrastructure } from '@/data/content';

const Infrastructure: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-school-dark to-school-dark/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-school-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-school-secondary rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-school-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Campus
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for our students
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {infrastructure.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all group"
            >
              <div className="text-3xl lg:text-4xl font-bold text-school-accent mb-2 group-hover:scale-110 transition-transform">
                {item.count}
              </div>
              <div className="text-sm text-white/80">{item.title}</div>
            </div>
          ))}
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { image: '/images/classroom.jpg', title: 'Smart Classrooms', description: 'Digital learning with interactive smart boards' },
            { image: '/images/science-lab.jpg', title: 'Science Labs', description: 'Modern labs for physics, chemistry & biology' },
            { image: '/images/library.jpg', title: 'Library', description: 'Vast collection of books and digital resources' },
            { image: '/images/computer-lab.jpg', title: 'Computer Lab', description: 'High-tech lab with latest technology' },
            { image: '/images/sports-ground.jpg', title: 'Sports Ground', description: 'Extensive sports facilities for all games' },
            { image: '/images/playground.jpg', title: 'Play Area', description: 'Safe and fun play zone for young learners' },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden img-zoom h-64"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-school-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
