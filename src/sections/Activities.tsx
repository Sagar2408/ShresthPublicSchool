import React from 'react';
import { activities } from '@/data/content';
import { Medal, Palette, Music, Mic, Sparkles, Lightbulb } from '@/components/Icons';

const iconMap: { [key: string]: React.FC<{ className?: string; size?: number }> } = {
  Medal,
  Palette,
  Music,
  Mic,
  Sparkles,
  Lightbulb,
};

const Activities: React.FC = () => {
  return (
    <section id="activities" className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Co-Curricular Activities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Beyond Academics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nurturing talents and interests through a wide range of extracurricular activities
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = iconMap[activity.icon];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden img-zoom">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-school-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-school-primary group-hover:scale-110 transition-all duration-300">
                      {IconComponent && (
                        <IconComponent
                          size={24}
                          className="text-school-primary group-hover:text-white transition-colors"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-school-dark mb-2 group-hover:text-school-primary transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Annual Events */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-school-dark text-center mb-8">Annual Events & Celebrations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Annual Day', month: 'March', description: 'Grand cultural celebration' },
              { name: 'Sports Day', month: 'February', description: 'Inter-house competitions' },
              { name: 'Science Exhibition', month: 'January', description: 'Innovation showcase' },
              { name: 'Cultural Fest', month: 'December', description: 'Music & dance festival' },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-medium transition-shadow"
              >
                <div className="text-3xl font-bold text-school-primary mb-1">{event.month}</div>
                <h4 className="font-semibold text-school-dark mb-1">{event.name}</h4>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-school-dark text-center mb-8">Student Clubs</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Science Club',
              'Literary Club',
              'Eco Club',
              'Art Club',
              'Music Club',
              'Drama Club',
              'Sports Club',
              'Coding Club',
            ].map((club, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white rounded-full shadow-soft text-school-dark font-medium hover:bg-school-primary hover:text-white transition-all cursor-default"
              >
                {club}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
