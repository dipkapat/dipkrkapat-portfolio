"use client";

import { principles } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export function Principles() {
	return (
		<section className="py-28 lg:py-40">
			<Container>
				<Reveal>
					<SectionHeading
						title="How I approach product design"
						description="Principles, not process pages - the judgment behind the interface."
					/>
				</Reveal>
				<Reveal delay={0.1} y={30}>
					<Stagger
						className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
						stagger={0.08}
						direction="up"
					>
						{principles.map((principle) => (
							<StaggerItem
								key={principle.index}
								direction="up"
							>
								<div className="flex h-full flex-col rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-300 ease-out hover:border-accent/30 hover:shadow-card-hover">
									<div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
										<span className="font-mono text-xs tracking-[0.12em] text-accent">
											{principle.index}
										</span>
										<h3 className="mt-3 font-serif text-lg italic leading-snug text-fg-0">
											{principle.title}
										</h3>
										<p className="mt-3 text-sm leading-relaxed text-fg-1">
											{principle.description}
										</p>
									</div>
								</div>
							</StaggerItem>
						))}
					</Stagger>
				</Reveal>
			</Container>
		</section>
	);
}
