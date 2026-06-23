import img1 from "@/assets/images/gallery-1.jpeg";
import img2 from "@/assets/images/gallery-2.jpeg";
import img3 from "@/assets/images/gallery-3.jpeg";
import img4 from "@/assets/images/gallery-4.jpeg";
import img5 from "@/assets/images/gallery-5.jpeg";
import img6 from "@/assets/images/gallery-6.jpeg";
import img7 from "@/assets/images/gallery-7.jpeg";
import img8 from "@/assets/images/gallery-8.jpeg";
import img9 from "@/assets/images/gallery-9.jpeg";

const LAWN_IMAGE = img1;
const LANDSCAPE_IMAGE = img2;
const GARDEN_IMAGE = img3;
const MULCH_IMAGE = img4;
const CLEANUP_IMAGE = img5;
const COMMERCIAL_IMAGE = img6;

const SERVICE_IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img1,
];

type TranslateFn = (key: string) => string;

const logoSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="28" fill="#123524"/>
  <path d="M26 76c22-2 39-17 50-42 7 21 1 43-16 55-12 8-25 8-34-13z" fill="#7fc241"/>
  <path d="M58 88c4-25 17-43 39-54-3 30-15 48-39 54z" fill="#d9f5c7"/>
  <text x="60" y="104" text-anchor="middle" font-family="Arial" font-size="18" font-weight="800" fill="#fff">IV</text>
</svg>`);

export const BUSINESS_INFO = {
  NAME: "Isaías Velásquez Landscaping Services",
  TAGLINE: "Landscaping & Outdoor Services",
  DESCRIPTION:
    "Professional landscaping, lawn maintenance, tree services, decks, patios, yard cleanup, mulching, rock installation, bush trimming, and edging for residential and commercial clients in 23185.",
  LOGO: `data:image/svg+xml,${logoSvg}`,
  HERO_IMAGE: LANDSCAPE_IMAGE,
  CAROUSEL_IMAGE: LAWN_IMAGE,
  URL: "https://isaiasvelasquezlandscaping.com",
  get COPYRIGHT_YEAR() {
    return new Date().getFullYear();
  },
} as const;

export const SEO_DEFAULTS = {
  TITLE_TEMPLATE: (pageTitle: string) => `${pageTitle} | ${BUSINESS_INFO.NAME}`,
  DESCRIPTION: BUSINESS_INFO.DESCRIPTION,
  IMAGE: BUSINESS_INFO.HERO_IMAGE,
  KEYWORDS:
    "landscaping services, lawn mowing, lawn maintenance, tree services, deck and patio services, yard cleanup, mulching installation, rock installation, bush trimming, lawn edging, 23185",
  AUTHOR: BUSINESS_INFO.NAME,
} as const;

const phoneRaw = "(804) 854-6205";
const phoneDigits = phoneRaw.replace(/[^\d]/g, "");

export const CONTACT_INFO = {
  EMAIL: "velasquezisaias038@gmail.com",
  PHONE_DISPLAY: phoneRaw,
  PHONE_CALL: `tel:+1${phoneDigits}`,
  WHATSAPP_DISPLAY: phoneRaw,
  WHATSAPP_URL: `https://wa.me/1${phoneDigits}`,
  SOCIAL: {
    INSTAGRAM: "",
    FACEBOOK: "",
    GOOGLE: "",
  },
  LOCATION: "Landscaping and outdoor services in the 23185 service area",
  HOURS: "Monday - Saturday | 7:00 AM - 6:00 PM",
  PAYMENT_METHODS: "Cash & Zelle",
  FOUNDED: "2020",
  LANGUAGES: ["English", "Spanish"] as const,
  AGENCY_URL: "https://crescendodigitalmarketingagency.com/en/",
  AGENCY_NAME: "CDM Marketing",
} as const;

export const TEMPLATE_STATUS = {
  hasTemplatePlaceholders: false,
  shouldIndex: true,
} as const;

