import { ServiceItem, FounderData, SiteSettings, DigitalProduct, ProductPaymentSettings } from '../types';

export const INITIAL_FOUNDER_DATA: FounderData = {
  name: 'Nitesh Kumar',
  role: 'Founder & Tech Architect',
  company: 'Nexora Labs',
  tagline: 'Idea to Impact. We Build. You Grow. All-in-One Digital Solutions to Grow Your Business 10X Faster.',
  bio: 'Full-Stack Developer, AI Engineer, and Creative Technologist specializing in ultra-fast modern web applications, production AI workflows, interactive 3D WebGL experiences, and business automations.',
  vision: 'To empower businesses and founders worldwide with turnkey, elite-tier digital infrastructure that eliminates technical bottlenecks and accelerates revenue 10X.',
  email: 'niteshkumer376@gmail.com',
  phone: '+91 9024732763',
  location: 'India • Available Worldwide Remote',
  whatsapp: '9024732763',
  instagram: '@web_with_nitesh',
  github: 'https://github.com/niteshkumar',
  linkedin: 'https://linkedin.com/in/niteshkumar',
  skills: [
    'React 18 / Next.js',
    'Three.js & 3D WebGL',
    'Tailwind CSS',
    'Node.js & Express',
    'Gemini & OpenAI API',
    'Voice AI & Retell/Vapi',
    'Shopify & NextCommerce',
    'PostgreSQL / Firebase',
    'Make.com & Zapier Automation'
  ],
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
};

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  brandName: 'NEXORA LABS',
  headline: 'Idea to Impact. We Build. You Grow.',
  subheadline: 'All-in-One Digital Solutions to Grow Your Business 10X Faster. Custom Web, Autonomous AI Agents, 3D Experiences & Turnkey Digital Products.',
  contactEmail: 'niteshkumer376@gmail.com',
  contactPhone: '+91 9024732763',
  whatsappNumber: '9024732763',
  instagramHandle: '@web_with_nitesh',
  isLiveEventActive: true,
  liveEventTitle: 'Live AI & Full-Stack Architecture Masterclass 2026',
  liveEventDate: '2026-08-28T18:30:00Z',
  liveEventStreamUrl: 'https://youtube.com/live',
  enableAiChat: true,
  heroBannerNotice: '🔥 NEW: Digital Products & AI Blueprint Store is LIVE! Instant UPI Scan & WhatsApp Delivery.'
};

export const INITIAL_PRODUCT_PAYMENT_SETTINGS: ProductPaymentSettings = {
  upiId: '9024732763@upi',
  payeeName: 'Nitesh Kumar (Nexora Labs)',
  qrCodeImageUrl: '',
  whatsappConfirmationNumber: '9024732763',
  customInstructions: 'Scan with any UPI app (GPay, PhonePe, Paytm, CRED). After payment, enter your 12-digit UTR number for instant digital download.'
};

