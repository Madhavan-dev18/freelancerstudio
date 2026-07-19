/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  bullets: string[];
  image: string;
  icon: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
}

export interface ProcessStep {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  timeline: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  features: string[];
  actionLabel: string;
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProjectInquiry {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}
