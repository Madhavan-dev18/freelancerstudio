/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { PROCESS_STEPS } from '../data';
import { CornerDownRight, CheckCircle2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Process() {
  const [selectedStep, setSelectedStep] = useState<string>('share');
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleSelectStep = (stepId: string) => {
    setSelectedStep(stepId);
    if (window.innerWidth < 1024 && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-surface-container-low text-on-surface border-b-custom border-on-surface" id="process">
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-on-surface uppercase mb-16 md:mb-24 tracking-tighter leading-none">
          SYSTEM OUTPUTS
        </h2>

        {/* Process layout with left list and right interactive details card */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Grid Blocks */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-on-surface">
            {PROCESS_STEPS.map((step) => {
              const isActive = selectedStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => handleSelectStep(step.id)}
                  className={`border-custom border-on-surface p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[220px] cursor-pointer transition-all-custom relative overflow-hidden group select-none shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] ${
                    isActive ? 'bg-on-surface text-surface' : 'bg-surface hover:bg-gray-100'
                  }`}
                  id={`process-step-${step.id}`}
                >
                  {/* Watermark identifier */}
                  <span
                    className={`absolute top-4 right-4 text-[70px] md:text-[80px] font-black leading-none pointer-events-none select-none transition-colors duration-300 ${
                      isActive ? 'text-primary opacity-20' : 'text-on-surface opacity-[0.05] group-hover:opacity-10'
                    }`}
                  >
                    {step.num}
                  </span>

                  <div className="z-10">
                    <span
                      className={`font-mono text-[10px] tracking-widest font-black ${
                        isActive ? 'text-primary' : 'text-gray-500'
                      }`}
                    >
                      PHASE {step.num}
                    </span>
                  </div>

                  <div className="z-10 mt-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-2">
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs font-bold leading-snug ${
                        isActive ? 'text-surface/80' : 'text-gray-600'
                      }`}
                    >
                      {step.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Interactive Information Pane */}
          <div ref={detailsRef} className="col-span-12 lg:col-span-6 scroll-mt-24">
            <div className="bg-surface border-custom md:border-4 border-on-surface p-6 md:p-10 h-full flex flex-col justify-between relative shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] md:shadow-xl">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none opacity-5">
                <CornerDownRight size={120} className="text-on-surface translate-x-8 -translate-y-8" />
              </div>

              <AnimatePresence mode="wait">
                {PROCESS_STEPS.filter((s) => s.id === selectedStep).map((step) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-grow flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      {/* Badge and Title */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-primary text-white font-mono text-[10px] uppercase font-black px-3 py-1 border-custom border-on-surface">
                          PHASE {step.num} Details
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-black text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1">
                          <Calendar size={13} className="text-primary" /> Timeline: {step.timeline}
                        </div>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-black text-on-surface uppercase leading-none tracking-tighter">
                        {step.title}
                      </h3>

                      <p className="text-sm md:text-base font-bold text-gray-700 leading-relaxed">
                        {step.detailedDesc}
                      </p>

                      {/* Deliverables lists */}
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <h4 className="font-sans text-xs uppercase tracking-widest text-primary font-black">
                          PHASE DELIVERABLES:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.deliverables.map((del, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200"
                            >
                              <CheckCircle2 className="text-primary shrink-0" size={16} />
                              <span className="text-xs font-black text-on-surface">{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer cue */}
                    <div className="pt-8 border-t border-gray-100 mt-6 flex justify-between items-center text-[10px] font-mono uppercase font-black text-gray-400">
                      <span>FreelancerStudio Workflow v1.2</span>
                      <span>SECURE & CONSTANT CLIENT OVERVIEW</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
