import React from 'react';
import { academicHighlights } from '@/data/content';

const Academics: React.FC = () => {
  const subjects = [
    'English',
    'Mathematics',
    'Environmental Studies',
    'Hindi',
    'Art & Craft',
    'Music',
    'Physical Education',
  ];

  return (
    <section id="academics" className="section-padding bg-white">
      <div className="container-custom">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Academics
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Excellence in Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive curriculum designed to nurture academic excellence and holistic development
          </p>
        </div>

        {/* ================= ACADEMIC PERFORMANCE ================= */}
<div className="bg-gradient-to-r from-school-primary/5 to-school-secondary/5 rounded-2xl p-8 mb-12">
  <h3 className="text-2xl font-bold text-school-dark text-center mb-10">
    Academic Performance
  </h3>

  <div className="grid md:grid-cols-4 gap-6">
    {academicHighlights.map((year, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 text-center shadow-soft"
      >
        {/* STUDENT PHOTO */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          {/* Replace src with real student photo later */}
          <img
            src="/images/topperimage.jpg"
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>

        {/* YEAR */}
        <h4 className="text-sm font-semibold text-gray-500 mb-2">
          {year.year}
        </h4>

        {/* CLASS */}
        <p className="text-lg font-semibold text-school-dark">
          Class 10
        </p>

        {/* MARKS */}
        <p className="text-2xl font-bold text-school-primary mt-1">
          {year.class10}
        </p>

        {/* OPTIONAL SUBTEXT */}
        <p className="text-xs text-gray-500 mt-2">
          Board Result
        </p>
      </div>
    ))}
  </div>
</div>


        {/* ================= CURRICULUM + SUBJECTS ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT - CURRICULUM INFO */}
          <div>
            <h3 className="text-2xl font-bold text-school-dark mb-6">
              Curriculum Overview
            </h3>

            <div className="space-y-6">
              {/* CBSE */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-school-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-school-primary"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-school-dark mb-1">
                    CBSE Curriculum
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Following CBSE curriculum with modern teaching methodologies.
                  </p>
                </div>
              </div>

              {/* FACULTY */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-school-secondary/10 rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-school-secondary"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-school-dark mb-1">
                    Experienced Faculty
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Qualified teachers with subject expertise and passion.
                  </p>
                </div>
              </div>

              {/* HOLISTIC */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-school-accent/10 rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-school-accent"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-school-dark mb-1">
                    Holistic Development
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Balanced focus on academics, sports, and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - SUBJECTS OFFERED */}
          <div>
            <h3 className="text-2xl font-bold text-school-dark mb-6">
              Subjects Offered
            </h3>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-school-dark mb-4">
                Subjects:
              </h4>

              <div className="flex flex-wrap gap-3">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-school-primary/10 text-school-primary rounded-lg text-sm font-medium hover:bg-school-primary hover:text-white transition"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= TEACHING METHODOLOGY ================= */}
        <div className="mt-16 bg-gradient-to-r from-school-primary/5 to-school-secondary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-school-dark text-center mb-8">
            Teaching Methodology
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-school-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-school-primary"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <h4 className="font-semibold text-school-dark mb-2">
                Smart Learning
              </h4>
              <p className="text-gray-600 text-sm">
                Digital classrooms with interactive teaching.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-school-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-school-secondary"
                >
                  <circle cx="9" cy="7" r="4" />
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                </svg>
              </div>
              <h4 className="font-semibold text-school-dark mb-2">
                Individual Attention
              </h4>
              <p className="text-gray-600 text-sm">
                Personalized approach for every student.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-school-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-school-accent"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-school-dark mb-2">
                Continuous Assessment
              </h4>
              <p className="text-gray-600 text-sm">
                Regular tests and feedback for growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
