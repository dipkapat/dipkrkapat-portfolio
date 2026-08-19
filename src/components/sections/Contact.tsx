import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface-muted/40 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="12 / Contact"
                title="Have a complex product that needs better UX and better execution?"
                description="Whether you need a new product interface, a better UX for an existing system, or a polished frontend implementation, I bring design thinking and frontend execution into the same workflow."
              />
              <div className="mt-8 space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-lg font-medium text-text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                    Location
                  </p>
                  <p className="mt-1 text-base text-text-secondary">
                    {siteConfig.location}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                    Availability
                  </p>
                  <p className="mt-1 text-base text-text-secondary">
                    {siteConfig.status}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}