export const INITIAL_DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'prod-ai-prompts-vault',
    slug: 'ai-master-prompts-vault-2026',
    title: '500+ AI Master Prompts Vault 2026',
    category: 'AI & Prompts',
    tagline: 'Battle-tested system prompts for ChatGPT-4o, Claude 3.5 Sonnet & Gemini Flash for marketing, coding & business automation.',
    description: 'A curated vault of 500+ categorized prompts engineered to generate high-converting copy, full-stack code, and sales strategies.',
    priceInr: 299,
    originalPriceInr: 999,
    priceUsd: 5,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 BEST SELLER',
    fileType: 'PDF & Prompts',
    fileSize: '18 MB',
    deliverables: [
      '500+ Engineered System Prompts',
      'Copywriting & Ad Scripts Vault',
      'Full-Stack Developer Prompt Matrix',
      'Free Lifetime Notion Database Access'
    ],
    downloadUrl: 'https://drive.google.com/drive/folders/1NexoraAI_Prompts_Vault_Preview',
    salesCount: 142,
    rating: 5.0,
    isFeatured: true,
    isActive: true,
    createdAt: '2026-08-01'
  },
  {
    id: 'prod-3d-webgl-starter',
    slug: 'threejs-webgl-3d-landing-starter-kit',
    title: 'Interactive 3D WebGL Portfolio & Agency Starter Kit',
    category: 'Web & UI Kits',
    tagline: 'Ready-to-deploy Three.js + React Three Fiber animated particles, fluid canvases, and dark-mode cyberpunk UI layout.',
    description: 'Save 40+ hours of setup with this modern 3D canvas starter kit.',
    priceInr: 499,
    originalPriceInr: 1499,
    priceUsd: 7,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    badge: '⚡ DEV FAVORITE',
    fileType: 'Source Code',
    fileSize: '35 MB ZIP',
    deliverables: [
      'Full TypeScript + React 18 Source Code',
      'Custom 3D Mesh Particle Shaders',
      'Tailwind CSS v4 Pre-configured',
      'Vercel & Netlify 1-Click Deployment'
    ],
    downloadUrl: 'https://github.com/niteshkumar/nexora-3d-starter-kit-demo',
    salesCount: 89,
    rating: 4.9,
    isFeatured: true,
    isActive: true,
    createdAt: '2026-08-05'
  },
  {
    id: 'prod-agency-notion-os',
    slug: 'all-in-one-agency-notion-operating-system',
    title: 'Nexora Agency OS — Client & Revenue Hub',
    category: 'Notion Systems',
    tagline: 'The exact Notion dashboard used by Nexora Labs to manage clients, invoices, project pipelines, and revenue tracking.',
    description: 'Streamline your freelance or agency business with CRM, project Kanban boards, proposal templates, and invoice trackers.',
    priceInr: 399,
    originalPriceInr: 1299,
    priceUsd: 6,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    badge: '⭐ 5.0 RATED',
    fileType: 'Notion Template',
    fileSize: 'Instant Duplicate Link',
    deliverables: [
      'Client CRM & Lead Pipeline',
      'Project Milestone Tracker',
      'Automated Invoice & Proposal Templates',
      '10-Minute Video Walkthrough'
    ],
    downloadUrl: 'https://notion.site/nexora-labs-agency-os-template',
    salesCount: 114,
    rating: 5.0,
    isFeatured: true,
    isActive: true,
    createdAt: '2026-08-10'
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'service-web-development',
    number: '01',
    title: 'Website Development',
    tagline: 'High-Performance, Ultra-Fast & 3D Interactive Web Applications',
    description: 'We engineer custom, scalable, and conversion-optimized websites using React, Next.js, Three.js, and modern headless architectures.',
    features: ['Custom React / Next.js Architecture', '3D WebGL & Interactive Visuals', 'Mobile-First Responsive Design', 'SEO & Core Web Vitals 95+'],
    deliverables: ['Production-ready source code', 'CMS integration', 'Deployment setup', '30 days post-launch support'],
    timeline: '1-3 Weeks',
    priceStartingInr: 9999,
    priceStartingUsd: 149,
    iconName: 'Globe',
    category: 'web',
    badge: 'Popular',
    isPopular: true
  },
  {
    id: 'service-app-development',
    number: '02',
    title: 'App Development',
    tagline: 'Cross-Platform iOS & Android Mobile Experiences',
    description: 'Native-feel mobile apps built with React Native and Flutter, connected to real-time cloud backends with instant offline sync.',
    features: ['iOS & Android cross-platform', 'Push notifications & offline mode', 'Biometric auth & secure storage', 'App Store / Play Store submission'],
    deliverables: ['APK / IPA bundles', 'Clean source code', 'Backend API documentation'],
    timeline: '3-6 Weeks',
    priceStartingInr: 24999,
    priceStartingUsd: 349,
    iconName: 'Smartphone',
    category: 'mobile'
  },
  {
    id: 'service-ai-voice-agents',
    number: '03',
    title: 'AI & Voice Agents',
    tagline: 'Autonomous 24/7 AI Receptionists, Support & WhatsApp Bots',
    description: 'Custom Gemini & OpenAI conversational AI agents and human-like voice bots that handle incoming client calls and book appointments.',
    features: ['Real-time voice synthesis', 'WhatsApp & CRM integration', 'Multi-turn intelligent memory', 'Custom fine-tuned company knowledge'],
    deliverables: ['Configured AI voice agent', 'Webhook bridges', 'Live analytics dashboard'],
    timeline: '1-2 Weeks',
    priceStartingInr: 14999,
    priceStartingUsd: 199,
    iconName: 'Bot',
    category: 'ai',
    badge: 'Trending'
  },
  {
    id: 'service-digital-marketing',
    number: '04',
    title: 'Digital Marketing & Growth',
    tagline: 'Data-Driven Meta Ads, Google PPC & Viral Reels Strategy',
    description: 'High-ROI digital acquisition campaigns engineered to scale your lead flow and e-commerce conversions 10X.',
    features: ['Meta Ads & Google Ads scaling', 'Viral short-form Reels & Video strategy', 'High-converting sales funnels', 'A/B testing & attribution'],
    deliverables: ['Ad creative assets', 'Targeting playbook', 'Weekly performance dashboard'],
    timeline: 'Monthly Sprint',
    priceStartingInr: 7999,
    priceStartingUsd: 99,
    iconName: 'TrendingUp',
    category: 'marketing'
  },
  {
    id: 'service-ui-ux-design',
    number: '05',
    title: 'UI/UX Design & 3D Prototyping',
    tagline: 'Cyberpunk, Modern Light & Intuitive Product Design',
    description: 'World-class design systems, Figma UI kits, and micro-interactions that captivate users and establish instant brand credibility.',
    features: ['Figma design systems & tokens', 'Interactive prototypes', 'Brand identity & vector assets', 'Responsive design specs'],
    deliverables: ['Complete Figma project file', 'Exported assets', 'Developer handover guide'],
    timeline: '1-2 Weeks',
    priceStartingInr: 5999,
    priceStartingUsd: 79,
    iconName: 'Layers',
    category: 'design'
  },
  {
    id: 'service-business-automation',
    number: '06',
    title: 'Business Automation & Workflows',
    tagline: 'Eliminate Repetitive Tasks with Make.com & Webhook Pipelines',
    description: 'Connect your CRM, payment gateways, emails, and WhatsApp into automated workflows that save 20+ hours every single week.',
    features: ['Make.com & Zapier scenario build', 'Automated invoicing & receipts', 'WhatsApp instant notifications', 'Custom API integration'],
    deliverables: ['Active automation blueprints', 'Fail-safe error alerts', 'Video training SOP'],
    timeline: '3-7 Days',
    priceStartingInr: 4999,
    priceStartingUsd: 69,
    iconName: 'Cpu',
    category: 'automation'
  },
  {
    id: 'service-digital-products',
    number: '07',
    title: 'Digital Products & Blueprints',
    tagline: 'Turnkey Codebases, Prompt Vaults & Notion OS',
    description: 'Ready-to-use digital assets, AI starter templates, and business operating systems available with instant UPI scan-and-pay download.',
    features: ['Instant digital asset delivery', 'UPI & QR automated checkout', 'Regular updates & patches', 'Direct creator support'],
    deliverables: ['Instant file download', 'Documentation & setup guide', 'WhatsApp support link'],
    timeline: 'Instant Access',
    priceStartingInr: 299,
    priceStartingUsd: 5,
    iconName: 'ShoppingBag',
    category: 'products',
    badge: 'Store'
  }
];