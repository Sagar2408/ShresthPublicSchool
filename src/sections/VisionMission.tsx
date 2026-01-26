import React from 'react';
import { visionMission } from '@/data/content';

const VisionMission: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guiding principles that shape our educational approach and commitment to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-school-dark mb-2">
                  {visionMission.vision.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {visionMission.vision.content}
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-school-secondary to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-school-dark mb-2">
                  {visionMission.mission.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {visionMission.mission.content}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-school-dark text-center mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionMission.coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all group hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-school-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-school-accent group-hover:scale-110 transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-accent group-hover:text-white transition-colors">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-school-dark">{value}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
