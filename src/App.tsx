/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Manifesto from './components/Manifesto';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Terminal, Shield, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Shared state to allow seamless service selection navigation
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleSelectService = (serviceTitle: string) => {
    // Map service title directly to value
    let val = 'webdev';
    if (serviceTitle.includes('E-commerce')) val = 'ecommerce';
    else if (serviceTitle.includes('AI Solutions')) val = 'ai';
    else if (serviceTitle.includes('Brand Identity')) val = 'brand';
    else if (serviceTitle.includes('UI/UX')) val = 'uiux';
    else if (serviceTitle.includes('Academic')) val = 'academic';

    setPrefilledService(val);
    triggerNotification(`SYSTEM CUE: Selected [${serviceTitle}]. Briefing desk pre-loaded.`);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <div className="relative min-h-screen bg-surface selection:bg-primary-container selection:text-white flex flex-col items-center overflow-hidden">
      {/* Decorative top ambient bar */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-amber-500 to-primary z-[60] fixed top-0"></div>

      {/* Main Container made fluid for laptop screens */}
      <main className="w-full bg-surface flex flex-col">
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section (with metrics) */}
        <AboutUs />

        {/* Services Grid Section */}
        <Services onSelectService={handleSelectService} />

        {/* Manifesto Principle Overlay Reader */}
        <Manifesto />

        {/* Process Steps details */}
        <Process />

        {/* Pricing tiers and real-time estimator */}
        <Pricing onOpenInquiryModal={handleSelectService} />

        {/* Accordion FAQ support */}
        <FAQ />

        {/* Contact Briefing Desk */}
        <Contact
          prefilledService={prefilledService}
          onClearPrefilled={() => setPrefilledService('')}
        />

        <Footer />
      </main>

      {/* Dynamic Status Notification Popover */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-on-surface text-surface border-custom border-primary p-4 shadow-2xl flex items-center gap-3 w-full max-w-sm"
            id="app-status-notification"
          >
            <div className="bg-primary text-white p-2">
              <Terminal size={16} />
            </div>
            <div className="flex-grow">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-black">
                SYSTEM TELEMETRY
              </div>
              <p className="text-[11px] font-bold mt-0.5 leading-snug">{notification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}
