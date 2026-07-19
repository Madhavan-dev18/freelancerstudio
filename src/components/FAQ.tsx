/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-32 bg-surface border-b-custom border-on-surface" id="faq">
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Title block with Swiss Borders */}
          <div className="col-span-12 lg:col-span-4 lg:border-r-custom border-on-surface pr-0 lg:pr-8 flex flex-col justify-between min-h-0 lg:min-h-[250px] mb-6 lg:mb-0">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-primary mb-4 font-extrabold flex items-center gap-1.5">
                <HelpCircle size={14} /> SUPPORT DESK
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tighter">
                FREQUENTLY
                <br />
                ASKED
              </h2>
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-bold text-gray-500 max-w-[25ch]">
                Have a unique system specification? Reach out directly via our Contact form below.
              </p>
            </div>
          </div>

          {/* Right Accordion block */}
          <div className="col-span-12 lg:col-span-8 lg:pl-8 flex flex-col gap-4 lg:gap-5 pt-4 lg:pt-0">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`p-5 md:p-6 bg-surface border-custom border-on-surface transition-all duration-300 ${
                    isOpen
                      ? 'shadow-[4px_4px_0px_0px_#ff8c00]'
                      : 'shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group transition-colors duration-200"
                    aria-expanded={isOpen}
                    id={`faq-trigger-${faq.id}`}
                  >
                    <h3 className="text-lg sm:text-xl font-black uppercase text-on-surface group-hover:text-primary transition-colors duration-200 leading-snug max-w-[85%]">
                      {faq.question}
                    </h3>
                    <div className="shrink-0 p-1.5 border-custom border-on-surface group-hover:bg-on-surface group-hover:text-surface transition-colors duration-200 ml-3">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-200 mt-4">
                          <p className="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
