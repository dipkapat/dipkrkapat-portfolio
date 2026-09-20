"use client";

import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export function WhatIDo() {
	return (
		<section
			id="capabilities"
			className="border-t border-bg-3 bg-bg-1/40 py-28 lg:py-40"
		>
			<Container>
				<Reveal>
					<SectionHeading
						eyebrow="Capabilities"
						title="Product thinking. Frontend execution."
						description="I help founders and product teams turn complex ideas into interfaces that are clear, scalable, and easy for users to trust."
					/>
				</Reveal>
				<Reveal delay={0.1} y={30}>
					<Stagger
						className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5"
						stagger={0.12}
						direction="up"
					>
						{services.map((service) => (
							<StaggerItem key={service.index} direction="up">
								<Card className="flex h-full flex-col" hover doubleBezel>
									<span className="font-mono text-xs tracking-[0.12em] text-accent">
										{service.index}
									</span>
									<h3 className="mt-4 text-xl font-medium tracking-tight text-fg-0">
										{service.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-fg-1">
										{service.description}
									</p>
								</Card>
							</StaggerItem>
						))}
					</Stagger>
				</Reveal>
			</Container>
		</section>
	);
}
