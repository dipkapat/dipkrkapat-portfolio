"use client";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
	return (
		<section
			id="contact"
			className="border-t border-bg-3 bg-bg-1/40 py-28 lg:py-40"
		>
			<Container>
				<div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
					<div className="min-w-0 lg:col-span-5">
						<Reveal>
							<SectionHeading
								eyebrow="Get in Touch"
								title="Need a product interface that is clear, usable, and ready to ship?"
								description="I help teams move from UX ambiguity and Figma to a production-ready frontend -combining product thinking, interface design, and React/Next.js execution in one workflow."
							/>
						</Reveal>
						<Reveal delay={0.1} y={30}>
							<div className="mt-10 space-y-5">
								<div>
									<p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
										Email
									</p>
									<a
										href={`mailto:${siteConfig.email}`}
										className="mt-1 block text-lg font-medium text-fg-0 underline-offset-4 transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent hover:underline"
									>
										{siteConfig.email}
									</a>
								</div>
								<div>
									<p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
										Location
									</p>
									<p className="mt-1 text-base text-fg-1">
										{siteConfig.location}
									</p>
								</div>
								<div>
									<p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
										Availability
									</p>
									<p className="mt-1 text-base text-fg-1">
										{siteConfig.status}
									</p>
								</div>
							</div>
						</Reveal>
					</div>

					<div className="min-w-0 lg:col-span-7">
						<Reveal delay={0.1} y={30}>
							<ContactForm />
						</Reveal>
					</div>
				</div>
			</Container>
		</section>
	);
}
