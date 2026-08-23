export type PageRoute =
  | 'home'
  | 'services'
  | 'ai-learning'
  | 'products'
  | 'blueprint'
  | 'events'
  | 'about'
  | 'projects'
  | 'contact'
  | 'admin';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  priceStartingInr: number;
  priceStartingUsd: number;
  iconName: string;
  category: 'web' | 'mobile' | 'ai' | 'marketing' | 'design' | 'automation' | 'products';
  badge?: string;
  isPopular?: boolean;
}

export interface FounderData {
  name: string;
  role: string;
  company: string;
  tagline: string;
  bio: string;
  vision: string;
  email: string;
  phone: string;
  location: string;
  whatsapp: string;
  instagram: string;
  github: string;
  linkedin: string;
  skills: string[];
  avatarUrl: string;
}

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: 'AI & Prompts' | 'Notion Systems' | 'Web & UI Kits' | 'Automation Blueprints' | 'Code & Boilerplates';
  tagline: string;
  description: string;
  priceInr: number;
  originalPriceInr: number;
  priceUsd: number;
  coverImage: string;
  badge?: string;
  fileType: 'ZIP File' | 'Notion Template' | 'PDF & Prompts' | 'Source Code' | 'Figma File' | 'Drive Folder';
  fileSize?: string;
  deliverables: string[];
  downloadUrl: string;
  previewUrl?: string;
  salesCount: number;
  rating: number;
  isFeatured?: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface ProductOrder {
  id: string;
  productId: string;
  productTitle: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  amountPaid: number;
  paymentMethod: 'UPI_QR' | 'WHATSAPP_DIRECT';
  utrTransactionId: string;
  paymentScreenshot?: string;
  status: 'pending_verification' | 'approved' | 'delivered';
  orderDate: string;
  downloadUrl: string;
}

export interface ProductPaymentSettings {
  upiId: string;
  payeeName: string;
  qrCodeImageUrl?: string;
  customInstructions: string;
  whatsappConfirmationNumber: string;
}

export interface ProjectRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
  status: 'new' | 'in_review' | 'contacted' | 'completed';
  createdAt: string;
}

export interface SiteSettings {
  brandName: string;
  headline: string;
  subheadline: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  instagramHandle: string;
  isLiveEventActive: boolean;
  liveEventTitle: string;
  liveEventDate: string;
  liveEventStreamUrl: string;
  enableAiChat: boolean;
  heroBannerNotice: string;
}