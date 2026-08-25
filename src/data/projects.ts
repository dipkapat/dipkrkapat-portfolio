import type { Project } from "@/types";

export const projects: Project[] = [
	{
		slug: "saints-paradise",
		index: "01",
		name: "Saint's Paradise Cafeteria",
		label: "Hospitality · Brand Experience",
		category: "Brand",
		featured: false,
		filters: ["UI/UX", "Frontend", "Websites"],
		title: "A digital experience designed to create desire before the first visit.",
		description:
			"A premium restaurant website designed around atmosphere, visual storytelling, menu discovery, and immediate conversion. The experience combines bold typography, immersive imagery, interactive content, strong calls to action, and a clear visual hierarchy to turn a simple restaurant website into a memorable brand experience.",
		role: ["UI/UX Design", "Visual Direction", "Frontend Development"],
		stack: ["React", "Next.js", "Tailwind CSS", "Motion"],
		liveUrl: "https://saints-paradise-cafeteria.vercel.app/",
		image: {
			src: "/work/Saints-Paradise-Cafeteria.png",
			alt: "Saint's Paradise Cafeteria brand website preview",
			width: 1280,
			height: 800,
		},
		highlight:
			"Designing digital experiences that make people want to act.",
		problem:
			"A soul food institution needed a website that carried its atmosphere and story - not just a menu. The site had to create desire before the first visit and move visitors toward immediate action.",
		users: "New and returning diners exploring the restaurant's identity, signature dishes, and menu, with strong visit intent.",
		productStructure: [
			"Brand storytelling through the hero and narrative sections",
			"Hero experience that establishes atmosphere immediately",
			"Food and menu presentation that sells the dishes",
			"Interactive plate builder for custom orders",
			"Location, hours, and immediate call-to-action paths",
		],
		uxDecisions: [
			"Led with atmosphere: imagery, typography, and motion carry the brand voice",
			"Designed menu discovery around desire, not just information",
			"Made the path to visiting (location, ordering, hours) fast and obvious",
			"Used bold typography as a brand element rather than decoration",
		],
		uiSystem: [
			"Photography-led layout with typographic contrast",
			"Consistent color and type treatment across sections",
			"Motion that supports scroll-driven storytelling",
			"Responsive behavior tuned for mobile-first dining decisions",
		],
		interaction: [
			"Scroll-driven narrative reveals that build atmosphere progressively",
			"Interactive plate builder with clear feedback",
			"Strong, frequent calls to action without pressure",
			"Fast access to location and hours on mobile",
		],
		frontend: [
			"React + Next.js implementation",
			"Tailwind CSS for the visual system",
			"Motion for purposeful scroll and hover interactions",
			"Image optimization for a photography-led experience",
		],
		result: "A high-impact marketing and brand experience that proves the ability to move from enterprise software to brand-led storytelling without losing craft.",
		reflection:
			"Future work: online ordering integration, a reservations flow, and a deeper accessibility pass on the immersive hero interactions.",
	},
	{
		slug: "loanlens",
		index: "02",
		name: "LoanLens",
		label: "FinTech · Interactive Data Experience",
		category: "FinTech",
		featured: false,
		filters: ["UI/UX", "Frontend", "Web Applications"],
		title: "Turning financial complexity into an understandable experience.",
		description:
			"LoanLens is an interactive loan calculator designed to help users explore borrowing scenarios, repayment options, historical rates, and country-specific financial parameters. The experience focuses on progressive disclosure, clear data presentation, and reducing cognitive load when making financial decisions.",
		role: ["UI/UX Design", "Interaction Design", "Frontend Development"],
		stack: ["React", "Next.js", "Tailwind CSS", "Data Visualization"],
		liveUrl: "https://loanlens-theta.vercel.app/",
		image: {
			src: "/work/Loan-Calculator.png",
			alt: "LoanLens multi-country loan calculator interface preview",
			width: 1280,
			height: 800,
		},
		highlight:
			"Making complex financial information easier to understand and act on.",
		problem:
			"Financial decisions are high-stakes and full of jargon. A loan calculator handling multiple loan types, countries, and repayment strategies risks overwhelming users with forms and numbers. The product needed to make complex financial information easy to explore and act on.",
		users: "Borrowers comparing loan scenarios across countries and repayment strategies, plus anyone trying to understand the true cost of a loan.",
		productStructure: [
			"Multi-type loan input with progressive disclosure",
			"Country-specific parameters and information",
			"Real-time payment calculations",
			"Historical rate charts and data visualization",
			"Repayment strategy comparison and scenario exploration",
		],
		uxDecisions: [
			"Used progressive disclosure so complex forms never appear all at once",
			"Presented results with clear hierarchy: the headline answer first, detail on demand",
			"Visualized historical data so users see context, not just a single number",
			"Reduced cognitive load by grouping inputs and labeling everything in plain language",
		],
		uiSystem: [
			"Clean form and input system with strong focus states",
			"Data visualization components with accessible color",
			"Consistent number and currency formatting",
			"Responsive layout that keeps the calculator usable on mobile",
		],
		interaction: [
			"Real-time recalculation as inputs change",
			"Clear state transitions between input, calculating, and results",
			"Scenario comparison without forcing complex navigation",
			"Accessible form controls and validation feedback",
		],
		frontend: [
			"React + Next.js with typed, component-based structure",
			"Data visualization for historical rate charts and payment breakdowns",
			"Tailwind CSS for a precise, consistent visual system",
			"Careful state management for interactive calculations",
		],
		result: "A data-heavy interactive product that demonstrates the ability to design complex forms, financial calculations, and visualizations without the interface collapsing under its own complexity.",
		reflection:
			"Next steps: localized currency formatting per country, downloadable scenario reports, and a usability pass on the mobile calculator flow.",
	},
	{
		slug: "vetbook",
		index: "03",
		name: "VetBook",
		label: "SaaS · Workflow Management",
		category: "SaaS",
		featured: false,
		filters: ["UI/UX", "Frontend"],
		title: "Designing operational software around real-world workflows.",
		description:
			"A veterinary appointment and practice-management interface designed to bring scheduling, patient workflows, activity, revenue, and operational information into a single experience. The design prioritizes fast navigation, clear information hierarchy, and efficient day-to-day task completion.",
		role: ["Product UI/UX", "Frontend Development"],
		stack: ["React", "Next.js", "Tailwind CSS", "Component-based UI"],
		liveUrl: "https://veterinary-appointment-booking.vercel.app/",
		image: {
			src: "/work/VetBook-Veterinary-Practice-Management.png",
			alt: "VetBook veterinary practice management interface preview",
			width: 1280,
			height: 800,
		},
		highlight:
			"Designing operational software where every interaction matters.",
		problem:
			"A veterinary clinic runs on its appointments: queues, check-ins, patient records, and revenue all depend on staff completing tasks quickly. The platform needed to bring scheduling, patient workflows, and operational data into a single legible experience that stays calm under a real workday.",
		users: "Clinic receptionists, veterinarians, and practice managers who rely on the system for appointment handling and day-to-day operations.",
		productStructure: [
			"Dashboard for the day's operational overview",
			"Appointment management with queue and check-in states",
			"Customer and patient workflow pages",
			"Revenue and activity tracking",
			"Doctor scheduling views",
		],
		uxDecisions: [
			"Designed around task completion speed: the most-used actions are reachable in one or two steps",
			"Clear visual states for appointment lifecycle (scheduled, checked in, in progress, complete)",
			"Information hierarchy that surfaces today's work above historical data",
			"A calm, clinical visual language that stays legible under daily use",
		],
		uiSystem: [
			"Consistent component system across dashboard, tables, forms, and schedules",
			"Status-driven color used sparingly and consistently",
			"Responsive layouts that keep queues usable on smaller screens",
			"Thoughtful empty, loading, and error states",
		],
		interaction: [
			"Fast appointment creation and rescheduling flows",
			"Clear feedback on every state change",
			"Keyboard-friendly navigation for high-frequency tasks",
			"Touch targets sized for real-world, possibly rushed, use",
		],
		frontend: [
			"React + Next.js component-driven implementation",
			"Tailwind CSS for a shared, scalable design system",
			"Typed data models for patients, appointments, and staff",
			"Responsive behavior across clinic desktop and mobile devices",
		],
		result: "A domain-specific SaaS interface that proves the ability to design for complex operational workflows - scheduling, states, revenue, and activity - without sacrificing clarity.",
		reflection:
			"With more time I would run structured usability sessions with reception staff and iterate on the most frequent task paths, then add configurable queue views per clinic.",
	},
	{
		slug: "pulsemetrics",
		index: "04",
		name: "PulseMetrics",
		label: "B2B SaaS · Analytics Dashboard",
		category: "SaaS",
		featured: true,
		filters: ["UI/UX", "Frontend"],
		title: "Making complex business data easier to understand.",
		description:
			"PulseMetrics is a B2B analytics dashboard designed around clarity, information hierarchy, and efficient data exploration. The interface combines dashboards, charts, tables, filters, date ranges, responsive layouts, and meaningful interaction states into a cohesive SaaS experience.",
		role: ["UI/UX Design", "Frontend Development", "Interaction Design"],
		stack: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"shadcn/ui",
			"Recharts",
			"Framer Motion",
		],
		liveUrl: "https://pulse-metrics-beta.vercel.app/",
		image: {
			src: "/work/PulseMetrics.png",
			alt: "PulseMetrics analytics dashboard interface preview",
			width: 1280,
			height: 800,
		},
		highlight:
			"Data-dense enterprise dashboard patterns for a B2B SaaS analytics product.",
		problem:
			"Business users need to answer questions about user activity, revenue, and KPIs - but analytics products often bury that signal under dense tables and scattered widgets. PulseMetrics needed an interface that made a large volume of business data feel structured, scannable, and actionable.",
		users: "Product managers, growth leads, and business operators who review SaaS metrics daily and need fast, reliable answers about performance.",
		productStructure: [
			"Dashboard overview with headline KPIs and trend context",
			"Analytics views organized around questions, not just charts",
			"Data tables with filtering, sorting, and pagination",
			"Date-range controls and comparison states",
			"Empty, loading, and error states throughout the interface",
		],
		uxDecisions: [
			"Established a clear information hierarchy: overview first, then drill-down views",
			"Designed reusable chart and table components to keep the system consistent",
			"Prioritized the most frequent user questions in the default dashboard view",
			"Used restrained color so data, not decoration, carries the visual weight",
		],
		uiSystem: [
			"Component-based UI built with shadcn/ui primitives and Tailwind CSS",
			"A consistent table system with row states, density, and focus treatment",
			"Responsive layout that reflows from dense desktop views to mobile summaries",
			"Framer Motion used only for meaningful feedback and transitions",
		],
		interaction: [
			"Hover states on charts and tables that reveal detail without disrupting layout",
			"Filter and date-range changes with clear visual feedback",
			"Skeleton states during data loading to prevent layout shift",
			"Keyboard-navigable filters, tables, and controls",
		],
		frontend: [
			"React + Next.js with a typed, component-driven architecture",
			"Recharts for interactive data visualization",
			"Tailwind CSS tokens for a consistent, scalable design system",
			"Responsive behavior tuned across laptop, tablet, and mobile",
		],
		result: "A cohesive B2B SaaS dashboard demonstrating the specific UI patterns analytics products demand: dense data presentation, role-aware views, and interactions that never get in the way of reading data.",
		reflection:
			"Given the chance to iterate, I would deepen the comparison features - time-series overlays and cohort views - and add a full user-testing pass to validate the hierarchy against real analyst workflows.",
	},
	{
		slug: "ai-content-studio",
		index: "05",
		name: "AI Content Studio",
		label: "AI Product · Conversational Interface",
		category: "AI",
		featured: false,
		filters: ["UI/UX", "Frontend"],
		title: "Designing a clearer interface for human–AI collaboration.",
		description:
			"An AI-powered content generation experience built around conversational interaction, streaming responses, workspace history, artifact previews, model settings, and usage visibility. The focus was on making an inherently complex AI workflow feel simple, predictable, and easy to navigate.",
		role: ["Product UI/UX", "Interaction Design", "Frontend Development"],
		stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
		liveUrl: "https://ai-content-generation-tool-iota.vercel.app/",
		image: {
			src: "/work/AI-Content-Studio.png",
			alt: "AI Content Studio conversational interface preview",
			width: 1280,
			height: 800,
		},
		highlight: "Designing the interface between humans and AI.",
		problem:
			"AI content tools are powerful but often unpredictable: streaming output, generated artifacts, model settings, and usage limits can overwhelm a new user. The product needed a conversational experience that made the AI workflow feel controllable and easy to understand.",
		users: "Content teams and individual creators who generate, refine, and manage written content with AI and need to stay in control of the process.",
		productStructure: [
			"Conversational interface as the primary working surface",
			"Streaming response rendering with clear progress feedback",
			"Artifact preview panel with multiple view modes",
			"Workspace history for managing past conversations",
			"Settings and controls for model choice and generation behavior",
			"Usage tracking to keep limits visible and predictable",
		],
		uxDecisions: [
			"Designed the chat surface around predictable states: idle, generating, streaming, complete",
			"Made artifacts previewable in context rather than in a separate modal",
			"Kept model settings accessible but visually secondary to the core flow",
			"Showed usage clearly so the product never surprises the user",
		],
		uiSystem: [
			"A calm, component-driven UI built with shadcn/ui and Tailwind CSS",
			"Consistent message, artifact, and control components",
			"Responsive layout that works across desktop and mobile",
			"Framer Motion transitions that reinforce state changes",
		],
		interaction: [
			"Streaming responses that update smoothly without layout jump",
			"Conversation history with fast navigation and recovery",
			"Clear loading and error states for generation requests",
			"Touch-friendly controls for mobile use",
		],
		frontend: [
			"React + Next.js with TypeScript for type-safe state and data flow",
			"Streaming response handling with careful UI state management",
			"Tailwind CSS tokens driving the visual system",
			"Modular component boundaries for chat, artifacts, and settings",
		],
		result: "A polished conversational AI product interface that demonstrates fluency with the interaction patterns becoming table stakes in AI tools - streaming, artifacts, history, and control.",
		reflection:
			"Next iteration: richer artifact editing flows and deeper personalization of model presets, plus accessibility testing of the live-updating regions with screen readers.",
	},
];

export const enterpriseProject = {
	slug: "enterprise-erp",
	name: "School Automation ERP",
	label: "Enterprise · Product Ecosystem",
	category: "Enterprise",
	title: "25+ Modules. One Product Ecosystem.",
	description:
		"For a School Automation ERP platform, I designed and built 25+ interconnected modules -academics, attendance, fees, payroll, transport, library, hostel, admissions, and more -as a single coherent product on a continuous delivery cycle.",
	role: [
		"Product Design",
		"UI/UX Design",
		"Frontend Architecture",
		"Design Systems",
	],
	stack: [
		"React",
		"Next.js",
		"Tailwind CSS",
		"shadcn/ui",
		"Flowbite",
		"Framer Motion",
	],
	liveUrl: "#",
	image: {
		src: "/work/Enterprise-ERP-Dashboard.png",
		alt: "School Automation ERP dashboard showing multiple interconnected modules",
		width: 1280,
		height: 800,
	},
};

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
	previous: Project | null;
	next: Project | null;
} {
	const index = projects.findIndex((project) => project.slug === slug);
	if (index === -1) return { previous: null, next: null };
	return {
		previous: index > 0 ? projects[index - 1] : null,
		next: index < projects.length - 1 ? projects[index + 1] : null,
	};
}
