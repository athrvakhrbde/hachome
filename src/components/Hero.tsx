"use client";

import { motion } from "framer-motion";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-border bg-background pb-24 pt-32 md:pb-32">
      <div className="hero-grid-scroll" aria-hidden />
      <div className="hero-grid-fade" aria-hidden />
      <PageContainer className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-clash mb-8 text-xs font-medium uppercase tracking-[0.25em] text-muted"
        >
          Bangalore · Live-in workspace for builders
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-tektur tektur-flush m-0 block max-w-5xl text-balance text-6xl font-normal leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
        >
          build.
          <br />
          live.
          <br />
          <span className="text-accent">ship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="font-clash mt-10 max-w-xl text-lg leading-relaxed text-muted md:mt-12 md:text-xl"
        >
          HackHome exists so ambitious founders and hackers can go full-time on what
          they are building — with housing, meals, workspace, and peers who get it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-16"
        >
          <ButtonLink href="/apply">Apply</ButtonLink>
          <ButtonLink href="/#problem" variant="secondary">
            About
          </ButtonLink>
        </motion.div>
      </PageContainer>
    </section>
  );
}
