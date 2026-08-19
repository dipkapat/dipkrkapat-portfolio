import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Dip Kumar Kapat",
  role: "Senior UI/UX Designer · Frontend Product Builder",
  roleShort: "UI/UX · Frontend · AI",
  email: "dipkrkapat@protonmail.com",
  phone: ["+91 99033 59927", "+91 74396 55501"],
  location: "Kolkata, West Bengal, India",
  url: "https://dipkrkapat.com",
  status: "Currently building at Adhyan Digital",
  description:
    "Senior UI/UX Designer and Frontend Product Builder with 18+ years of experience. I design complex digital products and build the production-ready interfaces that bring them to life — from SaaS dashboards and AI tools to enterprise systems and marketing experiences.",
  resumeUrl: "/resume/Dip-Kumar-Kapat-Resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    ariaLabel: `Email ${siteConfig.name}`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dipkrkapat",
    ariaLabel: `${siteConfig.name} on LinkedIn`,
  },
  {
    label: "GitHub",
    href: "https://github.com/dipkrkapat",
    ariaLabel: `${siteConfig.name} on GitHub`,
  },
];

export const contactInquiryTypes = [
  "Full-time role",
  "Freelance — UI/UX design",
  "Freelance — Frontend development",
  "Freelance — Design-to-code",
  "Project collaboration",
  "Other",
] as const;
