import { aiCapabilities } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const pipeline = ["IDEA", "DESIGN", "CLAUDE CODE", "FRONTEND", "ITERATE"];

export function AIWorkflow() {
	return (
		<section className="border-t border-border bg-surface-muted/40 py-20 lg:py-28">
			<Container>
				<SectionHeading
					eyebrow="06 / AI + Product Development"
					title="AI accelerates the work. Design judgment drives it."
					description="I use AI-assisted development tools as part of my product workflow - not as a replacement for design thinking, but as a way to move faster from exploration to execution."
				/>

				<Reveal delay={0.1}>
					<div className="mt-12 rounded-md border border-border bg-surface p-6 sm:p-8">
						<p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
							workflow / pipeline
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-y-3">
							{pipeline.map((stage, index) => (
								<div key={stage} className="flex items-center">
									<span className="font-mono text-sm uppercase tracking-[0.1em] text-text-primary">
										{stage}
									</span>
									{index < pipeline.length - 1 && (
										<span
											aria-hidden="true"
											className="mx-3 text-text-tertiary sm:mx-5"
										>
											→
										</span>
									)}
								</div>
							))}
						</div>
						<p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-accent">
							AI makes the workflow faster. Experience makes the
							decisions better.
						</p>
					</div>
				</Reveal>

				<Reveal delay={0.18}>
					<div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
						{aiCapabilities.map((capability) => (
							<div
								key={capability.label}
								className="bg-surface p-6"
							>
								<h3 className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-accent">
									{capability.label}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-text-secondary">
									{capability.detail}
								</p>
							</div>
						))}
					</div>
				</Reveal>
			</Container>
		</section>
	);
}
