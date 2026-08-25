"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadgeRow } from "@/components/ui/TechBadgeRow";
import { DualCTA } from "@/components/ui/DualCTA";
import { HeroImageFrame } from "@/components/ui/HeroImageFrame";

export function EnterpriseHero() {
	return (
		<section
			id="work"
			className="py-20 lg:py-28"
			aria-labelledby="work-heading"
		>
			<Container>
				<motion.div
					className="lg:grid lg:grid-cols-12 lg:gap-12 items-start"
					initial={false}
					animate={{ opacity: 1 }}
					transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
				>
					{/* Content Column - 7/12 */}
					<motion.div
						className="pt-4 lg:pt-8 lg:col-span-7"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<SectionHeading
							eyebrow="03 / Selected Work"
							title="25+ Modules. One Product Ecosystem."
							description="For a School Automation ERP platform, I designed and built 25+ interconnected modules -academics, attendance, fees, payroll, transport, library, hostel, admissions, and more -as a single coherent product on a continuous delivery cycle."
						/>
						<TechBadgeRow
							badges={[
								"React",
								"Next.js",
								"Tailwind CSS",
								"shadcn/ui",
								"Flowbite",
								"Framer Motion",
							]}
						/>
						<DualCTA
							primary={{
								label: "Explore Enterprise ERP",
								href: "#enterprise",
							}}
							secondary={{
								label: "View Demo Projects",
								href: "#demo-projects",
								variant: "text",
							}}
						/>
					</motion.div>

					{/* Visual Column - 5/12 */}
					<motion.div
						className="relative lg:col-span-5"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.1,
						}}
					>
						<HeroImageFrame
							src="/work/Enterprise-ERP-Dashboard.png"
							alt="School Automation ERP dashboard showing multiple interconnected modules"
							className="relative h-[480px] lg:h-[560px]"
							parallax={0.15}
						/>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
}
