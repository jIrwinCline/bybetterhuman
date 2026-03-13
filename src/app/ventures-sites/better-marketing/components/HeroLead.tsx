"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroStats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ stat }: { stat: (typeof heroStats)[number] }) {
  const { count, ref } = useCountUp(stat.value, 2200);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-label text-bm-gray-400 mt-2">{stat.label}</p>
    </div>
  );
}

const trustBadges = [
  "Google Partner",
  "Meta Business Partner",
  "100% U.S.-Based Team",
  "3,000+ Campaigns Managed",
  "$20M+ in Ad Spend Managed",
];

export default function HeroLead() {
  return (
    <section className="hero-gradient relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 lg:pt-40 lg:pb-16 flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-label text-bm-cyan tracking-[0.2em]">
            Done-For-You Ad Campaign Management
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-5xl leading-[1.05]"
        >
          Want to Market Your Business{" "}
          <span className="text-editorial text-bm-cyan">
            With No Shady Sales Process?
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg lg:text-xl text-bm-gray-400 max-w-2xl mt-8 leading-relaxed"
        >
          Get a dedicated, 100% U.S.-based team of media buyers, copywriters,
          and strategists building and managing your ad campaigns daily. No
          discovery calls. No proposals. No six-month retainers. Just results,
          reported weekly, in plain English.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-5"
        >
          <a href="#apply" className="btn-cta">
            See If You Qualify
          </a>
          <a
            href="#results"
            className="text-sm text-bm-cyan hover:text-white transition-colors sm:pt-4 flex items-center gap-1.5"
          >
            See our case studies
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 flex flex-wrap gap-x-6 gap-y-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm text-bm-gray-400/70"
            >
              <div className="w-1 h-1 rounded-full bg-bm-cyan" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero image - floating dashboard preview */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-2xl hidden lg:block pointer-events-none"
      >
        <Image
          src="/images/better-marketing/stock/hero-dashboard.jpg"
          alt=""
          width={800}
          height={533}
          className="rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-bm-blue-deep" />
      </motion.div>

      {/* Stat bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 border-t border-white/10 bg-bm-blue-dark/60 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-4">
          {heroStats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </motion.div>

      {/* Accent line at bottom */}
      <div className="accent-line" />
    </section>
  );
}
