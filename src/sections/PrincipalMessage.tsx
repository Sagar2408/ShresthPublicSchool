import React from 'react';

const PrincipalMessage: React.FC = () => {
    return (
        <section
            id="chairman"
            className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5"
        >
            <div className="container-custom">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Leadership
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-school-dark">
                        Chairman's Message
                    </h2>
                </div>

                {/* CONTENT — two-column layout */}
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

                    {/* LEFT — Chairman Photo (2 cols) */}
                    <div className="lg:col-span-2 flex justify-center">
                        <div className="relative w-[320px] sm:w-[360px] lg:w-full max-w-[400px]">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                                <img
                                    src="/photos/PrincipalPhoto.jpeg"
                                    alt="Mr. Naresh Baisla - Chairman"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-school-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                                Chairman
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Message (3 cols) */}
                    <div className="lg:col-span-3 space-y-5 max-w-xl">
                        <p className="text-gray-700 leading-relaxed text-base">
                            Education is the foundation upon which character, discipline,
                            and values are built. It is not merely the process of acquiring
                            academic knowledge, but a lifelong journey that shapes
                            responsible, confident, and compassionate individuals.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base">
                            At <strong>Shreshth Public School</strong>, we strongly believe that
                            every child is unique and gifted with immense potential. Our goal
                            is to provide a nurturing and inspiring environment where students
                            feel encouraged to explore their curiosity, develop self-confidence,
                            and express their creativity freely.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base">
                            We aim to empower our students with knowledge, ethics, and a sense
                            of social responsibility so that they not only achieve personal
                            success but also contribute positively to society. With the
                            combined efforts of teachers, parents, and students, we continue
                            our commitment to shaping young minds into confident, responsible,
                            and future-ready citizens.
                        </p>

                        <div className="pt-4 border-t border-gray-200">
                            <p className="font-bold text-school-dark text-lg">
                                Mr. Naresh Baisla
                            </p>
                            <p className="text-sm text-gray-500">
                                Chairman, Shreshth Public School
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ABOUT PRINCIPAL */}
            <div className="container-custom mt-24">
                <div className="text-center mb-14">
                    <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Leadership
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-school-dark">
                        About Principal
                    </h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

                    {/* LEFT — Principal Photo (2 cols) */}
                    <div className="lg:col-span-2 flex justify-center">
                        <div className="relative w-[320px] sm:w-[360px] lg:w-full max-w-[400px]">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                                <img
                                    src="/photos/VicePrincipalPhoto.jpeg"
                                    alt="Ms. Shikha Basista - Principal"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-school-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                                Principal
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — About content (3 cols) */}
                    <div className="lg:col-span-3 space-y-5 max-w-xl">
                        <p className="text-gray-700 leading-relaxed text-base">
                            Ms. Shikha Basista, Principal of Shreshth Public School, Delhi, is a highly enthusiastic educational leader with over 12 years of experience in academics and co-curricular activities. She is committed to nurturing young minds through quality education, innovation, discipline, and holistic development. Under her leadership, the school continues to foster academic excellence while encouraging students to excel in sports, cultural activities, and character building.
                        </p>

                        <div className="pt-4 border-t border-gray-200">
                            <p className="font-bold text-school-dark text-lg">
                                Ms. Shikha Basista
                            </p>
                            <p className="text-sm text-gray-500">
                                Principal, Shreshth Public School, Delhi
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default PrincipalMessage;
