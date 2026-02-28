import React from 'react';




const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

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
