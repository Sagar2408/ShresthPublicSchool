import React, { useState, useEffect, useCallback } from 'react';

const carouselImages = [
  { src: '/photos/HeadGroupAwardPhoto.jpeg', alt: 'Award Ceremony' },
  { src: '/photos/Redfootball.jpeg',         alt: 'Football Activity' },
  { src: '/photos/NewspaperArticle.jpeg',    alt: 'Newspaper Feature' },
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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

          {/* LEFT — Carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px] lg:h-[560px]">
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
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
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

          {/* RIGHT — Content (matched height) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col justify-center h-auto lg:h-[560px]">
            <h3 className="text-xl sm:text-2xl font-bold text-school-dark mb-6">
              Football Championship Victory – 2 January 2026
            </h3>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                On 2 January 2026, Shreshth Public School proudly celebrated a remarkable sporting achievement as its Football Team, representing the Central Zone MCD, won the prestigious Delhi State MCD Veerta Cup Football Tournament.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The young champions displayed exceptional teamwork, determination, and sportsmanship throughout the tournament, bringing immense pride to the school. Their outstanding performance was recognized and appreciated by dignitaries and education leaders, who felicitated the players and encouraged them to continue striving for excellence.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This achievement was also featured in local media, highlighting the dedication of the students, coaches, and mentors behind the team's success. At Shreshth Public School, we remain committed to fostering excellence in sports alongside academics, inspiring students to develop confidence, discipline, leadership, and a winning spirit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoCurricular;
