import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Enterprise } from "@/components/sections/Enterprise";
import { DesignToCode } from "@/components/sections/DesignToCode";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Principles } from "@/components/sections/Principles";
import { Experience } from "@/components/sections/Experience";
import { Technology } from "@/components/sections/Technology";
import { About } from "@/components/sections/About";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhatIDo />
      <SelectedWork />
      <Enterprise />
      <DesignToCode />
      <AIWorkflow />
      <Principles />
      <Experience />
      <Technology />
      <About />
      <WhyWorkWithMe />
      <Testimonials />
      <Contact />
      <FinalCTA />
    </>
  );
}