export interface ServiceConfig {
  key: string;
  title: string;
  category: string;
  image: string;
  icon: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

const processSteps = [
  "Free request review and quick scheduling",
  "On-site assessment of lawn, landscape, beds, or property needs",
  "Clear estimate with recommended scope and timing",
  "Professional service completed with attention to detail",
  "Final walkthrough and maintenance recommendations",
] as const;

export const SERVICE_PROCESS = processSteps;

export const SERVICE_GROUPS = [
  {
    title: "Tree Services",
    services: ["tree-services"],
  },
  {
    title: "Outdoor Living",
    services: ["decks-and-patios"],
  },
  {
    title: "Lawn Care",
    services: ["lawn-maintenance", "lawn-mowing", "lawn-edging"],
  },
  {
    title: "Landscape Services",
    services: ["landscape-maintenance", "mulching-installation", "rock-installation", "bush-trimming"],
  },
  {
    title: "Cleanup & More",
    services: ["yard-cleanup", "and-more"],
  },
] as const;

const serviceDetails: Omit<ServiceConfig, "description" | "benefits" | "faqs">[] = [
  { key: "tree-services", title: "Tree Services", category: "Tree Services", image: GARDEN_IMAGE, icon: "T" },
  { key: "decks-and-patios", title: "Decks and Patios", category: "Outdoor Living", image: LANDSCAPE_IMAGE, icon: "D" },
  { key: "landscape-maintenance", title: "Landscape Maintenance", category: "Landscape Services", image: LANDSCAPE_IMAGE, icon: "L" },
  { key: "lawn-maintenance", title: "Lawn Maintenance", category: "Lawn Care", image: LAWN_IMAGE, icon: "L" },
  { key: "lawn-mowing", title: "Lawn Mowing", category: "Lawn Care", image: LAWN_IMAGE, icon: "M" },
  { key: "yard-cleanup", title: "Yard Cleanup", category: "Cleanup & More", image: CLEANUP_IMAGE, icon: "Y" },
  { key: "mulching-installation", title: "Mulching Installation", category: "Landscape Services", image: MULCH_IMAGE, icon: "M" },
  { key: "and-more", title: "And More", category: "Cleanup & More", image: COMMERCIAL_IMAGE, icon: "+" },
  { key: "rock-installation", title: "Rock Installation", category: "Landscape Services", image: LANDSCAPE_IMAGE, icon: "R" },
  { key: "bush-trimming", title: "Bush Trimming", category: "Landscape Services", image: GARDEN_IMAGE, icon: "B" },
  { key: "lawn-edging", title: "Lawn Edging", category: "Lawn Care", image: LAWN_IMAGE, icon: "E" },
];

export const APP_SERVICES: ServiceConfig[] = serviceDetails.map((service, index) => ({
  ...service,
  image: SERVICE_IMAGES[index] ?? service.image,
  description: `${BUSINESS_INFO.NAME} provides reliable ${service.title.toLowerCase()} for residential and commercial clients in the 23185 service area. The team focuses on clean results, dependable scheduling, and curb appeal that makes outdoor spaces look professionally maintained.`,
  benefits: [
    "Improves curb appeal and property presentation",
    "Keeps outdoor areas clean, healthy, and easier to maintain",
    "Delivered by a dependable team founded in 2020",
    "Clear communication, practical recommendations, and quality workmanship",
  ],
  faqs: [
    {
      question: `Do you provide ${service.title.toLowerCase()} for homes and businesses?`,
      answer:
        "Yes. We help residential and commercial clients with scheduled services, one-time projects, and seasonal maintenance needs.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "Call, send a WhatsApp message, or complete the quote form. We will review your needs and recommend the next step.",
    },
  ],
}));

export const FEATURED_SERVICE_KEYS = [
  "tree-services",
  "decks-and-patios",
  "landscape-maintenance",
  "lawn-mowing",
  "mulching-installation",
  "yard-cleanup",
] as const;

export const getServicePath = (serviceKey: string) => `/services/${serviceKey}`;

export const getPrimaryServicePath = () => getServicePath(APP_SERVICES[0].key);

export const getServiceByKey = (serviceKey: string) =>
  APP_SERVICES.find((service) => service.key === serviceKey);

export const NAV_LINKS = [
  { key: "home", label: "Home", path: "/" },
  { key: "about", label: "About Us", path: "/about" },
  { key: "services", label: "Services", path: "/services" },
  { key: "gallery", label: "Gallery", path: "/gallery" },
  { key: "service_areas", label: "Service Areas", path: "/#service-areas" },
  { key: "faq", label: "FAQ", path: "/faq" },
  { key: "contact", label: "Contact", path: "/contact" },
] as const;

export const getNavLinks = (_t?: TranslateFn) =>
  NAV_LINKS.map((link) => ({
    ...link,
    label: _t ? _t(`header.nav.${link.key}`) : link.label,
    path: link.path,
  }));

export const getServiceLinks = (_t?: TranslateFn) =>
  APP_SERVICES.map((service) => ({
    key: service.key,
    label: _t ? _t(`services.${service.key}.title`) : service.title,
    category: service.category,
    path: getServicePath(service.key),
  }));

export const getServiceGroups = () =>
  SERVICE_GROUPS.map((group) => ({
    key: group.title,
    title: group.title,
    services: group.services
      .map((key) => getServiceByKey(key))
      .filter((service): service is ServiceConfig => Boolean(service)),
  }));

export const getLocalizedServiceGroups = (_t?: TranslateFn) =>
  getServiceGroups().map((group) => ({
    ...group,
    title: _t ? _t(`service_groups.${group.key}`) : group.title,
    services: group.services.map((service) => ({
      ...service,
      title: _t ? _t(`services.${service.key}.title`) : service.title,
      description: _t ? _t(`services.${service.key}.description`) : service.description,
    })),
  }));

export const getServiceOptions = (_t?: TranslateFn) => [
  ...APP_SERVICES.map((service) => ({
    value: service.key,
    label: _t ? _t(`services.${service.key}.title`) : service.title,
  })),
  { value: "info", label: _t ? _t("contact.form.service_info") : "General Quote Request" },
  { value: "other", label: _t ? _t("contact.form.service_other") : "Other" },
];

export const getResolvedSiteUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/+$/, "");
  }

  return BUSINESS_INFO.URL.replace(/\/+$/, "");
};

export const getLocalizedBusinessName = (_t?: TranslateFn) => BUSINESS_INFO.NAME;
export const getLocalizedBusinessTagline = (_t?: TranslateFn) => BUSINESS_INFO.TAGLINE;
export const getLocalizedBusinessDescription = (_t?: TranslateFn) => BUSINESS_INFO.DESCRIPTION;
export const getLocalizedContactLocation = (_t?: TranslateFn) =>
  _t ? _t("contact.info.location") : CONTACT_INFO.LOCATION;
export const getLocalizedContactHours = (_t?: TranslateFn) =>
  _t ? _t("contact.info.hours") : CONTACT_INFO.HOURS;

export const TEMPLATE_MOCK_IMAGE = LANDSCAPE_IMAGE;
