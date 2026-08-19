import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { creativeWorkJsonLd } from "@/lib/seo";

interface WorkPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: WorkPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) return {};

	const url = `${siteConfig.url}/work/${project.slug}`;

	return {
		title: `${project.name} - ${project.category}`,
		description: project.description,
		alternates: { canonical: url },
		openGraph: {
			type: "website",
			url,
			siteName: siteConfig.name,
			title: `${project.name} - ${project.category}`,
			description: project.description,
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.name} - ${project.category}`,
			description: project.description,
		},
	};
}

export default async function WorkPage({ params }: WorkPageProps) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) notFound();

	const { next } = getAdjacentProjects(slug);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: creativeWorkJsonLd(project),
				}}
			/>
			<CaseStudy project={project} nextProject={next} />
		</>
	);
}
