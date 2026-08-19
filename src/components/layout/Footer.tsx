import { ArrowUpRight, Mail } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-sans text-lg font-semibold tracking-tight text-text-primary">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-text-secondary">{siteConfig.role}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-tertiary">
              Designing products. Building interfaces. Exploring what&apos;s next.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-text-tertiary">
            © {year} {siteConfig.name}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
            {siteConfig.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}