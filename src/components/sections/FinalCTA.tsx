import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-md border border-border bg-surface p-8 sm:p-14 lg:p-20">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
              Have a product to build?
            </p>
            <h2 className="mt-5 max-w-3xl font-sans text-3xl font-medium leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Let&apos;s turn the complexity into something people understand.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
              Let&apos;s design it, structure it, and ship it.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href="#contact"
                event="cta_click"
                eventPayload={{ cta: "start_conversation" }}
              >
                Start a Conversation
                <ArrowDown className="size-4 -rotate-90" strokeWidth={1.5} aria-hidden="true" />
              </Button>
              <Button
                variant="secondary"
                href={siteConfig.resumeUrl}
                event="resume_download"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}