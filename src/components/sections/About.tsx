"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function About() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id="about"
			className="border-t border-bg-3 bg-bg-1/40 py-28 lg:py-40"
		>
			<Container>
				<div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-start">
					<div className="min-w-0 lg:col-span-7">
						<Reveal>
							<SectionHeading
								title={
									<>
										I started with websites.{" "}
										<span className="font-serif font-normal italic text-fg-1">
											I ended up building products.
										</span>
									</>
								}
							/>
						</Reveal>
						<Reveal delay={0.1} y={30}>
							<div className="mt-10 space-y-5 text-base leading-relaxed text-fg-1">
								<p>
									I have spent more than 18 years designing
									and building for the web. What started with
									visual interface work evolved into product
									UI/UX, frontend engineering, and the craft
									of shipping usable digital products at
									scale.
								</p>
								<p>
									Over the years, I have worked across product
									design, prototyping, design systems,
									frontend implementation, and enterprise
									product work where clarity and execution
									matter just as much as visual polish.
								</p>
								<p>
									Today, I bring those disciplines together:
									designing product experiences and building
									the interfaces that make them real in React,
									Next.js, and production-ready frontend
									systems.
								</p>
								<p className="font-medium text-fg-0">
									I don&apos;t design in isolation from
									implementation. I think in flows, states,
									and systems, then build the UI that makes
									the product feel clear and trustworthy.
								</p>
								<p className="text-fg-1">
									My current focus sits at the intersection of
									product UI/UX, frontend engineering, and AI
									workflow design - helping teams ship
									smarter, cleaner digital experiences.
								</p>
							</div>
						</Reveal>
					</div>

					<div className="min-w-0 lg:col-span-5">
						<Reveal delay={0.1} y={30}>
							<motion.div
								className="w-full h-[550px] relative aspect-[4/5] rounded-2xl border border-bg-3 bg-bg-2 p-1.5"
								initial={
									reduceMotion
										? false
										: { opacity: 0, scale: 0.97 }
								}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.8,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<div className="relative overflow-hidden rounded-[20px] bg-surface-muted h-full w-full">
									<div className="relative overflow-hidden">
										<motion.img
											src="/images/dipkrkapat.png"
											alt="Dip Kumar Kapat - Senior Frontend Engineer & Product UI/UX Specialist"
											className="size-full object-cover transition-transform duration-700 ease-out"
											whileHover={{ scale: 1.03 }}
											initial={
												reduceMotion
													? false
													: {
															opacity: 0,
															scale: 1.05,
													  }
											}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												duration: 0.7,
												ease: [0.22, 1, 0.36, 1],
											}}
										/>
										<div
											className="absolute inset-0 border border-accent/20 pointer-events-none"
											aria-hidden="true"
										/>
									</div>
								</div>
							</motion.div>
						</Reveal>
					</div>
				</div>
			</Container>
		</section>
	);
}
