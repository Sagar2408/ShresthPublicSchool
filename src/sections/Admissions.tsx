import React, { useState } from 'react';
import type { AdmissionFormData } from '@/types';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    dateOfBirth: new Date().toISOString().split('T')[0], // ✅ HERE
    address: '',
    message: '',
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.phone
    ) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // 🔥 MOST IMPORTANT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'admission',
          ...formData,
        }),
      });

      // no-cors me response read nahi kar sakte
      // but data Google Sheet me insert ho jata hai

      alert('Admission enquiry submitted successfully!');

      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        dateOfBirth: new Date().toISOString().split('T')[0],
        address: '',
        message: '',
      });

    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };



  return (
    <section
      id="admissions"
      className="section-padding bg-gradient-to-br from-school-primary/5 to-school-secondary/5"
    >
      <div className="container-custom">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Admissions Open
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Join BK Gyan Deep Public School
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Admission open for session 2026–27. Secure your child's future with quality education.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h3 className="text-2xl font-bold text-school-dark mb-6">
              Admission Process
            </h3>

            <div className="space-y-6">
              {[
                { step: '01', title: 'Submit Enquiry', description: 'Fill the online admission form.' },
                { step: '02', title: 'School Tour', description: 'Visit the campus.' },
                { step: '03', title: 'Entrance Test', description: 'Simple academic assessment.' },
                { step: '04', title: 'Document Verification', description: 'Submit required documents.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-11 h-11 bg-school-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl p-6 shadow-large w-full max-w-3xl">
              <h3 className="text-2xl font-bold text-school-dark mb-4">
                Admission Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">

                {/* REQUIRED FIELDS */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      placeholder=" e.g. Rohan"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Parent Name
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      placeholder="e.g. Ramesh Kumar Singh"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Class
                    </label>
                    <input
                      type="number"
                      name="grade"
                      placeholder="e.g.1,2,3..."
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      min={1}
                      max={12}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                {/* EMAIL + DOB */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>

                  {/* DOB WITH TEXT + CALENDAR */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      name="dateOfBirth"
                      placeholder="DD/MM/YYYY"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => (e.target.type = 'text')}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                {/* ADDRESS + MESSAGE */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <textarea
                      name="address"
                      placeholder="House No, Street, City"
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Any additional message..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-school-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Submit Enquiry
                </button>

              </form>
            </div>
          </div>



        </div>


        {/* ================= FEE STRUCTURE =================
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-school-dark text-center mb-8">
            Fee Structure (Annual)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-soft">
              <thead className="bg-school-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Grade</th>
                  <th className="px-6 py-4 text-left">Age Criteria</th>
                  <th className="px-6 py-4 text-left">Documents</th>
                  <th className="px-6 py-4 text-left">Fees</th>
                </tr>
              </thead>
              <tbody>
                {admissionInfo.map((info, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium">{info.grade}</td>
                    <td className="px-6 py-4 text-gray-600">{info.ageCriteria}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {info.documents.map((doc, i) => (
                        <div key={i}>• {doc}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4 font-bold text-school-primary">{info.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Admissions;
