import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
	name: "Dip Kumar Kapat",
	role: "Senior Frontend Engineer & Product UI/UX Specialist",
	roleShort: "Frontend · UI/UX · React",
	email: "dipkrkapat@protonmail.com",
	phone: ["+91 99033 59927", "+91 74396 55501"],
	location: "Kolkata, West Bengal, India",
	url: "https://dipkumarkapat.com",
	status: "Available for remote full-time, contract, and freelance work",
	description:
		"Senior Frontend Engineer and Product UI/UX Specialist with 18+ years of experience designing and building production-ready interfaces for SaaS, dashboards, and complex enterprise web applications.",
	resumeUrl: "/resume/Dip-Kumar-Kapat-Resume.pdf",
};

export const navLinks: NavLink[] = [
	{ label: "Work", href: "/#work" },
	{ label: "Services", href: "/#capabilities" },
	{ label: "Experience", href: "/#experience" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
	// {
	// 	label: "Email",
	// 	href: `mailto:${siteConfig.email}`,
	// 	ariaLabel: `Email ${siteConfig.name}`,
	// },
	{
		label: "Whatsapp",
		href: `https://wa.me/917439655501`,
		ariaLabel: `Whatsapp ${siteConfig.name}`,
	},
	// {
	// 	label: "LinkedIn",
	// 	href: "https://www.linkedin.com/in/dipkrkapat",
	// 	ariaLabel: `${siteConfig.name} on LinkedIn`,
	// },
	{
		label: "GitHub",
		href: "https://github.com/dipkapat",
		ariaLabel: `${siteConfig.name} on GitHub`,
	},
];

export const contactInquiryTypes = [
	"Full-time role",
	"Contract role",
	"Freelance - React/Next.js development",
	"Freelance - Figma → React",
	"Freelance - UI/UX design",
	"Project collaboration",
	"Other",
] as const;
