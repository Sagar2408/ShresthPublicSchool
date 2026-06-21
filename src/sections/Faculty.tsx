import React from 'react';

const facultyData = [
  { sno: 1,  name: 'Ms. Shikha Basista',    qualification: 'M.A., B.Ed., PG Diploma in Translation' },
  { sno: 2,  name: 'Ms. Pooja',             qualification: 'B.A., D.El.Ed., CTET' },
  { sno: 3,  name: 'Ms. Kajal',             qualification: 'D.El.Ed., CTET' },
  { sno: 4,  name: 'Ms. Monika Gupta',      qualification: 'M.A., B.T.C., UPTET, CTET' },
  { sno: 5,  name: 'Ms. Usha',              qualification: 'B.A., B.Ed., CTET I & II' },
  { sno: 6,  name: 'Ms. Megha Sharma',      qualification: 'M.Com., CTET' },
  { sno: 7,  name: 'Ms. Sumita',            qualification: 'PRT' },
  { sno: 8,  name: 'Ms. Tanya Bhati',       qualification: 'B.A., B.Ed., CTET II' },
  { sno: 9,  name: 'Ms. Babita',            qualification: 'M.A., B.Ed.' },
  { sno: 10, name: 'Ms. Neelam Gauniyal',   qualification: 'B.A., Diploma in ECCE' },
  { sno: 11, name: 'Ms. Pooja Sharma',      qualification: 'N.P.T.C.' },
  { sno: 12, name: 'Ms. Simran',            qualification: 'B.A. (Hons.) English, D.El.Ed., CTET, M.A. English (Pursuing)' },
  { sno: 13, name: 'Ms. Shivani Choudhary', qualification: 'B.A., B.Ed.' },
  { sno: 14, name: 'Ms. Neelam Mishra',    qualification: 'B.Com., NPTT' },
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
                src="/photos/teachersgroupphoto.jpeg"
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
