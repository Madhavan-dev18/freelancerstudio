/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES } from '../data';
import { ArrowRight, Grid, Cpu, Palette, Layers, Award, Globe, ShoppingCart } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  // Map icons dynamically
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={className} size={48} />;
      case 'ShoppingCart':
        return <ShoppingCart className={className} size={48} />;
      case 'Cpu':
        return <Cpu className={className} size={48} />;
      case 'Palette':
        return <Palette className={className} size={48} />;
      case 'Layers':
        return <Layers className={className} size={48} />;
      case 'Award':
        return <Award className={className} size={48} />;
      default:
        return <Grid className={className} size={48} />;
    }
  };

  return (
    <section className="py-20 md:py-32 bg-surface border-b-custom border-on-surface" id="services">
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        {/* Header Block with Swiss Layout */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-on-surface uppercase leading-none tracking-tighter">
              Our
              <br />
              services
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center">
            <div className="bg-on-surface w-full h-[2px]"></div>
          </div>
        </div>

        {/* 3-Column Services Grid (collapses to 1-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:border-t-custom md:border-l-custom border-on-surface gap-6 md:gap-0">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              aria-label={`Select ${service.title} service`}
              onClick={() => onSelectService(service.title)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service.title);
                }
              }}
              className="bg-surface border-custom md:border-0 md:border-r-custom md:border-b-custom border-on-surface p-6 md:p-8 lg:p-10 flex flex-col gap-6 min-h-[420px] md:min-h-[480px] group hover:bg-on-surface hover:text-surface transition-colors duration-300 cursor-pointer relative justify-between shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] md:shadow-none focus:outline-none focus:ring-4 focus:ring-primary"
              id={`service-${service.id}`}
            >
              {/* Image Frame with hover transition */}
              <div className="relative w-full h-44 border-custom border-on-surface bg-surface overflow-hidden group-hover:border-surface transition-colors duration-300">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={service.image}
                  referrerPolicy="no-referrer"
                />
                {/* Floating Icon Overlap */}
                <div className="absolute top-3 right-3 bg-surface border-custom border-on-surface p-2 text-on-surface group-hover:bg-primary group-hover:text-white group-hover:border-white transition-all-custom">
                  {renderIcon(service.icon, 'w-5 h-5')}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black uppercase text-on-surface group-hover:text-surface transition-colors duration-200">
                {service.title}
              </h3>

              {/* Bullets list */}
              <ul className="space-y-2 text-sm font-bold text-on-surface group-hover:text-surface/80 transition-colors duration-200">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-primary font-black mr-1.5">•</span> {bullet}
                  </li>
                ))}
              </ul>

              {/* Bottom Row metadata */}
              <div className="mt-auto pt-4 border-t border-gray-200 group-hover:border-surface/20 flex justify-between items-end font-sans text-xs uppercase tracking-widest text-on-surface group-hover:text-surface transition-colors duration-200 font-extrabold">
                <span>{service.num}</span>
                <span className="flex items-center gap-1 text-primary group-hover:text-surface transition-colors">
                  DISCUSS <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
