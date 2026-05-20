"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

type ApplyFormData = {
  name: string;
  email: string;
  social: string;
  shipped: string;
  why: string;
};

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormData>();

  const onSubmit = async (data: ApplyFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-border bg-white/[0.02] px-4 py-3 font-clash text-sm text-foreground placeholder:text-muted/60 backdrop-blur-sm transition-colors focus:border-accent focus:outline-none";

  return (
    <AnimatedSection className="py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="07 — Apply"
          headline="Rolling admissions."
          subhead="We read every application. Short answers. No pitch deck required."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 max-w-xl space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={inputClass}
              {...register("name", { required: "Required" })}
            />
            {errors.name && (
              <p className="mt-1 font-clash text-xs text-accent">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={inputClass}
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 font-clash text-xs text-accent">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="social" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Twitter / LinkedIn
            </label>
            <input
              id="social"
              type="url"
              placeholder="https://"
              className={inputClass}
              {...register("social", { required: "Required" })}
            />
            {errors.social && (
              <p className="mt-1 font-clash text-xs text-accent">{errors.social.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shipped" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              What have you shipped in the last 90 days?
            </label>
            <textarea
              id="shipped"
              rows={4}
              className={`${inputClass} resize-y`}
              {...register("shipped", { required: "Required" })}
            />
            {errors.shipped && (
              <p className="mt-1 font-clash text-xs text-accent">{errors.shipped.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="why" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Why HackHome, why now?
            </label>
            <textarea
              id="why"
              rows={4}
              className={`${inputClass} resize-y`}
              {...register("why", { required: "Required" })}
            />
            {errors.why && (
              <p className="mt-1 font-clash text-xs text-accent">{errors.why.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="font-clash w-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "loading" ? "Submitting…" : "Submit Application"}
          </button>

          <p className="font-clash text-sm text-muted">
            <a href="/" className="text-accent transition-opacity hover:opacity-80">
              ← Back to home
            </a>
          </p>

          {status === "success" && (
            <p className="font-clash text-sm text-accent">
              Application received. We reply to everyone who applies.
            </p>
          )}

          {status === "error" && (
            <p className="font-clash text-sm text-accent">
              Something went wrong. Try again or email hello@hackhome.in.
            </p>
          )}

          <div className="font-clash space-y-2 text-sm text-muted">
            <p>Rolling admissions. Decisions within two weeks.</p>
            <p>Some spots available via volunteer labor in lieu of fees.</p>
            <p>We reply to everyone who applies.</p>
          </div>
        </form>
      </PageContainer>
    </AnimatedSection>
  );
}
