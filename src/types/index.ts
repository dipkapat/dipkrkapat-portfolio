export type ProjectCategory =
  | "SaaS"
  | "AI"
  | "FinTech"
  | "Web Application"
  | "Website";

export type ProjectFilter = "All" | "UI/UX" | "Frontend" | "Web Applications" | "Websites";

export interface CaseStudySection {
  title: string;
  body: string[];
}

export interface Project {
  slug: string;
  index: string;
  name: string;
  label: string;
  category: "SaaS" | "AI" | "FinTech" | "Brand" | "Enterprise";
  filters: Exclude<ProjectFilter, "All">[];
  title: string;
  description: string;
  role: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  highlight: string;
  problem: string;
  users: string;
  productStructure: string[];
  uxDecisions: string[];
  uiSystem: string[];
  interaction: string[];
  frontend: string[];
  result: string;
  reflection: string;
  featured?: boolean;
}

export interface ExperiencePhase {
  period: string;
  title: string;
  description: string;
}

export interface ExperienceRole {
  period: string;
  company: string;
  title: string;
  note: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Service {
  index: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  person: string;
  position: string;
  company: string;
}

export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Principle {
  index: string;
  title: string;
  description: string;
}
