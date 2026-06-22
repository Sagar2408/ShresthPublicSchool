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
    <footer className="bg-school-footer text-white">
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
              Excellence in Education, Enlightenment in Life. Nurturing young minds since 2018{ }
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Shreshth-Public-School/61584605632295/?mibextid=wwXIfr&rdid=G6rfypK3TOisJgZg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18qsDHRma7%2F%3Fmibextid%3DwwXIfr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-school-primary transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shreshth_public_school/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-school-primary transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
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
