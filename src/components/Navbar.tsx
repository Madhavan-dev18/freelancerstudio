/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Info, Tag, HelpCircle, Send } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Optionally update the URL hash without scrolling
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-surface w-full top-0 sticky border-b-custom border-on-surface z-50">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#hero" className="h-20 md:h-24 w-auto flex items-center">
            <img
              alt="FreelancerStudio Logo"
              className="h-full w-auto object-contain"
              src="/logo.png"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className={`font-sans text-xs lg:text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200 font-extrabold ${
                  activeSection === link.href.substring(1) ? 'text-primary border-b-2 border-primary' : 'text-on-surface'
                }`}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Start Project CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary text-white border-custom border-on-surface px-5 lg:px-8 py-3 font-sans text-[10px] lg:text-xs uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all-custom font-extrabold flex items-center justify-center"
              id="nav-start-project-btn"
            >
              START PROJECT
            </a>
          </div>
        </div>
      </nav>

      {/* Modern Floating Bottom Navigation Bar (Mobile / Tablet only) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] max-w-md bg-surface border-2 border-on-surface rounded-full p-2.5 shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] z-50 flex justify-between items-center gap-1">
        <a
          href="#services"
          className="flex flex-col items-center justify-center flex-1 py-1 text-on-surface hover:text-primary transition-colors duration-200"
        >
          <Briefcase size={18} />
          <span className="font-sans text-[9px] font-black uppercase tracking-wider mt-1">Services</span>
        </a>

        <a
          href="#about"
          className="flex flex-col items-center justify-center flex-1 py-1 text-on-surface hover:text-primary transition-colors duration-200"
        >
          <Info size={18} />
          <span className="font-sans text-[9px] font-black uppercase tracking-wider mt-1">About</span>
        </a>

        <a
          href="#pricing"
          className="flex flex-col items-center justify-center flex-1 py-1 text-on-surface hover:text-primary transition-colors duration-200"
        >
          <Tag size={18} />
          <span className="font-sans text-[9px] font-black uppercase tracking-wider mt-1">Pricing</span>
        </a>

        <a
          href="#faq"
          className="flex flex-col items-center justify-center flex-1 py-1 text-on-surface hover:text-primary transition-colors duration-200"
        >
          <HelpCircle size={18} />
          <span className="font-sans text-[9px] font-black uppercase tracking-wider mt-1">FAQ</span>
        </a>

        {/* Highlighted CTA action inside the floating dock */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center bg-primary text-white border border-on-surface rounded-full w-12 h-12 hover:bg-on-surface hover:text-surface transition-colors duration-200 shadow-sm shrink-0"
          title="Start Project"
          id="floating-nav-start-btn"
        >
          <Send size={16} />
        </a>
      </div>
    </>
  );
}
