"use client";

import { experiencePhases } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function Experience() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id="experience"
			className="border-t border-bg-3 bg-bg-1/40 py-28 lg:py-40"
		>
			<Container>
				<Reveal>
					<SectionHeading
						eyebrow="Career"
						title="18+ years of translating product thinking into better interfaces."
						description="My career started with web design and evolved into product UI/UX, responsive interface development, and frontend engineering for SaaS and enterprise systems."
					/>
				</Reveal>

				<Reveal delay={0.1} y={30}>
					<div className="mt-14 space-y-0">
						{experiencePhases.map((phase, index) => (
							<motion.div
								key={phase.period}
								className="grid gap-3 border-t border-bg-3 py-10 sm:grid-cols-12 sm:gap-8"
								initial={
									reduceMotion
										? false
										: { opacity: 0, y: 20 }
								}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<div className="sm:col-span-3">
									<span className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-accent">
										{phase.period}
									</span>
								</div>
								<div className="sm:col-span-9">
									<h3 className="text-xl font-medium tracking-tight text-fg-0">
										{phase.title}
									</h3>
									<p className="mt-2 text-base leading-relaxed text-fg-1">
										{phase.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</Reveal>

				<Reveal delay={0.2} y={30}>
					<motion.div
						className="mt-12 rounded-2xl border border-bg-3 bg-bg-2 p-1.5"
						initial={
							reduceMotion
								? false
								: { opacity: 0, y: 20 }
						}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
							<p className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
								Last Role
							</p>
							<div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
								<h3 className="text-lg font-medium tracking-tight text-fg-0">
									Senior Frontend Engineer &amp; Product UI/UX
									Specialist
								</h3>
								<span className="text-fg-2">·</span>
								<p className="font-mono text-sm uppercase tracking-[0.08em] text-fg-1">
									Adhyan Digital Pvt. Ltd.
								</p>
							</div>
							<p className="mt-3 text-sm leading-relaxed text-fg-1">
								<span className="font-bold">
									August 2020 – April 2026 :
								</span>{" "}
								25+ modules for an enterprise School Automation
								platform - Figma-to-React pipeline, design
								systems, and Framer Motion micro-interactions.
							</p>
						</div>
					</motion.div>
				</Reveal>
			</Container>
		</section>
	);
}
