/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, MetricItem, ProcessStep, PricingPlan, FAQItem } from './types';

export const METRICS: MetricItem[] = [
  { id: 'projects', value: '50+', label: 'Projects Completed' },
  { id: 'clients', value: '5+', label: 'Business Clients' },
  { id: 'response', value: '24hr', label: 'Avg. Response Time' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'webdev',
    num: '01',
    title: 'Website Development',
    bullets: ['Custom Web Apps', 'SEO Optimization', 'CMS Integration'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTfHYx7-CRtNi75-BRCfXd3BG7_-hEN1W4D6dKOrOdQsh6HiUhw_Ev-cv2cmj27UAjVW9vN8iafcypoTYpNojw1aEgECAcYbRtsjf0cmAG72bHATgavjBTP0rpOAES_IRxbfK0ep1CJDX-zMWXwn0Ius2mhHZXTBCau_0rfppKL7uyFQfwz_YMQpuGy8zKL4MsEnKXGx8-a4-0xgSFFloJg2UdRnBYvV5n_oQF_gFabn4tjOUb8zMchw',
    icon: 'Globe'
  },
  {
    id: 'ecommerce',
    num: '02',
    title: 'Custom E-commerce',
    bullets: ['Next.js / Headless', 'Vercel Edge Deployments', 'Stripe Gateways'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbGn33ZHUkggyqRKJZXVleW3KKb4QL4_lm0nPCoRDBaluKMPtpRjdUnYt355P1dGCoc7_1gGwXwXSGo9dcBsSvW-h4cf6Ze_gsCmryy7b9_Xa1f6C0iC8GJc2p6mdwBAlx_-rnC7Wsmr0M-tqyjBHvRlRVASenLkJ86NTTbw1vwyecWKD7a9k6yWxHfltKXMuJnTgtDlWNiO5NcVV6e6moBngJy6O_srnBNUr3To291OujmVNJLTlFQ',
    icon: 'ShoppingCart'
  },
  {
    id: 'ai',
    num: '03',
    title: 'AI Solutions',
    bullets: ['AI Chatbots', 'Data Automation', 'Prompt Engineering'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACNNVRebKv4ujZu5BLt1e8nLW0hYTbg1A9X8uD-bGr3B6XB26oHqENFtgmfFu_6YmppnvbBLQwyFQ6uM8ba0kiKDwSgOQfc9a-z_EwOR1x7edkg468Cv4KlBxSpdJhz_TBoQrqB2ONfVjZ8q0ReOsYlEczGUwEfy9Exym7CFSspCk9pctE5AML2rnj9wndelUGx9JjyosTluyWagaKj474HJXUFD14jnavFfr49jWnkGpqHxMZlX9tDA',
    icon: 'Cpu'
  },
  {
    id: 'brand',
    num: '04',
    title: 'Brand Identity',
    bullets: ['Identity Systems', 'Typography Selection', 'Visual Language'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdLAkOo_O_1sbZp90vtXeiusc9BAt-JopnnzOXjUZsRpE7jZ3H8a7eY4c8cYJtNdOp7jvde52n5nhrgZ4tV1xRYMvCHRu5PNl-JEz1A0Cq6YL6GEnWHNUDgxoNrvssaqn6VExKTq9fOMthab4pyZbt09dmW6n7SATcMh0_RdYhQvH9688dIt2HQIE-nkfeRFENNF2A8PHul3KysOFHCDsJQgsFBNFxW2F77wvwPl-om4dLwqw1iuasjg',
    icon: 'Palette'
  },
  {
    id: 'uiux',
    num: '05',
    title: 'UI/UX Design',
    bullets: ['User Journey Mapping', 'Wireframing', 'Design Systems'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcqXW4Vs7YWHWAKqnbM-CYmSVg6-05-1huaoM8e8v5NLoeA5T2NXVXaxnoaKvAzbZxwaHjOaOWjVEEO8qVlVnUrmNDW2iRzvhAsckOzO1eFbHisOJZAhw_f-Qov4973SFiQFeeJTqTbwD0cKh5qzI5Yzou4M6w4WlpkfR0XXCDili0njrirXrQBSnKUbcCvNaEjYo9wana_W8Fyv6-vsCgIlQEl6aAR2KK-WP5g5ZQo4zw057IHuizeA',
    icon: 'Layers'
  },
  {
    id: 'academic',
    num: '06',
    title: 'Academic Support',
    bullets: ['Research Prototypes', 'Technical Docs', 'MVP Development'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ZULqhPgzHoKffT8BuLEovX_BcbUTIViJIV_ngHMBUZCbAFepHMDESLhzsYW9zZX2fyDAOECGQNllrn6lHXU7TgGt0nwV8zm8XLaw2qCsGT018wA8DQW1X7mRWdmLCuxlee8bFIqWLCdisFtCKT0-GXjifwFC3kO0ax2aHp7Q9n7XQ6LI9REucU0Q2L0KkSYSsbgbcW68GgbZM2disqQz4ZXyM5Tyt71rZ8WepEoltjgIimWCJNguSw',
    icon: 'Award'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'share',
    num: '01',
    title: 'SHARE IDEA',
    shortDesc: 'We discuss goals and architecture in detail.',
    detailedDesc: 'Submit your rough concept, target audience goals, and core system constraints. We will conduct a thorough feasibility audit and map out structural grid alternatives.',
    deliverables: ['System Scope Definition', 'Feasibility Brief', 'Technical Architecture Blueprint'],
    timeline: '1-2 Days'
  },
  {
    id: 'quote',
    num: '02',
    title: 'GET QUOTE',
    shortDesc: 'Transparent, fixed-price proposals.',
    detailedDesc: 'Receive a crystal clear, zero-obfuscation price proposal. Each deliverable has an exact cost bound, ensuring zero hidden variables or downstream surprise costs.',
    deliverables: ['Fixed Price Guarantee Contract', 'Milestone Breakdown Sheets', 'Resource Allocation List'],
    timeline: '24 Hours'
  },
  {
    id: 'build',
    num: '03',
    title: 'BUILD',
    shortDesc: 'Engineering and structured execution.',
    detailedDesc: 'We build with industrial-grade precision. Adhering to the absolute rules of the Swiss Modern grid, typography hierarchy, and highly clean, type-safe development.',
    deliverables: ['Responsive Web Modules', 'API Integrations', 'Staging Deployments'],
    timeline: '1-3 Weeks'
  },
  {
    id: 'launch',
    num: '04',
    title: 'LAUNCH',
    shortDesc: 'Deployment and final handover.',
    detailedDesc: 'Production hardening, server optimization, and absolute migration handover. We host on premium server containers and transfer all code assets directly to you.',
    deliverables: ['Production Server Release', 'GitHub Code Assets Transfer', '30-Day Launch Support Guarantee'],
    timeline: '1-2 Days'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'academic',
    title: 'ACADEMIC PROJECTS',
    price: '₹499+',
    features: [
      'Research Prototypes',
      'Technical Docs',
      'MVP Development',
      'Source Code Delivery',
      'Basic UI Mockup Setup'
    ],
    actionLabel: 'Initiate Project'
  },
  {
    id: 'business',
    title: 'BUSINESS PROJECTS',
    price: '₹8,999+',
    features: [
      'Custom Web Apps',
      'E-commerce Integration',
      'AI Solutions integration',
      'User Journey Mapping',
      'CI/CD and Cloud Deployment',
      'Ongoing Technical SLA Support'
    ],
    actionLabel: 'Discuss Requirements',
    isPopular: true
  },
  {
    id: 'designer',
    title: 'DESIGNER PACKAGE',
    price: '₹2,999+',
    features: [
      'Logo & Brand Identity Design',
      'Interactive Figma UI/UX Prototypes',
      'Modern Color Palette Selection',
      'Type Scale Design Guide',
      'Print-ready Graphic Vector Assets'
    ],
    actionLabel: 'Discuss Requirements'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What services do you offer?',
    answer: 'We offer a wide range of top-tier services including custom responsive web applications deployed on Vercel, headless e-commerce systems, customized AI solutions integration, complete brand identity packages, UX/UI schematic design, and focused academic prototype support.'
  },
  {
    id: 'faq2',
    question: 'How much do you charge?',
    answer: 'Our professional services start from as low as ₹499 for academic assistance. Pricing depends precisely on the technical complexity, integration scope, and speed of delivery. We provide transparent, bulletproof fixed-price quotes before starting any work.'
  },
  {
    id: 'faq3',
    question: 'How do I start?',
    answer: "Simply click the 'Start Project' button on the navbar or complete our Project Brief desk at the bottom of the page. You can also directly reach out to us via Email at madhavan.shivakumar.in@gmail.com. We typically respond within 24 hours with a comprehensive proposal."
  },
  {
    id: 'faq4',
    question: 'Do you offer post-launch support?',
    answer: 'Yes, absolutely. Every business system built by FreelancerStudio includes a complimentary 30-day post-launch support window. We also offer standard annual support SLAs to guarantee that your systems stay performant, secure, and fully updated.'
  }
];

export const MANIFESTO_PRINCIPLES = [
  {
    title: 'THE RULE OF THE GRID',
    desc: 'Nothing floats without mathematical anchors. Visual order is objective, structural, and strictly aligned. Borders are not decorative—they are the architectural frame of data.'
  },
  {
    title: 'THE DICTATE OF THE GROTESK',
    desc: 'Typography is structural engineering. We select Hanken Grotesk for its raw contemporary power. Type scales rely on size contrast, heavy weights, and tracked-out labels.'
  },
  {
    title: 'ABSOLUTE ARCHITECTURAL HONESTY',
    desc: 'No fake loaders, no misleading buttons, no decorative gradients. The surface represents exactly what is built: clean state logic, fast assets, and functional elegance.'
  },
  {
    title: 'HONEST FIXED PRICING',
    desc: 'We refuse hourly billing vagueness. Every block of code has a deterministic cost, so our clients know their capital requirements down to the last rupee.'
  }
];
