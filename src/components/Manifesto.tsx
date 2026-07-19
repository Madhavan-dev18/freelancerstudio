/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, X, ArrowLeft, ArrowRight, CornerDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MANIFESTO_PRINCIPLES } from '../data';

export default function Manifesto() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % MANIFESTO_PRINCIPLES.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + MANIFESTO_PRINCIPLES.length) % MANIFESTO_PRINCIPLES.length);
  };

  return (
    <section
      className="py-20 md:py-32 bg-on-surface relative overflow-hidden flex items-center border-b-custom border-on-surface"
      id="manifesto"
    >
      {/* Absolute giant watermark letters */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-10 flex items-center justify-between z-0">
        <span className="text-[300px] md:text-[500px] font-black text-surface leading-none -translate-x-1/4">
          F
        </span>
        <span className="text-[300px] md:text-[500px] font-black text-surface leading-none translate-x-1/4 translate-y-1/4">
          S
        </span>
      </div>

      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 bg-surface p-6 sm:p-12 md:p-16 border-custom border-on-surface shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] md:shadow-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-on-surface uppercase mb-6 md:mb-8 tracking-tighter leading-[1.1]">
              WE BUILD
              <br />
              SYSTEMS
            </h2>
            <p className="text-lg md:text-xl font-bold text-on-surface mb-8 md:mb-12 leading-relaxed">
              At FreelancerStudio, we bridge the gap between imagination and execution. We are an
              engineering collective dedicated to the International Typographic Style of digital design.
              Every grid line represents a hard visual constraint; every pixel serves a defined purpose.
            </p>

            <div className="flex gap-4 md:gap-6 items-center pt-8 border-t-custom border-on-surface">
              <button
                onClick={() => {
                  setActiveStep(0);
                  setModalOpen(true);
                }}
                className="w-14 h-14 md:w-16 md:h-16 bg-on-surface text-surface border-custom border-on-surface flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all-custom cursor-pointer group"
                aria-label="Open manifesto"
                id="open-manifesto-btn"
              >
                <Play className="fill-current text-current group-hover:scale-110 transition-transform ml-1" size={24} />
              </button>
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-widest text-on-surface font-black">
                  EXPLORE THE CORE
                </span>
                <span className="font-sans text-sm uppercase tracking-widest text-primary font-black">
                  Our Manifestos & Rules
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modernist full-screen overlay for the Manifesto */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-on-surface z-[100] flex items-center justify-center p-4 md:p-10"
            id="manifesto-modal-overlay"
          >
            {/* Structural background lines of the modal */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
              <div className="w-full h-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="bg-surface border-4 border-primary text-on-surface w-full max-w-4xl p-5 md:p-12 relative z-10 flex flex-col justify-between min-h-[400px] sm:min-h-[500px] max-h-[90vh] overflow-y-auto"
            >
              {/* Top Row with Close Trigger */}
              <div className="flex justify-between items-center border-b-custom border-on-surface pb-6 mb-8">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-black tracking-widest bg-on-surface text-surface px-3 py-1">
                  <CornerDownRight size={12} className="text-primary" /> Core Manifesto Tenet {activeStep + 1} / {MANIFESTO_PRINCIPLES.length}
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 border-custom border-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all-custom cursor-pointer"
                  aria-label="Close manifesto"
                  id="close-manifesto-modal-btn"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Central Text Content */}
              <div className="my-auto">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-primary leading-none tracking-tighter">
                    {MANIFESTO_PRINCIPLES[activeStep].title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-on-surface max-w-[65ch]">
                    {MANIFESTO_PRINCIPLES[activeStep].desc}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Row Controls */}
              <div className="flex justify-between items-center border-t border-gray-200 pt-8 mt-10">
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {MANIFESTO_PRINCIPLES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-3 w-3 border-custom border-on-surface transition-colors duration-200 ${
                        idx === activeStep ? 'bg-primary' : 'bg-transparent'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow switches */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 border-custom border-on-surface hover:bg-on-surface hover:text-surface transition-all-custom cursor-pointer"
                    aria-label="Previous tenet"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 border-custom border-on-surface hover:bg-on-surface hover:text-surface transition-all-custom cursor-pointer"
                    aria-label="Next tenet"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
