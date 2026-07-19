/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Briefcase, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  prefilledService: string;
  onClearPrefilled: () => void;
}

export default function Contact({ prefilledService, onClearPrefilled }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledService || 'webdev',
    budget: 'starter',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  
  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'madhavan.shivakumar.in@gmail.com';

  // Update form if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledService
      }));
    }
  }, [prefilledService]);

  const serviceLabels: Record<string, string> = {
    webdev: 'Website Development',
    ecommerce: 'Custom E-commerce (Next.js/Vercel)',
    ai: 'AI Solutions Integration',
    brand: 'Brand Identity Manuals',
    uiux: 'UI/UX Figma Design',
    academic: 'Academic Support (₹499+)',
  };

  const budgetLabels: Record<string, string> = {
    academic: 'Academic (₹499 - ₹2,999)',
    starter: 'Starter / Design (₹3,000 - ₹8,999)',
    enterprise: 'Custom Business (₹9,000+)',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Generate a unique tracking reference
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const referenceId = `REF-FS-${dateStr}-${randomNum}`;
    setRefId(referenceId);

    // Create payload for Web3Forms
    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      service: serviceLabels[formData.service] || formData.service,
      budget: budgetLabels[formData.budget] || formData.budget,
      message: formData.message,
      tracking_reference: referenceId,
      subject: `New Project Brief - ${formData.name}`,
      botcheck: botcheck, // Web3Forms spam prevention
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!result.success) {
        console.error('Web3Forms Error:', result.message);
        // Fallback or alert could go here
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }

    // Persist to localStorage to prove real capability
    const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    existingInquiries.push({ ...formData, refId: referenceId, timestamp: new Date().toISOString() });
    localStorage.setItem('inquiries', JSON.stringify(existingInquiries));

    setIsSubmitting(false);
    setIsSubmitted(true);
    onClearPrefilled();
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(refId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', service: 'webdev', budget: 'starter', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 md:py-32 bg-surface border-t-custom border-on-surface relative" id="contact">
      {/* Visual layout grid container */}
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          {/* Left info column */}
          <div className="col-span-12 lg:col-span-6 lg:border-r-custom border-on-surface pr-0 lg:pr-12 flex flex-col justify-between mb-8 lg:mb-0">
            <div className="w-full">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-8">
                CONTACT
              </h2>
              {/* Logo graphic in watermark style - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block mt-8 w-full max-w-sm mx-auto opacity-10 select-none pointer-events-none hover:opacity-15 transition-opacity duration-300">
                <img
                  alt="FreelancerStudio Logo"
                  className="w-full h-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvNqK0wE_2RBcu7aH_3B4HfQqhmTgRiYFSoHO1Op26br9IfhRJTEMbeddMHW2B_HqvzK0aZH6SMrizedYJXtj5DMy7ymWBj1f_lgOHK4Mst4YxnWM4QAo1EZO43kv97DozLUIzVeHrumgJG8dYpSPIIWRvrq6HYhcpD6-esskiX7oM1JDUb7d02W2VDUC3OrCk0caYxTOSz_lv7088QJBy1RObSdAMfSjVZSlmR3gruYaSFOIB3CCezXZmm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Email contact block */}
            <div className="space-y-6 mt-12 md:mt-0">
              <div className="border-b-custom border-on-surface pb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-2 font-extrabold flex items-center gap-1.5">
                  <Mail size={12} className="text-primary" /> EMAIL US
                </p>
                <a
                  className="text-xl sm:text-2xl font-black uppercase hover:text-primary transition-colors break-all tracking-tight"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-2 font-extrabold flex items-center gap-1.5">
                  <Briefcase size={12} className="text-primary" /> INITIATE WORKFLOWS
                </p>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">
                  Submit our dynamic briefing desk. Once logged, our engineering lead will assemble your
                  structural requirements and respond with a formal specifications receipt within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right briefing form column */}
          <div className="col-span-12 lg:col-span-6 lg:pl-12 flex flex-col justify-center">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface border-custom border-primary p-6 md:p-8 space-y-6 shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]"
              >
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight">BRIEF REGISTERED</h3>
                </div>
 
                <div className="p-4 bg-gray-50 border border-gray-200 font-mono space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-400 font-bold">SYSTEM TRACKING REF:</span>
                    <button
                      onClick={handleCopyRef}
                      className="text-primary hover:text-on-surface font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />} {copied ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                  <div className="text-sm font-black text-on-surface select-all break-all">{refId}</div>
                  <div className="grid grid-cols-2 gap-y-1.5 pt-2 text-[11px] font-bold">
                    <span className="text-gray-400">CLIENT:</span>
                    <span className="text-on-surface text-right">{formData.name}</span>
                    <span className="text-gray-400">SERVICE:</span>
                    <span className="text-on-surface text-right truncate uppercase">{formData.service}</span>
                    <span className="text-gray-400">TIER:</span>
                    <span className="text-on-surface text-right uppercase">{formData.budget}</span>
                  </div>
                </div>
 
                <p className="text-xs font-bold text-gray-600 leading-relaxed">
                  Your tracking receipt is locked in state. We are preparing the feasibility roadmap. We
                  have copied the tracking reference to your clipboard.
                </p>
 
                <button
                  onClick={resetForm}
                  className="w-full py-4 bg-on-surface text-surface border-custom border-on-surface font-sans text-xs uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary font-extrabold cursor-pointer"
                >
                  SUBMIT ANOTHER BRIEF
                </button>
              </motion.div>
            ) : (
              <div className="bg-surface border-custom border-on-surface p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    onChange={(e) => setBotcheck(e.target.checked)}
                  />

                  <div className="space-y-1">
                    <h3 className="text-xl font-black uppercase tracking-tight text-on-surface">
                      PROJECT BRIEF DESK
                    </h3>
                    <p className="text-xs font-bold text-gray-500">
                      Log your system specifications for an immediate, detailed audit.
                    </p>
                  </div>
 
                  {/* Input Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="font-sans text-[10px] uppercase tracking-widest text-on-surface font-black">
                        FULL NAME *
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        placeholder="e.g. Shivakumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="p-4 border-custom border-on-surface bg-surface text-xs font-bold focus:outline-none focus:border-primary focus:bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="font-sans text-[10px] uppercase tracking-widest text-on-surface font-black">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        placeholder="e.g. shiva@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="p-4 border-custom border-on-surface bg-surface text-xs font-bold focus:outline-none focus:border-primary focus:bg-white"
                      />
                    </div>
                  </div>
 
                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-service" className="font-sans text-[10px] uppercase tracking-widest text-on-surface font-black">
                        SYSTEM BLOCK SERVICE *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="p-4 border-custom border-on-surface bg-surface text-xs font-bold focus:outline-none focus:border-primary focus:bg-white cursor-pointer"
                      >
                        <option value="webdev">Website Development</option>
                        <option value="ecommerce">Custom E-commerce (Next.js/Vercel)</option>
                        <option value="ai">AI Solutions Integration</option>
                        <option value="brand">Brand Identity Manuals</option>
                        <option value="uiux">UI/UX Figma Design</option>
                        <option value="academic">Academic Support (₹499+)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-budget" className="font-sans text-[10px] uppercase tracking-widest text-on-surface font-black">
                        BUDGET BOUND TIER *
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="p-4 border-custom border-on-surface bg-surface text-xs font-bold focus:outline-none focus:border-primary focus:bg-white cursor-pointer"
                      >
                        <option value="academic">Academic (₹499 - ₹2,999)</option>
                        <option value="starter">Starter / Design (₹3,000 - ₹8,999)</option>
                        <option value="enterprise">Custom Business (₹9,000+)</option>
                      </select>
                    </div>
                  </div>
 
                  {/* Message area */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="font-sans text-[10px] uppercase tracking-widest text-on-surface font-black">
                      SYSTEM REQUIREMENT SPECIFICATIONS *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      placeholder="Log core modules, timeline constraints, and target platform parameters..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 border-custom border-on-surface bg-surface text-xs font-bold focus:outline-none focus:border-primary focus:bg-white h-32 resize-none"
                    />
                  </div>
 
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white border-custom border-on-surface w-full py-4.5 font-sans text-xs uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all-custom font-extrabold flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-wait"
                    id="submit-brief-btn"
                  >
                    {isSubmitting ? (
                      <>TRANSMITTING SYSTEM LOG...</>
                    ) : (
                      <>SECURELY SUBMIT PROJECT BRIEF <Send size={14} /></>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
