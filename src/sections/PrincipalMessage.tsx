import React from 'react';

const PrincipalMessage: React.FC = () => {
    return (
        <section
            id="principal"
            className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5"
        >
            <div className="container-custom">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Leadership
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-school-dark">
                        Principal’s Message
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/images/Naresh baisla.jpg"
                            alt="Principal"
                            className="w-80 h-96 lg:w-[380px] lg:h-[460px] 
                         object-cover rounded-2xl shadow-large"
                        />
                    </div>

                    {/* RIGHT MESSAGE */}
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Education is the foundation upon which character, discipline,
                            and values are built. It is not merely the process of acquiring
                            academic knowledge, but a lifelong journey that shapes
                            responsible, confident, and compassionate individuals.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            At <strong>Shresth Public School</strong>, we strongly believe that
                            every child is unique and gifted with immense potential. Our goal
                            is to provide a nurturing and inspiring environment where students
                            feel encouraged to explore their curiosity, develop self-confidence,
                            and express their creativity freely.
                        </p>

                        {/* <p className="text-gray-700 leading-relaxed">
                            In today’s rapidly changing world, education must go beyond
                            textbooks. Along with academic excellence, we focus on instilling
                            strong moral values, discipline, leadership qualities, and
                            essential life skills. Our dedicated faculty works tirelessly to
                            guide students towards critical thinking, problem-solving abilities,
                            and emotional intelligence.
                        </p> */}

                        <p className="text-gray-700 leading-relaxed">
                            We aim to empower our students with knowledge, ethics, and a sense
                            of social responsibility so that they not only achieve personal
                            success but also contribute positively to society. With the
                            combined efforts of teachers, parents, and students, we continue
                            our commitment to shaping young minds into confident, responsible,
                            and future-ready citizens.
                        </p>

                        <div className="mt-6">
                            <p className="font-semibold text-school-dark text-lg">
                                Shri. Naresh Baisla
                            </p>
                            <p className="text-sm text-gray-600">
                                Principal, Shresth Public School
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrincipalMessage;
