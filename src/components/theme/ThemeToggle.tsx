"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
			className="inline-flex size-10 items-center justify-center rounded-sm border border-bg-3 text-fg-2 transition-colors hover:border-accent-0 hover:text-accent-0"
		>
			{isDark ? (
				<Sun
					className="size-[18px]"
					strokeWidth={1.5}
					aria-hidden="true"
				/>
			) : (
				<Moon
					className="size-[18px]"
					strokeWidth={1.5}
					aria-hidden="true"
				/>
			)}
		</button>
	);
}
