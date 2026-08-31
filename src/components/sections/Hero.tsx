"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";

const proofPoints = [
	{ value: "18+", label: "Years of experience" },
	{ value: "25+", label: "Enterprise modules" },
	{ value: "React", label: "Next.js · TypeScript" },
	{ value: "AI", label: "Assisted development" },
];

export function Hero() {
	const reduceMotion = useReducedMotion();
	const heroRef = useRef<HTMLElement>(null);
	const mouseRef = useRef({ x: 0, y: 0 });

	// Subtle mouse parallax for depth
	useEffect(() => {
		if (reduceMotion || !heroRef.current) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = heroRef.current!.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			mouseRef.current = {
				x: (e.clientX - centerX) / rect.width,
				y: (e.clientY - centerY) / rect.height,
			};
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [reduceMotion]);

	return (
		<section
			id="top"
			ref={heroRef}
			className="relative overflow-hidden border-b border-border pb-20 pt-28 sm:pt-36 lg:pb-28 lg:pt-48 min-h-[90vh] min-h-[90dvh] flex items-center"
			style={{
				backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
				backgroundSize: "128px 96px",
			}}
		>
			{/* Subtle ambient glow */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 50% at 50% 0%, var(--accent-3) 0%, transparent 70%)",
					opacity: 0.4,
				}}
			/>

			{/* Grid pattern */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 hidden lg:block"
				style={{
					backgroundImage:
						"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
					backgroundSize: "128px 96px",
					opacity: 0.35,
				}}
			/>

			<Container className="relative">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
					{/* Left column - Content */}
					<div className="min-w-0 lg:col-span-7">
						<Reveal>
							<p className="mb-6 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
								<span
									className="inline-block size-1.5 rounded-full bg-accent animate-pulse"
									aria-hidden="true"
								/>
								Senior UI/UX Designer · Frontend Product Builder
							</p>
						</Reveal>

						<Reveal delay={0.08}>
							<h1 className="font-display font-normal text-[3rem] leading-[1.02] tracking-tight text-fg-0 sm:text-6xl lg:text-[5rem] lg:leading-[1.0] max-w-[95%]">
								I design complex digital products{" "}
								<span className="font-serif font-normal italic text-fg-1 block mt-2">
									and build the interfaces that bring them to
									life.
								</span>
							</h1>
						</Reveal>

						<Reveal delay={0.16}>
							<p className="mt-8 max-w-[52ch] text-base leading-relaxed text-fg-1 sm:text-lg lg:text-base">
								18+ years across web design, product UI/UX, and
								frontend development - combining product
								thinking, visual precision, and modern frontend
								technology to create clear, responsive,
								production-ready experiences.
							</p>
						</Reveal>

						<Reveal delay={0.24}>
							<div className="mt-10 flex flex-wrap items-center gap-4">
								<Button
									href="/#work"
									event="primary_cta_click"
									eventPayload={{ cta: "view_work" }}
									className="group relative overflow-hidden"
								>
									<span className="relative z-10">
										View Selected Work
									</span>
									<ArrowRight
										className="relative z-10 size-4 stroke-[1.5] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-[1px]"
										aria-hidden="true"
									/>
									{/* Magnetic ripple effect */}
									<span
										className="absolute inset-0 bg-accent-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
										aria-hidden="true"
									/>
								</Button>
								<Button
									variant="secondary"
									href="#contact"
									className="group"
								>
									<span className="relative z-10">
										Get in Touch
									</span>
									<ArrowUpRight
										className="relative z-10 size-4 stroke-[1.5] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-[1px]"
										aria-hidden="true"
									/>
								</Button>
							</div>
						</Reveal>

						<Reveal delay={0.32}>
							<p className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
								{siteConfig.status} · {siteConfig.location}
							</p>
						</Reveal>
					</div>

					{/* Right column - Stats grid */}
					<div className="min-w-0 lg:col-span-5">
						<Reveal delay={0.2} y={30}>
							<div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
								{proofPoints.map((point, index) => (
									<motion.div
										key={point.value}
										className="bg-surface p-5 sm:p-6"
										initial={
											reduceMotion
												? false
												: { opacity: 0, y: 20 }
										}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.5,
											delay: 0.2 + index * 0.06,
											ease: [0.22, 1, 0.36, 1],
										}}
										whileHover={{ scale: 1.01 }}
									>
										<Stat
											value={point.value}
											label={point.label}
										/>
									</motion.div>
								))}
							</div>
						</Reveal>

						<Reveal delay={0.28} y={30}>
							<div className="mt-6 flex items-center gap-4 rounded-md border border-border bg-surface px-5 py-4">
								<span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
									Design
								</span>
								<span className="text-fg-2" aria-hidden="true">
									→
								</span>
								<span className="font-mono text-xs uppercase tracking-[0.1em] text-fg-0">
									Build
								</span>
								<span className="text-fg-2" aria-hidden="true">
									→
								</span>
								<span className="font-mono text-xs uppercase tracking-[0.1em] text-fg-1">
									Refine
								</span>
								<ArrowUpRight
									className="ml-auto size-4 text-accent"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
							</div>
						</Reveal>
					</div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-2"
					initial={reduceMotion ? false : { opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 1.2,
						ease: [0.22, 1, 0.36, 1],
					}}
					aria-hidden="true"
				>
					<p className="font-mono text-[10px] uppercase tracking-[0.15em]">
						Scroll
					</p>
					<motion.div
						className="w-px h-8 bg-border"
						animate={{ scaleY: [1, 0.3, 1] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</motion.div>
			</Container>
		</section>
	);
}
