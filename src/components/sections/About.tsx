import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
	return (
		<section
			id="about"
			className="border-t border-border bg-surface-muted/40 py-20 lg:py-28"
		>
			<Container>
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:col-span-7">
						<SectionHeading
							eyebrow="10 / About"
							title={
								<>
									I started with websites.{" "}
									<span className="font-serif font-normal italic text-text-secondary">
										I ended up building products.
									</span>
								</>
							}
						/>
						<div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
							<p>
								I have spent more than 18 years designing for
								the web. What started with website design and
								frontend implementation evolved into UI/UX
								design, responsive product interfaces, and
								complex enterprise applications.
							</p>
							<p>
								Over the years, I have worked across visual
								design, wireframing, prototyping, frontend
								development, design systems, and production
								interfaces.
							</p>
							<p>
								Today, I bring those disciplines together -
								designing products with a strong understanding
								of how they should work, how they should look,
								and how they should be built.
							</p>
							<p className="font-medium text-text-primary">
								I don&apos;t design in isolation from
								implementation. If I hand you a screen, I can
								also hand you the component that renders it.
							</p>
							<p className="text-text-secondary">
								My current focus is the intersection of product
								UI/UX, frontend development, and AI-assisted
								workflows.
							</p>
						</div>
					</div>

					<div className="lg:col-span-5">
						<Reveal delay={0.1}>
							<div className="flex aspect-[4/5] flex-col items-center justify-center rounded-md border border-dashed border-border-strong bg-surface text-center">
								<p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
									Portrait
								</p>
								<p className="mt-3 max-w-[220px] text-sm leading-relaxed text-text-tertiary">
									Placeholder slot - replace with a
									professional portrait in
									<span className="font-mono text-text-secondary">
										{" "}
										src/app{" "}
									</span>
									or{" "}
									<span className="font-mono text-text-secondary">
										{" "}
										public/
									</span>
									.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</Container>
		</section>
	);
}
