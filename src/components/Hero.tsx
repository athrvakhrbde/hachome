"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageContainer } from "./PageContainer";

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-border bg-background pb-24 pt-32 md:pb-32">
      <div className="hero-grid-scroll" aria-hidden />
      <div className="hero-grid-fade" aria-hidden />
      <PageContainer className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-tektur tektur-flush m-0 block text-balance text-6xl font-normal leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
        >
          build.
          <br />
          live.
          <br />
          <span className="text-accent">ship.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-16"
        >
          <Link
            href="/apply"
            className="font-clash inline-flex items-center justify-center bg-accent px-8 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Apply
          </Link>
          <a
            href="#problem"
            className="font-clash inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-white/20"
          >
            About
          </a>
        </motion.div>
      </PageContainer>
    </section>
  );
}
