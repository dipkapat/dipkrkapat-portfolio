"use client";

import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export function Technology() {
	return (
		<section className="py-28 lg:py-40">
			<Container>
				<Reveal>
					<SectionHeading
						title="The tools behind the work."
						description="Capability demonstrated through work first - the stack that carries it second."
					/>
				</Reveal>
				<Reveal delay={0.1} y={30}>
					<Stagger
						className="mt-14 grid gap-6 md:grid-cols-2"
						stagger={0.1}
						direction="up"
					>
						{skillGroups.map((group) => (
							<StaggerItem
								key={group.category}
								direction="up"
								className="h-full"
							>
								<div className="rounded-2xl border border-bg-3 bg-bg-2 p-1.5 h-full transition-all duration-300 ease-out hover:border-accent/30 hover:shadow-card-hover">
									<div className="rounded-[20px] bg-bg-0 p-6 sm:p-8 flex flex-col h-full">
										<p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
											{group.category}
										</p>
										<p className="mt-4 text-base leading-loose text-fg-0">
											{group.items.join(" · ")}
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
