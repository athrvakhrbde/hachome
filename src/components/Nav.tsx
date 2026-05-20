"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <PageContainer className="flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="block shrink-0 leading-none" onClick={() => setOpen(false)}>
          <Image
            src="/hackhome-logo.png"
            alt="HackHome"
            width={140}
            height={56}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-clash text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/apply" className="px-6 py-2.5 text-xs">
            Apply
          </ButtonLink>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ButtonLink href="/apply" className="px-5 py-2.5 text-xs">
            Apply
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="font-clash text-sm text-muted"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </PageContainer>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <PageContainer className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-clash text-lg text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </PageContainer>
        </div>
      )}
    </nav>
  );
}
