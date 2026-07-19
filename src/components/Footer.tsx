/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Instagram, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-on-surface text-surface border-t-custom border-on-surface w-full max-w-7xl mx-auto">
      {/* 2-Part Grid Footer */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 py-16 px-6 md:px-12 w-full border-b-custom border-surface">
        {/* Left branding block */}
        <div className="col-span-12 lg:col-span-5 pr-0 lg:pr-8 lg:border-r border-gray-800">
          <div className="h-20 w-20 mb-8 flex items-center justify-center bg-white p-1 border border-gray-800 rounded overflow-hidden select-none">
            <img
              alt="FreelancerStudio Logo"
              className="h-full w-full object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkYyNVRosH1DRpwMkVr5EdZH9L8eHkbwFVnMQ_wGdkxWxSHFGed1A2xa3FUry8KMQbQ7xDzPpSlpliJUTm0O339bZ274fkENZcZV6kyAhFTaNHy4bYXF3PTbtBNKfrWSnKJAruqoeMUikenuCri362HoHL3Famk2RrK-o0Db9MopuARs8tE0areYLkKm9eFRLB4dvydvI6D81vsjvSwikGwoshq8qQeS_J9XpAqG75pbl0z3IYwaOvM5ztz3AznIzSgNU"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 text-surface leading-tight">
            OBJECTIVE CLARITY.
            <br />
            <span className="text-primary">PREMIUM EXECUTION.</span>
          </h2>
          <p className="text-sm font-bold text-gray-400 max-w-md leading-relaxed">
            Established 2024. Committed to the strict grids, contemporary grotesk, and solid colors of
            objective design. Bridging raw human imagination and high-performance technical execution.
          </p>
        </div>

        {/* Right navigation blocks */}
        <div className="col-span-12 lg:col-span-7 lg:pl-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase text-surface mb-2 border-b border-gray-800 pb-3 font-black tracking-widest">
              SERVICES
            </h4>
            <ul className="flex flex-col gap-2.5 font-bold text-sm text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="#services">
                  Website Dev
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="#services">
                  E-Commerce
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="#services">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase text-surface mb-2 border-b border-gray-800 pb-3 font-black tracking-widest">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-2.5 font-bold text-sm text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="#process">
                  System Outputs
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="#manifesto">
                  Manifesto Principles
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[10px] uppercase text-surface mb-2 border-b border-gray-800 pb-3 font-black tracking-widest">
              CONNECT
            </h4>
            <ul className="flex flex-col gap-2.5 font-bold text-sm text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="https://instagram.com/freelancerstudio_" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="https://www.linkedin.com/in/madhavan-shivakumar-dev/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors uppercase tracking-tight" href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>

            {/* Social SVGs */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/freelancerstudio_"
                target="_blank" rel="noreferrer"
                className="hover:text-primary text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/madhavan-shivakumar-dev/"
                target="_blank" rel="noreferrer"
                className="hover:text-primary text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Madhavan-dev18"
                target="_blank" rel="noreferrer"
                className="hover:text-primary text-gray-400 transition-colors"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer copyrights */}
      <div className="py-6 px-6 md:px-12 flex justify-center items-center gap-4 text-[10px] font-mono uppercase font-black text-gray-500">
        <div className="flex items-center gap-1">
          <ShieldCheck size={14} className="text-primary" /> © {currentYear} FREELANCERSTUDIO. ALL RIGHTS
          RESERVED.
        </div>
      </div>
    </footer>
  );
}
