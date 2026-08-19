import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Technology() {
	return (
		<section className="py-20 lg:py-28">
			<Container>
				<SectionHeading
					eyebrow="09 / Technology"
					title="The tools behind the work."
					description="Capability demonstrated through work first - the stack that carries it second."
				/>
				<Stagger
					className="mt-12 grid gap-6 md:grid-cols-2"
					stagger={0.1}
				>
					{skillGroups.map((group) => (
						<StaggerItem key={group.category}>
							<div className="rounded-md border border-border bg-surface p-6 sm:p-8">
								<h3 className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
									{group.category}
								</h3>
								<p className="mt-4 text-base leading-loose text-text-primary">
									{group.items.join(" · ")}
								</p>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</Container>
		</section>
	);
}
