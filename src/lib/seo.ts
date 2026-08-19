import { siteConfig } from "@/data/site";
import type { Project } from "@/types";

export function personJsonLd(): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		name: siteConfig.name,
		url: siteConfig.url,
		email: `mailto:${siteConfig.email}`,
		jobTitle: "Senior UI/UX Designer & Frontend Product Builder",
		worksFor: { "@type": "Organization", name: "Adhyan Digital Pvt. Ltd." },
		address: {
			"@type": "PostalAddress",
			addressLocality: "Kolkata",
			addressRegion: "West Bengal",
			addressCountry: "IN",
		},
		knowsAbout: [
			"UI/UX Design",
			"Frontend Development",
			"Product Design",
			"Design Systems",
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"AI-Assisted Development",
		],
	});
}

export function websiteJsonLd(): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: `${siteConfig.name} - Portfolio`,
		url: siteConfig.url,
		description: siteConfig.description,
		author: { "@type": "Person", name: siteConfig.name },
	});
}

export function creativeWorkJsonLd(project: Project): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.name,
		headline: project.title,
		description: project.description,
		url: `${siteConfig.url}/work/${project.slug}`,
		author: { "@type": "Person", name: siteConfig.name },
		about: project.category,
		keywords: project.stack.join(", "),
	});
}
