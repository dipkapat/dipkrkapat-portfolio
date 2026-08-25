"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Introduction() {
	return (
		<section className="py-20 lg:py-28">
			<Container>
				<Reveal>
					<SectionHeading
						eyebrow="01 / Introduction"
						title={
							<>
								Design thinking.{" "}
								<span className="font-serif font-normal italic text-fg-1">
									Frontend execution.
								</span>{" "}
								One workflow.
							</>
						}
					/>
				</Reveal>
				<Reveal delay={0.1} y={30}>
					<div className="mt-10 grid gap-8 lg:grid-cols-2">
						<p className="text-lg leading-relaxed text-fg-1">
							I work at the intersection of{" "}
							<strong className="font-medium text-fg-0">
								UI/UX design
							</strong>{" "}
							and{" "}
							<strong className="font-medium text-fg-0">
								frontend development
							</strong>
							, turning product requirements and high-fidelity
							designs into structured, responsive, and
							production-ready interfaces.
						</p>
						<div className="space-y-4 text-base leading-relaxed text-fg-1">
							<p>
								My experience spans everything from websites and
								responsive interfaces to complex enterprise
								software, dashboards, workflow systems, and
								AI-powered products.
							</p>
							<p>
								Today, I combine{" "}
								<strong className="font-medium text-fg-0">
									Figma, React, Next.js, Tailwind CSS, modern
									component libraries, and AI-assisted
									development tools
								</strong>{" "}
								to move from concept to implementation faster -
								without compromising usability or visual
								quality.
							</p>
						</div>
					</div>
				</Reveal>
			</Container>
		</section>
	);
}
