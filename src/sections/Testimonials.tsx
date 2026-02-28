import React from 'react';
import { testimonials } from '@/data/content';

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            What Parents Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our parents and students about their experience at BK Gyan Deep Public School
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-large transition-shadow group"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-school-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-primary">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2z"/>
                </svg>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-school-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-school-dark group-hover:text-school-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4.9/5', label: 'Parent Satisfaction' },
            { value: '98%', label: 'Student Retention' },
            { value: '95%', label: 'Recommend to Others' },
            { value: '500+', label: 'Reviews' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-school-primary mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
