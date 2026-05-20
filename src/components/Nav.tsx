"use client";

import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "./PageContainer";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <PageContainer className="flex items-center justify-between py-5">
        <Link href="/" className="block leading-none">
          <Image
            src="/hackhome-logo.png"
            alt="HackHome"
            width={140}
            height={56}
            className="h-10 w-auto md:h-11"
            priority
          />
        </Link>
        <Link
          href="/apply"
          className="font-clash text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Apply
        </Link>
      </PageContainer>
    </nav>
  );
}
