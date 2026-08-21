import { ArrowRight, ArrowUpRight, User } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/motion/Reveal";

const proofPoints = [
	{ value: "18+", label: "Years of experience" },
	{ value: "25+", label: "Enterprise modules" },
	{ value: "React", label: "Next.js · TypeScript" },
	{ value: "AI", label: "Assisted development" },
];

export function Hero() {
	return (
		<section
			id="top"
			className="relative overflow-hidden border-b border-border pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-48"
		>
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
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
					<div className="min-w-0 lg:col-span-7">
						<Reveal>
							<p className="mb-6 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
								<span
									className="inline-block size-1.5 rounded-full bg-accent"
									aria-hidden="true"
								/>
								Senior UI/UX Designer · Frontend Product Builder
							</p>
						</Reveal>
						<Reveal delay={0.08}>
							<h1 className="font-display font-sans text-[2.75rem] font-medium leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-[4.5rem]">
								I design complex digital products{" "}
								<span className="font-serif font-normal italic text-text-secondary">
									and build the interfaces that bring them to
									life.
								</span>
							</h1>
						</Reveal>
						<Reveal delay={0.16}>
							<p className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
								18+ years across web design, product UI/UX, and
								frontend development - combining product
								thinking, visual precision, and modern frontend
								technology to create clear, responsive,
								production-ready experiences.
							</p>
						</Reveal>
						<Reveal delay={0.24}>
							<div className="mt-9 flex flex-wrap items-center gap-4">
								<Button
									href="#work"
									event="primary_cta_click"
									eventPayload={{ cta: "view_work" }}
								>
									View Selected Work
									<ArrowRight
										className="size-4"
										strokeWidth={1.5}
										aria-hidden="true"
									/>
								</Button>
								<Button variant="secondary" href="#contact">
									Get in Touch
								</Button>
							</div>
						</Reveal>
						<Reveal delay={0.3}>
							<p className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-text-tertiary">
								{siteConfig.status} · {siteConfig.location}
							</p>
						</Reveal>
					</div>

					<div className="min-w-0 lg:col-span-5">
						<Reveal delay={0.2}>
							<div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
								{proofPoints.map((point) => (
									<div
										key={point.value}
										className="bg-surface p-5 sm:p-6"
									>
										<Stat
											value={point.value}
											label={point.label}
										/>
									</div>
								))}
							</div>
						</Reveal>
						<Reveal delay={0.28}>
							<div className="mt-6 flex items-center gap-4 rounded-md border border-border bg-surface px-5 py-4">
								<span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
									Design
								</span>
								<span
									className="text-text-tertiary"
									aria-hidden="true"
								>
									→
								</span>
								<span className="font-mono text-xs uppercase tracking-[0.1em] text-text-primary">
									Build
								</span>
								<span
									className="text-text-tertiary"
									aria-hidden="true"
								>
									→
								</span>
								<span className="font-mono text-xs uppercase tracking-[0.1em] text-text-secondary">
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
			</Container>
		</section>
	);
}
