import React, { useState, useEffect, useCallback } from 'react';

const carouselImages = [
  { src: '/photos/K1.jpeg',  alt: 'Students in Activity' },
  { src: '/photos/K5.jpeg',  alt: 'Classroom Engagement' },
  { src: '/photos/K9.jpeg',  alt: 'Students at School' },
  { src: '/photos/N1.jpeg',  alt: 'Nursery Activity' },
];

const activities = [
  {
    emoji: '🏆',
    title: 'Sports & Athletics',
    description:
      'Our students actively participate in inter-school and district-level sports competitions, winning multiple medals in Athletics, Kabaddi, Kho-Kho, and Cricket. The annual Sports Day is a grand celebration of talent and team spirit, with students competing in track events, field sports, and relay races, bringing pride and energy to the entire school community.',
  },
  {
    emoji: '🎭',
    title: 'Cultural Programs',
    description:
      'Students showcase their talents in dance, drama, music, and art during our Annual Function and Independence Day celebrations. Our cultural programmes are a platform for students to express creativity and build stage confidence. We have earned recognition and awards at district and state levels for our vibrant performances and cultural presentations.',
  },
  {
    emoji: '🧠',
    title: 'Olympiads & Competitions',
    description:
      'Our students regularly participate in the National Science Olympiad (NSO), International Mathematics Olympiad (IMO), and English Language Olympiad (ELO). Students have consistently achieved ranks at national and state levels, building a culture of healthy academic competition, intellectual curiosity, and a drive for excellence beyond the regular curriculum.',
  },
];

const CoCurricular: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % carouselImages.length);
  }, []);

  const prev = () => {
    setCurrentIndex(i => (i - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="cocurricular" className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Beyond Academics
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Co-Curricular Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering students through sports, culture, creativity, and competition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Carousel + description */}
          <div>
            {/* Carousel */}
            <div className="relative rounded-2xl overflow-hidden shadow-large h-[340px]">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Prev button */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-6 h-2.5 bg-white'
                        : 'w-2.5 h-2.5 bg-white/55 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description below carousel */}
            <p className="text-gray-600 leading-relaxed mt-6">
              At Shreshth Public School, we believe that true education extends beyond textbooks.
              Our co-curricular programmes are thoughtfully designed to bring out the best in every
              child — fostering teamwork, creativity, leadership, and a lasting sense of achievement
              through diverse activities, competitions, and celebrations.
            </p>
          </div>

          {/* RIGHT — 3 activity cards */}
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-school-primary hover:shadow-large transition-shadow"
              >
                <h4 className="font-bold text-school-dark text-lg mb-3 flex items-center gap-3">
                  <span className="text-2xl">{activity.emoji}</span>
                  {activity.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoCurricular;
