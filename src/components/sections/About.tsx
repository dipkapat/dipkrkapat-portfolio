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
							<div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-accent/30 bg-surface">
								<img
									src="/images/profile1.jpg"
									alt="Dip Kumar Kapat — Senior UI/UX Designer & Frontend Product Builder"
									className="size-full object-cover transition-transform duration-700 ease-out hover:scale-105"
								/>
								<div className="absolute inset-0 border border-accent/20 pointer-events-none" aria-hidden="true" />
							</div>
						</Reveal>
					</div>
				</div>
			</Container>
		</section>
	);
}
