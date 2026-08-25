"use client";

import { principles } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export function Principles() {
	return (
		<section className="py-20 lg:py-28">
			<Container>
				<Reveal>
					<SectionHeading
						eyebrow="07 / Design Principles"
						title="How I approach product design"
						description="Principles, not process pages -the judgment behind the interface."
					/>
				</Reveal>
				<Reveal delay={0.1} y={30}>
					<Stagger
						className="mt-12 grid gap-px overflow-hidden rounded-md border border-bg-3 bg-bg-3 sm:grid-cols-2 lg:grid-cols-5"
						stagger={0.08}
						direction="up"
					>
						{principles.map((principle) => (
							<StaggerItem
								key={principle.index}
								direction="up"
								className="bg-bg-0 p-6"
							>
								<span className="font-mono text-xs tracking-[0.12em] text-accent-0">
									{principle.index}
								</span>
								<h3 className="mt-3 font-serif text-lg italic leading-snug text-fg-0">
									{principle.title}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-fg-1">
									{principle.description}
								</p>
							</StaggerItem>
						))}
					</Stagger>
				</Reveal>
			</Container>
		</section>
	);
}
