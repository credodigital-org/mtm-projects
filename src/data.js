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
  HeartHandshake,
  Lightbulb,
  Users,
  Leaf,
  Home,
  Clock,
  Settings,
  MapPin,
  Quote,
} from "lucide-react";

/* Put your photos in /public/images using these names.
   If a file is missing, a styled placeholder is shown instead. */
export const IMG = {
  hero: "/images/hero4.png",
  about: "/images/about-building2.png",
  villa: "/images/villa-projects.png",
  office: "/images/office-projects.png",
  maintenance: "/images/general-maintenance.png",
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
  { label: "Home", to: "/", section: "home" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Focus", to: "/focus" },
  { label: "Why Choose Us", to: "/why" },
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


/* ==========================================
   ABOUT US PAGE
========================================== */
export const ABOUT_PAGE = {
  hero: {
    image: "/images/about-hero.png",
    alt: "Abu Dhabi skyline at sunset",
    kicker: "Projects Management Company",
    location: "Abu Dhabi, UAE",
    titleTop: "Building a Better",
    titleAccent: "Tomorrow Together",
    text: "MTM Projects Management is a forward-thinking project management company based in Abu Dhabi, dedicated to turning ideas into lasting success.",
  },

  who: {
    eyebrow: "Who We Are",
    title: "A Growing Startup with a Big Vision",
    text: "MTM Projects Management is a dynamic and ambitious startup focused on delivering smart, efficient, and sustainable project management solutions across Abu Dhabi and beyond. We combine fresh ideas with industry expertise to help our clients plan, manage, and achieve their goals with confidence.",
  },

  values: {
    eyebrow: "Our Values",
    title: "What Drives Us",
    text: "Our values shape the way we work, the solutions we deliver, and the relationships we build.",
    items: [
      { icon: HeartHandshake, title: "Commitment", text: "To our clients and community" },
      { icon: Lightbulb, title: "Innovation", text: "In every project we deliver" },
      { icon: ShieldCheck, title: "Excellence", text: "In quality and performance" },
      { icon: Users, title: "Collaboration", text: "For greater success" },
    ],
  },

  team: {
    eyebrow: "Our Team",
    title: "A Team of Passionate Professionals",
    text: "Our team brings together industry experts, creative problem-solvers, and dedicated professionals who are passionate about delivering exceptional results.",
    image: "/images/about-team.png",
    alt: "The MTM Projects team working together in the office",
  },

  workflow: {
    eyebrow: "Precision Workflow",
    title: "How We Execute Landmark Projects",
    text: "A battle-tested 4-phase project control framework ensuring schedule, safety, and fiscal certainty from day zero to occupancy.",
    phases: [
      {
        title: "Feasibility & Pre-Con",
        text: "Constructability reviews, environmental impact assessment, cost modeling, and sovereign zoning approvals.",
        image: "/images/phase-1-feasibility.png",
        alt: "Hard hat and plans on a desk during a feasibility review",
      },
      {
        title: "Tendering & Procurement",
        text: "Transparent bid packages, subcontractor qualification, material hedging, and bulletproof contractual structuring.",
        image: "/images/phase-2-tendering.png",
        alt: "Building structure under construction with plans in the foreground",
      },
      {
        title: "Execution & Controls",
        text: "On-site resident engineering, daily BIM milestone tracking, forensic safety oversight, and QA/QC management.",
        image: "/images/phase-3-execution.png",
        alt: "Engineers reviewing progress on site",
      },
      {
        title: "Commissioning & Handover",
        text: "Integrated MEP systems commissioning, operational staff training, punch-list closeout, and turnkey warranty transfer.",
        image: "/images/phase-4-handover.png",
        alt: "Completed building at dusk",
      },
    ],
  },
};

/* ==========================================
   SERVICES PAGE
========================================== */
export const SERVICES_PAGE = {
  hero: {
    image: "/images/services-hero.png",
    alt: "Two engineers reviewing plans on a construction site",
    titleTop: "End-to-End",
    titleAccent: "Construction solutions",
    text: "Delivering tailored projects management solutions across diverse sectors in UAE.",
  },

  intro: {
    eyebrow: "Our Services",
    title: "Building Every Stage of Your Vision",
    text: "We offer a wide range of constructions and project management services tailored to meet your needs, from residential to commercial projects.",
  },

  items: [
    {
      badge: "Technical Advisory & Engineering",
      title: "Engineering Management",
      text: "Multi-disciplinary engineering coordination, structural analysis verification, MEP integration, and value engineering oversight to guarantee technical integrity.",
      tags: ["Structural Validation", "MEP Systems Review", "Value Engineering"],
      image: "/images/svc-engineering.png",
      alt: "Engineers reviewing drawings on a tablet at a construction site",
    },
    {
      badge: "Program Delivery",
      title: "Construction Management",
      text: "Full lifecycle construction governance, contractor oversight, master CPM schedule tracking, and rigorous site execution from groundbreaking to turnkey handover.",
      tags: ["Contractor Management", "CPM Schedule Control", "Procurement Alignment"],
      image: "/images/svc-construction.png",
      alt: "Cranes and a building structure under construction",
    },
    {
      badge: "QA / QC Assurance",
      title: "Quality Management",
      text: "Stringent quality assurance and zero-defect handover frameworks adhering to international building codes, ISO standards, and on-site testing protocols.",
      tags: ["Material Testing & Audits", "Zero-Defect Handover", "ISO 9001 Compliance"],
      image: "/images/svc-quality.png",
      alt: "Quality inspector checking a building facade",
    },
    {
      badge: "Commercial & Quantity Surveying",
      title: "Cost Management",
      text: "Capital expenditure forecasting, commercial risk modeling, bill of quantities (BOQ), tender procurement, and aggressive cash-flow optimization across all phases.",
      tags: ["CapEx & OpEx Forecasting", "Quantity Surveying", "Tender Procurement"],
      image: "/images/svc-cost.png",
      alt: "Quantity surveyor working on cost spreadsheets and plans",
    },
    {
      badge: "On-Site Supervision",
      title: "Site Management",
      text: "Daily site supervision, HSE (Health, Safety & Environment) enforcement, logistics coordination, and real-time field progress monitoring across active construction fronts.",
      tags: ["HSE Zero-Harm Protocols", "Daily Site Log Telemetry", "Subcontractor Coordination"],
      image: "/images/svc-site.png",
      alt: "Site supervisors in safety vests on an active construction site",
    },
    {
      badge: "Architectural & BIM Coordination",
      title: "Design Management",
      text: "Managing architectural and engineering design stages, BIM LOD 300–500 clash detection, design consultant management, and constructability audits.",
      tags: ["BIM 3D/4D Modeling", "Constructability Audits", "Consultant Alignment"],
      image: "/images/svc-design.png",
      alt: "Designer working on a 3D building model",
    },
  ],

  featured: {
    badge: "Regulatory & Statutory Compliance",
    eyebrow: "UAE Expedited Liaison",
    title: "Authorities Approvals",
    text: "Expedited statutory permitting and regulatory clearance across UAE municipalities, civil defense, utility providers (DEWA/SEWA/ADDC), and urban planning councils.",
    tags: ["UAE Municipality Permits", "Civil Defense Clearances", "Utility NOCs"],
    image: "/images/svc-authorities.png",
    alt: "Consultants reviewing a masterplan with a client",
  },

  why: {
    eyebrow: "Why Choose Us",
    title: "Your Trusted Partner In Construction",
    text: "We combine experience, innovation and a customer-first approach to deliver projects that exceed expectations.",
    items: [
      { icon: ShieldCheck, title: "Quality Assurance", text: "We never compromise on quality." },
      { icon: Timer, title: "On-Time Delivery", text: "Your time matters to us." },
      { icon: Users, title: "Expert Team", text: "Skilled professionals, working for your success." },
      { icon: Leaf, title: "Sustainable Solutions", text: "Building a better tomorrow." },
    ],
  },
};

/* ==========================================
   OUR FOCUS PAGE
========================================== */
export const FOCUS_PAGE = {
  hero: {
    image: "/images/focus-hero.png",
    alt: "Modern villa with palm trees and the Dubai skyline behind",
    titleTop: "Building Dreams",
    titleAccent: "Across Every Space",
    text: "We offer a wide range of constructions and project management services tailored to meet your needs, from residential to commercial projects.",
  },

  intro: {
    eyebrow: "Our Projects",
    title: "Featured Projects",
    text: "From residential communities to commercial complexes. Our projects are built with a focus on quality, safety and long-term value.",
  },

  projects: [
    {
      icon: Home,
      title: "Villa Projects",
      text: "From concept to completion, we manage villa projects with precision, quality and attention to detail.",
      image: IMG.villa,
      alt: "Luxury villa with a landscaped garden entrance",
    },
    {
      icon: Building2,
      title: "Office Projects",
      text: "Creating functional and inspiring work spaces with efficient project management solutions.",
      image: IMG.office,
      alt: "Fitted-out executive office with a desk and seating",
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      text: "Reliable maintenance services to keep your property in top condition, always.",
      image: IMG.maintenance,
      alt: "Technician servicing a ceiling air-conditioning unit",
    },
  ],

  cta: {
    title: "Building Better Spaces, Together",
    text: "Let's bring your vision to life with our expert project management services.",
    button: "Contact Us",
    href: `tel:${CONTACT.tel}`,
  },
};

/* ==========================================
   WHY CHOOSE US PAGE
========================================== */
export const WHY_PAGE = {
  hero: {
    image: "/images/why-hero.png",
    alt: "Cranes and towers under construction in Dubai",
    titleTop: "Your Vision",
    titleAccent: "Our Commitment",
    text: "Your Trusted Project Management Partner in UAE.",
  },

  intro: {
    eyebrow: "Why Choose Us",
    title: "Excellence In Every Project",
    text: "We combine expertise, innovation, and precision to deliver projects that exceed expectations. From planning to completion, we ensure quality, transparency, and seamless project execution at every stage.",
  },

  reasons: [
    { icon: ShieldCheck, title: "Commitment to Quality", text: "Delivering excellence in every project we undertake." },
    { icon: Clock, title: "On-Time Delivery", text: "Meeting deadlines with professional efficiency." },
    { icon: Users, title: "Expert Team", text: "A skilled team of professionals at your service." },
    { icon: Handshake, title: "Transparent Process", text: "Clear communication and honest collaboration." },
    { icon: Settings, title: "Tailored Solutions", text: "Customized solutions to meet your unique needs." },
    { icon: MapPin, title: "Local Expertise", text: "In-depth knowledge of UAE's construction landscape." },
  ],

  trust: {
    image: "/images/why-trust.png",
    alt: "Abu Dhabi skyline and waterfront at dusk",
    title: "Building Trust, Creating Value",
    text: "With a focus on quality, innovation and client satisfaction, we are committed to turning your vision into reality.",
    button: "Get in Touch",
    href: `tel:${CONTACT.tel}`,
  },
};