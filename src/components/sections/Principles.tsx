import { principles } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Principles() {
	return (
		<section className="py-20 lg:py-28">
			<Container>
				<SectionHeading
					eyebrow="07 / Design Principles"
					title="How I approach product design"
					description="Principles, not process pages - the judgment behind the interface."
				/>
				<Stagger
					className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
					stagger={0.08}
				>
					{principles.map((principle) => (
						<StaggerItem
							key={principle.index}
							className="bg-surface p-6"
						>
							<span className="font-mono text-xs tracking-[0.12em] text-accent">
								{principle.index}
							</span>
							<h3 className="mt-3 font-serif text-lg italic leading-snug text-text-primary">
								{principle.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-text-secondary">
								{principle.description}
							</p>
						</StaggerItem>
					))}
				</Stagger>
			</Container>
		</section>
	);
}
