/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { Check, ArrowRight, CornerDownRight, X, Calculator, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingProps {
  onOpenInquiryModal: (prefilledService?: string) => void;
}

export default function Pricing({ onOpenInquiryModal }: PricingProps) {
  // Client side Estimation State
  const [calcOpen, setCalcOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['webdev']);
  const [deliverySpeed, setDeliverySpeed] = useState<string>('standard');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botcheck, setBotcheck] = useState(false);
  const [calcForm, setCalcForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const addonRates: Record<string, { label: string; basePrice: number }> = {
    webdev: { label: 'Web Application Development', basePrice: 8999 },
    ecommerce: { label: 'Custom Headless E-Commerce (Next.js / Vercel)', basePrice: 5999 },
    ai: { label: 'AI Integration & Chatbots', basePrice: 4999 },
    brand: { label: 'Complete Brand Identity Manual', basePrice: 2999 },
    uiux: { label: 'Figma UI/UX Schematics', basePrice: 2499 },
    academic: { label: 'Academic Prototypes & Documentation', basePrice: 499 }
  };

  const handleToggleAddon = (key: string) => {
    setSelectedAddons((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const calculateEstimate = () => {
    let total = selectedAddons.reduce((sum, key) => sum + (addonRates[key]?.basePrice || 0), 0);
    if (deliverySpeed === 'express') {
      total = Math.round(total * 1.25);
    } else if (deliverySpeed === 'urgent') {
      total = Math.round(total * 1.5);
    }
    return total;
  };

  const handleCalcSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcForm.name || !calcForm.email) return;

    setIsSubmitting(true);

    const selectedServicesText = selectedAddons.map(key => addonRates[key]?.label).join(', ');
    const estimatedTotal = calculateEstimate();

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: `New Estimate Request - ${calcForm.name}`,
      name: calcForm.name,
      email: calcForm.email,
      message: calcForm.message || 'No additional specifications provided.',
      selected_services: selectedServicesText,
      delivery_speed: deliverySpeed.toUpperCase(),
      estimated_total: `₹${estimatedTotal.toLocaleString('en-IN')}`,
      botcheck: botcheck,
    };

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Estimation submission failed:', error);
    }

    setIsSubmitting(false);
    setInquirySubmitted(true);

    setTimeout(() => {
      setCalcForm({ name: '', email: '', message: '' });
      setSelectedAddons(['webdev']);
      setDeliverySpeed('standard');
      setInquirySubmitted(false);
      setCalcOpen(false);
    }, 4000);
  };

  return (
    <section className="py-20 md:py-32 bg-surface text-on-surface border-b-custom border-on-surface relative" id="pricing">
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 md:mb-24">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-primary mb-4 font-extrabold">
              TRANSPARENT TARIFF
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              PLANS &amp;
              <br />
              PRICING
            </h2>
          </div>
          {/* Real-time Estimator floating trigger */}
          <button
            onClick={() => setCalcOpen(true)}
            className="flex items-center gap-2 border-2 border-on-surface bg-on-surface text-surface hover:bg-primary hover:border-primary hover:text-white px-6 py-3.5 font-sans text-xs uppercase tracking-widest font-black transition-all-custom self-start cursor-pointer shadow-lg"
            id="open-estimator-btn"
          >
            <Calculator size={16} /> LIVE PROJECT ESTIMATOR
          </button>
        </div>

        {/* 3-Column Plan Tier grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t-custom border-on-surface pt-12">
          {PRICING_PLANS.map((plan) => {
            const isSpecial = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`p-6 md:p-10 flex flex-col gap-8 border-custom transition-all duration-300 hover:scale-[1.01] relative ${
                  isSpecial
                    ? 'bg-on-surface text-surface border-on-surface shadow-[4px_4px_0px_0px_#ff8c00] lg:shadow-2xl'
                    : 'bg-surface border-on-surface text-on-surface hover:bg-gray-50 shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] lg:shadow-none'
                }`}
                id={`pricing-plan-${plan.id}`}
              >
                {isSpecial && (
                  <span className="absolute -top-3.5 right-6 bg-primary text-white font-mono text-[9px] uppercase tracking-wider px-3 py-1 font-black border-custom border-on-surface">
                    RECOMMENDED
                  </span>
                )}

                <div className={`border-b-custom pb-6 ${isSpecial ? 'border-surface/20' : 'border-on-surface'}`}>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-primary mb-3 font-extrabold">
                    {plan.title}
                  </h3>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-3 flex-grow font-bold text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="shrink-0 text-primary mt-0.5" size={16} />
                      <span className={isSpecial ? 'text-surface/90' : 'text-on-surface/90'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenInquiryModal(plan.title)}
                  className={`mt-auto w-full py-4 px-6 font-sans text-xs uppercase tracking-widest transition-all-custom font-extrabold flex items-center justify-center gap-2 cursor-pointer border-custom ${
                    isSpecial
                      ? 'bg-primary text-white border-primary hover:bg-surface hover:text-on-surface hover:border-surface'
                      : 'bg-surface text-on-surface border-on-surface hover:bg-on-surface hover:text-surface'
                  }`}
                  id={`initiate-plan-${plan.id}`}
                >
                  {plan.actionLabel} <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-time dynamic estimator sliding panel modal */}
      <AnimatePresence>
        {calcOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-on-surface/80 backdrop-blur-sm z-[100] flex items-center justify-end"
            id="estimator-modal-overlay"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-surface text-on-surface w-full max-w-xl h-screen overflow-y-auto p-5 md:p-8 border-l-4 border-primary flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-center pb-4 border-b-custom border-on-surface mb-6">
                  <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                    <Calculator className="text-primary" /> LIVE SYSTEM ESTIMATOR
                  </h3>
                  <button
                    onClick={() => setCalcOpen(false)}
                    className="p-1.5 border-custom border-on-surface hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
                    id="close-estimator-modal-btn"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-xs font-bold text-gray-500 mb-6">
                  Check service blocks below to build your custom package estimate. Timeline variables are computed in real time.
                </p>

                {/* Service block check boxes */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-sans text-[10px] uppercase tracking-widest text-primary font-black mb-1">
                    SELECT SERVICE BLOCKS:
                  </h4>
                  {Object.entries(addonRates).map(([key, data]) => {
                    const checked = selectedAddons.includes(key);
                    return (
                      <div
                        key={key}
                        onClick={() => handleToggleAddon(key)}
                        className={`p-3 border-custom border-on-surface flex items-center justify-between cursor-pointer select-none transition-colors duration-200 ${
                          checked ? 'bg-on-surface text-surface' : 'bg-surface hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 border-custom border-on-surface flex items-center justify-center shrink-0 ${
                              checked ? 'bg-primary border-primary' : 'bg-transparent'
                            }`}
                          >
                            {checked && <Check className="text-white" size={10} />}
                          </div>
                          <span className="text-xs font-extrabold">{data.label}</span>
                        </div>
                        <span className={`text-xs font-mono font-black ${checked ? 'text-primary' : 'text-gray-500'}`}>
                          ₹{data.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Timeline multipliers */}
                <div className="space-y-2 mb-8">
                  <h4 className="font-sans text-[10px] uppercase tracking-widest text-primary font-black mb-1">
                    DELIVERY SPEED &amp; PRIORITY:
                  </h4>
                  <div className="grid grid-cols-3 border-custom border-on-surface">
                    <button
                      onClick={() => setDeliverySpeed('standard')}
                      className={`py-3.5 font-sans text-[10px] uppercase tracking-wider font-black border-r border-on-surface transition-colors cursor-pointer ${
                        deliverySpeed === 'standard' ? 'bg-on-surface text-surface' : 'bg-surface hover:bg-gray-100'
                      }`}
                    >
                      STANDARD (1x)
                    </button>
                    <button
                      onClick={() => setDeliverySpeed('express')}
                      className={`py-3.5 font-sans text-[10px] uppercase tracking-wider font-black border-r border-on-surface transition-colors cursor-pointer ${
                        deliverySpeed === 'express' ? 'bg-on-surface text-surface' : 'bg-surface hover:bg-gray-100'
                      }`}
                    >
                      EXPRESS (+25%)
                    </button>
                    <button
                      onClick={() => setDeliverySpeed('urgent')}
                      className={`py-3.5 font-sans text-[10px] uppercase tracking-wider font-black transition-colors cursor-pointer ${
                        deliverySpeed === 'urgent' ? 'bg-on-surface text-surface' : 'bg-surface hover:bg-gray-100'
                      }`}
                    >
                      URGENT (+50%)
                    </button>
                  </div>
                </div>

                {/* Computed Price Summary Display */}
                <div className="p-6 bg-primary/10 border-custom border-primary mb-8 relative overflow-hidden">
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-primary font-black">
                        DYNAMIC ESTIMATION
                      </span>
                      <h4 className="text-xs font-black text-on-surface mt-1 uppercase">
                        Estimated Project Value
                      </h4>
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-on-surface tracking-tighter">
                      ₹{calculateEstimate().toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 h-full w-24 bg-primary/10 -skew-x-12 pointer-events-none z-0"></div>
                </div>
              </div>

              {/* Inquiry Briefing Form */}
              <div className="border-t border-gray-200 pt-6">
                {inquirySubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border-2 border-green-600 text-green-900 p-4 text-center text-xs font-black flex items-center justify-center gap-2"
                  >
                    <ShieldCheck size={18} /> ESTIMATION SUBMITTED! CHECK YOUR EMAIL FOR PROPOSAL RECEIPT
                  </motion.div>
                ) : (
                  <form onSubmit={handleCalcSubmit} className="space-y-3">
                    {/* Honeypot Spam Protection */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: 'none' }}
                      onChange={(e) => setBotcheck(e.target.checked)}
                    />
                    
                    <h4 className="font-sans text-[10px] uppercase tracking-widest text-primary font-black mb-1">
                      SUBMIT BRIEF FOR DIRECT AUDIT:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        required
                        type="text"
                        placeholder="Your Name *"
                        value={calcForm.name}
                        onChange={(e) => setCalcForm({ ...calcForm, name: e.target.value })}
                        className="p-3 border-custom border-on-surface bg-surface text-xs font-black placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email Address *"
                        value={calcForm.email}
                        onChange={(e) => setCalcForm({ ...calcForm, email: e.target.value })}
                        className="p-3 border-custom border-on-surface bg-surface text-xs font-black placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white"
                      />
                    </div>
                    <textarea
                      placeholder="Special specs or system limitations..."
                      value={calcForm.message}
                      onChange={(e) => setCalcForm({ ...calcForm, message: e.target.value })}
                      className="w-full p-3 border-custom border-on-surface bg-surface text-xs font-black placeholder-gray-400 h-20 focus:outline-none focus:border-primary focus:bg-white resize-none"
                    />
                    <button
                      type="submit"
                      disabled={selectedAddons.length === 0 || isSubmitting}
                      className="w-full py-4 bg-primary text-white font-sans text-xs uppercase tracking-widest font-black border-custom border-on-surface hover:bg-on-surface hover:text-surface transition-all-custom cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'CALCULATING & TRANSMITTING...' : 'REQUEST OFFICIAL SPECIFICATIONS RECEIPT'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
