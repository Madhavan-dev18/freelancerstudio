/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { METRICS } from '../data';
import { Info, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b-custom border-on-surface" id="about">
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        {/* About Info & Mission Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Main Column */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-primary mb-4 font-extrabold">
                ABOUT US
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-on-surface uppercase tracking-tighter leading-[0.95] mb-10">
                We Build More Than
                <br />
                Websites.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-custom border-on-surface pt-8">
              <div className="md:col-span-7">
                <p className="text-base md:text-lg font-bold text-on-surface leading-relaxed">
                  At FreelancerStudio, we believe every great idea deserves a premium digital
                  presence. Whether you're a startup launching your MVP, an enterprise scaling online,
                  or a creator launching your initial portfolio, we engineer modern,
                  high-performance solutions tailored specifically to your objectives.
                </p>
                <p className="text-sm md:text-base font-medium text-gray-600 mt-4 leading-relaxed">
                  We don't do fluff or generic templates. From custom typography grids and clean
                  branding design to fast, responsive web applications and secure payment engines, we
                  transform abstract ideas into highly rigid, perfectly engineered digital systems.
                </p>
              </div>

              <div className="md:col-span-5 border-t-custom md:border-t-0 md:border-l-custom pt-6 md:pt-0 mt-6 md:mt-0 pl-0 md:pl-8 border-on-surface flex flex-col justify-center">
                <h3 className="font-sans text-xs uppercase tracking-widest text-primary mb-3 font-extrabold">
                  Our Mission
                </h3>
                <p className="text-base md:text-lg font-black text-on-surface leading-snug">
                  Deliver premium-quality digital solutions with honest, predictable pricing, modern
                  structural design, and exceptional technical support.
                </p>
              </div>
            </div>
          </div>

          {/* Block decoration Column */}
          <div className="hidden lg:flex lg:col-span-4 items-end justify-end">
            <div className="w-32 h-32 bg-on-surface flex items-center justify-center border-custom border-on-surface group hover:bg-primary hover:border-primary transition-all-custom">
              <Info className="text-surface group-hover:rotate-12 transition-transform duration-300" size={56} />
            </div>
          </div>
        </div>

        {/* Metrics/Stats Grid Row */}
        <div className="mt-20 border-t-custom border-on-surface pt-12">
          <p className="font-sans text-xs uppercase tracking-widest text-primary mb-8 font-extrabold">
            METRICS & TRUST
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12">
            {METRICS.map((metric) => (
              <div
                key={metric.id}
                className="flex flex-col gap-2 p-6 md:p-8 bg-surface-container-low border-custom border-on-surface hover:bg-on-surface hover:text-surface group transition-all-custom shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] md:shadow-none"
              >
                <div className="flex justify-between items-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tighter text-on-surface group-hover:text-primary transition-colors duration-200">
                    {metric.value}
                  </span>
                  {metric.id === 'projects' && <CheckCircle2 className="text-primary" size={24} />}
                  {metric.id === 'clients' && <MessageSquare className="text-primary" size={24} />}
                  {metric.id === 'response' && <Clock className="text-primary" size={24} />}
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-gray-500 group-hover:text-surface/80 transition-colors font-extrabold">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
