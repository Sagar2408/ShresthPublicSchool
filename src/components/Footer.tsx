import React from 'react';
import { schoolInfo } from '@/data/content';
import { MapPin, Phone, Mail, ChevronRight } from './Icons';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ================= UPDATED LINKS ================= */

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Gallery', href: '#gallery' },
  ];

  const importantLinks = [
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-school-dark text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= SCHOOL INFO ================= */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* SCHOOL LOGO */}
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white ring-2 ring-white/30">
                <img
                  src="/images/avtar.png"
                  alt="Shreshth Public School Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* SCHOOL NAME */}
              <div>
                <h3 className="text-lg font-bold">
                  {schoolInfo.name}
                </h3>
                <p className="text-sm text-white/60">
                  {schoolInfo.board} Affiliated
                </p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              Excellence in Education, Enlightenment in Life. Nurturing young minds since { }.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-3">
              {[
                {
                  name: 'facebook',
                  href: 'https://www.facebook.com/p/Shreshth-Public-School-100042410786539/',
                },
                {
                  name: 'instagram',
                  href: 'https://www.instagram.com/shreshth_public_school/',
                },
                {
                  name: 'twitter',
                  href: '#',
                },
                {
                  name: 'youtube',
                  href: '#',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-school-primary transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    {social.name === 'facebook' && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    )}

                    {social.name === 'twitter' && (
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    )}

                    {social.name === 'instagram' && (
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    )}

                    {social.name === 'youtube' && (
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-2 text-white/70 hover:text-school-primary transition-colors"
                  >
                    <ChevronRight size={14} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= IMPORTANT LINKS ================= */}
          <div>
            <h4 className="text-lg font-bold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-2 text-white/70 hover:text-school-primary transition-colors"
                  >
                    <ChevronRight size={14} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-school-primary mt-1" />
                <span className="text-white/70">{schoolInfo.address}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} className="text-school-primary" />
                <div>
                  <a
                    href={`tel:${schoolInfo.phone[0]}`}
                    className="text-white/70 hover:text-white"
                  >
                    {schoolInfo.phone[0]}
                  </a>
                  <br />
                  <a
                    href={`tel:${schoolInfo.phone[1]}`}
                    className="text-white/70 hover:text-white"
                  >
                    {schoolInfo.phone[1]}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} className="text-school-primary" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="text-white/70 hover:text-white"
                >
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
