import type { Service, Principle } from "@/types";

export const services: Service[] = [
	{
		index: "01",
		title: "Product UI/UX",
		description:
			"Designing interfaces that make complex products easier to understand and use. Wireframes, user flows, high-fidelity UI, responsive layouts, interaction patterns, dashboards, workflows, and product experiences.",
	},
	{
		index: "02",
		title: "Frontend Development",
		description:
			"Turning design into scalable, production-ready interfaces. React, Next.js, Tailwind CSS, component-based UI, responsive implementation, interaction states, cross-browser compatibility, and design-to-code conversion.",
	},
	{
		index: "03",
		title: "AI-Assisted Development",
		description:
			"Using AI to accelerate the path from idea to interface. Claude Code and LLM-powered workflows help explore, structure, build, refine, and iterate faster while keeping design judgment and product thinking at the center.",
	},
];

export const principles: Principle[] = [
	{
		index: "01",
		title: "Clarity before decoration.",
		description: "A good interface should make the next action obvious.",
	},
	{
		index: "02",
		title: "Systems over screens.",
		description:
			"I design reusable patterns and components rather than isolated pages.",
	},
	{
		index: "03",
		title: "Complexity should feel simple.",
		description:
			"The product can be sophisticated. The experience shouldn't feel complicated.",
	},
	{
		index: "04",
		title: "Design with implementation in mind.",
		description:
			"A strong interface needs to survive the transition from Figma to production.",
	},
	{
		index: "05",
		title: "Details create trust.",
		description:
			"States, spacing, hierarchy, feedback, transitions, and responsiveness are part of the product-not finishing touches.",
	},
];
