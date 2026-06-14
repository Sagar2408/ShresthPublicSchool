import React from 'react';

const facultyData = [
  { sno: 1,  name: 'Ms. Sunita Sharma',  qualification: 'M.A. (English), B.Ed.' },
  { sno: 2,  name: 'Mr. Rajesh Kumar',   qualification: 'M.Sc. (Mathematics), B.Ed.' },
  { sno: 3,  name: 'Ms. Pooja Verma',    qualification: 'M.A. (Hindi), B.Ed.' },
  { sno: 4,  name: 'Mr. Vikas Singh',    qualification: 'M.Sc. (Science), B.Ed.' },
  { sno: 5,  name: 'Ms. Anita Gupta',    qualification: 'M.A. (Social Studies), B.Ed.' },
  { sno: 6,  name: 'Ms. Rekha Yadav',   qualification: 'M.A. (Sanskrit), B.Ed.' },
  { sno: 7,  name: 'Mr. Amit Sharma',   qualification: 'M.P.Ed. (Physical Education)' },
  { sno: 8,  name: 'Ms. Priya Patel',   qualification: 'M.A. (Art & Craft), B.Ed.' },
  { sno: 9,  name: 'Ms. Kavita Joshi',  qualification: 'M.Sc. (Computer Science), B.Ed.' },
  { sno: 10, name: 'Mr. Deepak Nagar',  qualification: 'M.A. (Music), B.Ed.' },
  { sno: 11, name: 'Ms. Meena Kumari',  qualification: 'B.A., B.Ed. (Nursery Teacher)' },
  { sno: 12, name: 'Ms. Neha Bhatia',   qualification: 'B.A., B.Ed. (Primary Teacher)' },
  { sno: 13, name: 'Mr. Suresh Tiwari', qualification: 'M.Com., B.Ed.' },
  { sno: 14, name: 'Ms. Ritu Sharma',   qualification: 'M.A. (EVS), B.Ed.' },
  { sno: 15, name: 'Mr. Lokesh Verma',  qualification: 'M.A., B.Ed.' },
];

const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="section-padding bg-white">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Our Faculty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated and experienced educators committed to nurturing every child's potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Two stacked photos */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src="/photos/teachers1.jpeg"
                alt="Faculty of Shreshth Public School"
                className="w-full h-56 lg:h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src="/photos/teachers2.jpeg"
                alt="Teaching Staff at Shreshth Public School"
                className="w-full h-56 lg:h-64 object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Faculty Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-school-primary text-white">
                  <th className="px-4 py-3 text-left rounded-tl-lg font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left rounded-tr-lg font-semibold">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.map((member, index) => (
                  <tr
                    key={member.sno}
                    className={`border-b border-gray-100 transition-colors hover:bg-school-primary/5 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 py-3 font-bold text-school-primary">{member.sno}</td>
                    <td className="px-4 py-3 font-medium text-school-dark">{member.name}</td>
                    <td className="px-4 py-3 text-gray-600">{member.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faculty;
