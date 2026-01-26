import React from 'react';
import { whyChooseUs } from '@/data/content';
import { GraduationCap, Users, Building2, Palette, Shield, Heart } from '@/components/Icons';

const iconMap: { [key: string]: React.FC<{ className?: string; size?: number }> } = {
  GraduationCap,
  Users,
  Building2,
  Palette,
  Shield,
  Heart,
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of parents trust Shresth Public School for their children's education
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-school-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-school-primary group-hover:scale-110 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent
                      size={28}
                      className="text-school-primary group-hover:text-white transition-colors"
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-school-dark mb-4 group-hover:text-school-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 bg-school-primary rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Join thousands of happy parents who have chosen Shresth Public School for their children's bright future.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#admissions');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-school-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
