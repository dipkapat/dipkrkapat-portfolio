import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function WhatIDo() {
	return (
		<section
			id="capabilities"
			className="border-t border-border bg-surface-muted/40 py-20 lg:py-28"
		>
			<Container>
				<SectionHeading
					eyebrow="02 / What I Do"
					title="What I bring to a product team"
					description="Three disciplines, one integrated workflow - from first wireframe to shipped interface."
				/>
				<Stagger
					className="mt-12 grid gap-6 md:grid-cols-3"
					stagger={0.12}
				>
					{services.map((service) => (
						<StaggerItem key={service.index}>
							<Card className="flex h-full flex-col" hover>
								<span className="font-mono text-xs tracking-[0.12em] text-accent">
									{service.index}
								</span>
								<h3 className="mt-4 text-xl font-medium tracking-tight text-text-primary">
									{service.title}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-text-secondary">
									{service.description}
								</p>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Container>
		</section>
	);
}
