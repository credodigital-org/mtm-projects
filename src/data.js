import {
  HardHat,
  Building2,
  ShieldCheck,
  Coins,
  UserCog,
  PencilRuler,
  Landmark,
  Target,
  Timer,
  Handshake,
  FileCheck2,
  DraftingCompass,
  Scale,
  HardHat as Helmet,
  Key,
  Wrench,
} from "lucide-react";

/* Put your photos in /public/images using these names.
   If a file is missing, a styled placeholder is shown instead. */
export const IMG = {
  hero: "/images/hero.png",
  about: "/images/about-building.png",
  villa: "/images/focus-villa.png",
  office: "/images/focus-office.png",
  maintenance: "/images/focus-maintenance.png",
  cta: "/images/cta.jpeg",
};

export const CONTACT = {
  tel: "026220533",
  whatsapp: "+971501110586",
  whatsappLink: "https://wa.me/971501110586",
  email: "info@mtmprojects.ae",
  instagram: "mtm",
  facebook: "Mtm.mtm",
  address: "Abu Dhabi, UAE",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Focus", href: "#focus" },
  { label: "Why Choose Us", href: "#why" },
];

export const SERVICES = [
  { icon: HardHat, title: "Engineering Management" },
  { icon: Building2, title: "Construction Management" },
  { icon: ShieldCheck, title: "Quality Management" },
  { icon: Coins, title: "Cost Management" },
  { icon: UserCog, title: "Site Management" },
  { icon: PencilRuler, title: "Design Management" },
  { icon: Landmark, title: "Authorities Approvals" },
];

export const WHY = [
  { icon: Target, title: "Experienced Team" },
  { icon: ShieldCheck, title: "Quality & Compliance" },
  { icon: Timer, title: "On-Time Delivery" },
  { icon: Handshake, title: "Client-Centric Approach" },
];

export const FOCUS = [
  { key: "villa", title: "Villa Projects", tags: ["Design", "Build", "Deliver"] },
  { key: "office", title: "Office Projects", tags: ["Plan", "Manage", "Complete"] },
  { key: "maintenance", title: "General Maintenance", tags: ["Safety", "Quality", "Sustainability"] },
];

export const PROCESS = [
  { icon: FileCheck2, title: "Project Initiation & Feasibility" },
  { icon: DraftingCompass, title: "Design & Engineering Review" },
  { icon: Landmark, title: "Authorities Approvals & Permitting" },
  { icon: Scale, title: "Tendering & Contractor Selection" },
  { icon: Helmet, title: "Site Supervision & Construction" },
  { icon: ShieldCheck, title: "Quality Assurance & Cost Control" },
  { icon: Key, title: "Handover & Commissioning" },
  { icon: Wrench, title: "Defects Liability & Asset Care" },
];
