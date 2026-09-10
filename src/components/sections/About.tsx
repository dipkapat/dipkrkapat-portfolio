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
			className="border-t border-bg-3 bg-bg-1/40 py-20 lg:py-28"
		>
			<Container>
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:col-span-7">
						<Reveal>
							<SectionHeading
								eyebrow="10 / About"
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
							<div className="mt-8 space-y-5 text-base leading-relaxed text-fg-1">
								<p>
									I have spent more than 18 years designing
									for the web. What started with website
									design and frontend implementation evolved
									into UI/UX design, responsive product
									interfaces, and complex enterprise
									applications.
								</p>
								<p>
									Over the years, I have worked across visual
									design, wireframing, prototyping, frontend
									development, design systems, and production
									interfaces.
								</p>
								<p>
									Today, I bring those disciplines together -
									designing products with a strong
									understanding of how they should work, how
									they should look, and how they should be
									built.
								</p>
								<p className="font-medium text-fg-0">
									I don&apos;t design in isolation from
									implementation. If I hand you a screen, I
									can also hand you the component that renders
									it.
								</p>
								<p className="text-fg-1">
									My current focus is the intersection of
									product UI/UX, frontend development, and
									AI-assisted workflows.
								</p>
							</div>
						</Reveal>
					</div>

					<div className="lg:col-span-5">
						<Reveal delay={0.1} y={30}>
							<div className="w-full h-[550px] relative aspect-[4/5] rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
								<div className="relative overflow-hidden rounded-[20px] bg-surface-muted h-full w-full">
									<div className="relative overflow-hidden">
										<motion.img
											src="/images/dipkrkapat.png"
											alt="Dip Kumar Kapat -Senior UI/UX Designer & Frontend Product Builder"
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
											className="absolute inset-0 border border-accent-0/20 pointer-events-none"
											aria-hidden="true"
										/>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</Container>
		</section>
	);
}
