import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
	return (
		<Container className="flex min-h-[70vh] flex-col items-start justify-center py-24">
			<p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
				404
			</p>
			<h1 className="mt-4 max-w-xl font-sans text-3xl font-medium leading-tight tracking-tight text-text-primary sm:text-4xl">
				This page doesn&apos;t exist - but the work does.
			</h1>
			<p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
				The page you&apos;re looking for was moved or never existed.
				Head back to the portfolio to see the selected work.
			</p>
			<div className="mt-8">
				<Button href="/#work">Back to Selected Work</Button>
			</div>
		</Container>
	);
}
