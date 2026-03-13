"use client";

import { motion } from "framer-motion";

const trustPoints = [
  "100% U.S.-based team",
  "3,000+ campaigns managed",
  "$20M+ in ad spend managed",
  "Live campaigns in 7 days",
  "Weekly performance reports",
  "No contracts after 3 months",
];

interface FinalCTAProps {
  ctaHref?: string;
  ctaText?: string;
  description?: string;
  tagline?: string;
  microDetails?: string[];
}

export default function FinalCTA({
  ctaHref = "/checkout",
  ctaText = "Start Your Campaign",
  description = "For $600/month, you get a full team of experienced media buyers, copywriters, and strategists working on your campaigns every single day. Your first ads go live within 7 days. And you'll see exactly where every dollar goes.",
  tagline = "No sales calls. No contracts. No BS.",
  microDetails = [
    "$600/month — everything included",
    "3-month commitment, cancel anytime after",
    "Ad spend separate, paid directly to platforms",
  ],
}: FinalCTAProps) {
  return (
    <section
      id="cta"
      className="hero-gradient relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-label text-bm-cyan tracking-[0.2em] block mb-6">
            Ready?
          </span>
          <h2 className="text-display text-white text-3xl sm:text-4xl lg:text-6xl mb-6 leading-[1.1]">
            Stop Hoping Your Marketing Works.{" "}
            <span className="text-editorial text-bm-cyan">Know It Does.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Trust grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-10"
        >
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-bm-green shrink-0"
              >
                <path
                  d="M11.5 4L5.5 10L2.5 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white/60">{point}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href={ctaHref} className="btn-cta text-lg">
            {ctaText}
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-editorial text-xl text-white/40"
        >
          {tagline}
        </motion.p>

        {/* Micro details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/30"
        >
          {microDetails.map((detail, i) => (
            <span key={i}>
              {i > 0 && <span className="hidden sm:inline mr-4">|</span>}
              {detail}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
