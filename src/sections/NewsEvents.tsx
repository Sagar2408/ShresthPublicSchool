import React from 'react';
import { announcements, events } from '@/data/content';
import { Calendar, ArrowRight } from '@/components/Icons';

const NewsEvents: React.FC = () => {
  const upcomingEvents = events.filter(event => event.type === 'upcoming');
  const pastEvents = events.filter(event => event.type === 'past');

  return (
    <section id="news" className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            News & Events
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Latest Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important notices from Shresth Public School
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-school-dark mb-6">Announcements</h3>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-soft hover:shadow-medium transition-shadow group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      announcement.type === 'notice' 
                        ? 'bg-red-500' 
                        : announcement.type === 'event' 
                          ? 'bg-school-secondary' 
                          : 'bg-school-primary'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-school-dark mb-1 group-hover:text-school-primary transition-colors">
                        {announcement.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={14} />
                        {announcement.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-school-dark mb-6">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow group"
                >
                  <div className="bg-school-primary/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-school-primary font-semibold">{event.title}</span>
                      <span className="text-sm text-gray-600">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <button className="flex items-center gap-2 text-school-primary font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Past Events */}
            <h3 className="text-xl font-bold text-school-dark mb-6 mt-12">Past Events</h3>
            <div className="space-y-4">
              {pastEvents.slice(0, 3).map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-soft flex items-center gap-4 group hover:shadow-medium transition-shadow"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-school-primary/10 transition-colors">
                    <Calendar size={24} className="text-gray-400 group-hover:text-school-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-school-dark group-hover:text-school-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1">{event.description}</p>
                    <span className="text-gray-500 text-sm">{event.date}</span>
                  </div>
                  <button className="text-school-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-16 bg-white rounded-2xl p-8 shadow-large">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-school-dark mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Get the latest updates and news directly to your inbox.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-primary/20 focus:border-school-primary"
              />
              <button className="bg-school-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewsEvents;
