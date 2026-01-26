import React, { useState } from 'react';
import { schoolInfo } from '@/data/content';
import { MapPin, Phone, Mail, Clock } from '@/components/Icons';
import type { FormData } from '@/types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // 🔥 IMPORTANT (same as admission form)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
        }),
      });

      alert('Thank you for your message! We will get back to you soon.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-school-primary/10 text-school-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-school-dark mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">{schoolInfo.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-school-secondary rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">{schoolInfo.phone[0]}</p>
                    <p className="text-gray-600">{schoolInfo.phone[1]}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">{schoolInfo.email}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 7:30 AM - 2:30 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ GOOGLE MAP EMBED */}
            <div className="mt-8 rounded-2xl overflow-hidden h-64">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8161968110903!2d77.27134577399431!3d28.54524388804191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e4d97b4aeb%3A0x4434ce3dd228ff07!2sShreshth%20Public%20School!5e0!3m2!1sen!2sin!4v1769319596244!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />



            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-large">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  focus:outline-none focus:border-school-primary 
  focus:ring-2 focus:ring-school-primary/20 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  focus:outline-none focus:border-school-primary 
  focus:ring-2 focus:ring-school-primary/20 transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  focus:outline-none focus:border-school-primary 
  focus:ring-2 focus:ring-school-primary/20 transition"
                  />

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  focus:outline-none focus:border-school-primary 
  focus:ring-2 focus:ring-school-primary/20 transition"
                  >
                    <option value="">Select Subject</option>
                    <option value="admission">Admission</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="general">General</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
  focus:outline-none focus:border-school-primary 
  focus:ring-2 focus:ring-school-primary/20 transition"
                />

                <button
                  type="submit"
                  className="w-full bg-school-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
