export const profile = {
  name: "Youssef Abdulaziz",
  monogram: "YA",
  role: "Frontend Engineer",
  ruleLabel: "— FRONTEND DEVELOPER & PRODUCT THINKER",
  tagline:
    "Vue · React · TypeScript · Product Ownership · 4+ years shipping digital products that endure scale and delight users.",
  heroHeadline: ["Crafting", "Interfaces", "That Think."],
  heroRule: "— Frontend Developer & Product Thinker",
  heroCtas: [
    { label: "View Work", href: "#work", variant: "filled" as const },
    { label: "Initiate Contact", href: "#contact", variant: "ghost" as const },
  ],
  heroMetrics: [
    { value: "+40", label: "Projects & Platforms", tone: "default" as const },
    { value: "90%", label: "Build Speedup", tone: "teal" as const },
    { value: "+20", label: "Tools Mastered", tone: "accent-light" as const },
  ],
} as const

export const experience = [
  {
    company: "Robusta Technology Group",
    role: "Frontend Engineer",
    period: "Dec 2025 — Present",
    summary:
      "Serving as frontend engineer on a production e-commerce platform, handling daily maintenance, bug fixes, and feature improvements. Working across product management, checkout, payments, profiles, and location features. Collaborating with backend, QA, and product teams to deliver enhancements while maintaining code standards and system stability.",
    href: "https://robustagroup.com",
  },
  {
    company: "Future Face",
    role: "Frontend Engineer",
    period: "May 2023 — Nov 2025",
    summary:
      "Developed key features for an enterprise-scale Vue.js app and collaborated with UI/UX and backend teams to meet business goals. Optimized performance and build tooling, speeding the build process by 90%.",
    href: "https://futureface.sa",
  },
  {
    company: "Sindion Technology",
    role: "Frontend Developer",
    period: "Jan 2023 — Apr 2023",
    summary:
      "Converted UI designs into functional SPAs using Vue.js, Bootstrap, SCSS, and Pinia, while collaborating with backend developers to ensure smooth API integrations.",
    href: "https://sindion.com",
  },
] as const

export const skillClusters = [
  {
    label: "Frontend Core",
    skills: [
      "Vue 3",
      "Vuetify",
      "TypeScript",
      "SCSS",
      "Pinia",
      "Vuex",
      "Vue Router",
    ],
  },
  {
    label: "Ecosystem",
    skills: ["React", "Next.js", "Nuxt 4", "Vite", "Axios"],
  },
  {
    label: "Backend / Infra",
    skills: ["NestJS", "Supabase", "Prisma", "PostgreSQL"],
  },
  {
    label: "Tooling & Workflow",
    skills: [
      "Turborepo",
      "pnpm",
      "Git",
      "Cursor",
      "Opencode",
      "Figma",
      "Framer",
    ],
  },
] as const

export const projects = [
  {
    name: "PixelCraft",
    tagline:
      "Built Entirely with Local AI: A Production-Ready Web Agency Website.",
    stack: ["AI", "Next.js", "Vercel"],
    status: "Shipped" as const,
    href: "https://pxlcrft.vercel.app",
    featured: true,
  },
  {
    name: "HyperOne",
    tagline:
      "E-commerce web app selling grocery, fresh food, electronics, home appliances and personal care.",
    stack: ["Vue", "TypeScript", "Pinia"],
    status: "Shipped" as const,
    href: "https://www.hyperone.com.eg",
    featured: false,
  },
  {
    name: "Impactor",
    tagline: "Strategy and Project Management Platform.",
    stack: ["Vue", "Nuxt", "Backend"],
    status: "Shipped" as const,
    href: "https://impactor.sa",
    featured: false,
  },
  {
    name: "Anma",
    tagline: "E-Learning Platform.",
    stack: ["Vue", "Nuxt", "Vue Router"],
    status: "Shipped" as const,
    href: "https://anma.edu.sa",
    featured: false,
    fullWidth: true,
  },
] as const

export const toolClusters = [
  "Cursor",
  "Opencode",
  "Vue",
  "Nuxt",
  "Figma",
  "Framer",
] as const

export const contact = {
  email: "youssufabdulaziz@gmail.com",
  github: "https://github.com/youssuf-abdulaziz",
  linkedin: "https://www.linkedin.com/in/youssef-abdulaziz",
  x: "https://x.com/SEM1COLON_",
} as const

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const
