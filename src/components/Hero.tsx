/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Grid } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse displacement relative to center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = (e.clientX - centerX) / centerX;
      const dy = (e.clientY - centerY) / centerY;
      setMousePos({ x: dx * 20, y: dy * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center px-6 md:px-12 py-16 md:py-24 bg-surface overflow-hidden border-b-custom border-on-surface relative"
      id="hero"
    >
      {/* Structural background lines & grid watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-6 relative z-10">
        {/* Left Side Content Column */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-start gap-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[2px] bg-primary"
          ></motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-[96px] leading-[1.05] font-black text-on-surface uppercase tracking-tighter"
          >
            FEARLESS
            <br />
            <span className="text-primary relative inline-block">CRAFT.</span>
            <br />
            DELIVERED.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl font-bold text-on-surface border-l-custom border-on-surface pl-6 md:pl-8 max-w-[55ch]"
          >
            Objective clarity, functional structuralism, and premium execution. We design and build
            high-performance digital products for startups and forward-thinking businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto"
          >
            <a
              href="#services"
              className="bg-on-surface text-surface border-custom border-on-surface px-8 md:px-10 py-4 md:py-5 font-sans text-xs uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all-custom font-extrabold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              id="hero-view-services-btn"
            >
              VIEW SERVICES <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="border-custom border-on-surface text-on-surface px-8 md:px-10 py-4 md:py-5 font-sans text-xs uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all-custom font-extrabold flex items-center justify-center cursor-pointer w-full sm:w-auto"
              id="hero-contact-us-btn"
            >
              CONTACT US
            </a>
          </motion.div>
        </div>

        {/* Right Side Grid and Typographic Watermark Column */}
        <div className="hidden lg:flex lg:col-span-5 relative h-full lg:min-h-[500px] border-l-custom border-on-surface bg-surface overflow-hidden items-center justify-center">
          {/* Centered Crossing Grid System Icon Box */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[28px] lg:left-[-28px] lg:-translate-x-0 lg:top-[30%] w-14 h-14 border-custom border-on-surface bg-surface flex items-center justify-center z-20 shadow-sm">
            <Grid size={24} className="text-primary" />
          </div>

          {/* Large Typographic Watermark Letters F and S */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10 flex flex-col justify-between p-8">
            <motion.span
              style={{ x: -mousePos.x, y: -mousePos.y }}
              className="absolute top-[5%] left-[10%] text-[280px] sm:text-[340px] md:text-[400px] lg:text-[450px] font-black text-on-surface opacity-[0.12] leading-none"
            >
              F
            </motion.span>
            <motion.span
              style={{ x: mousePos.x * 1.2, y: mousePos.y * 1.2 }}
              className="absolute bottom-[5%] right-[5%] text-[280px] sm:text-[340px] md:text-[400px] lg:text-[450px] font-black text-on-surface opacity-[0.12] leading-none"
            >
              S
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
