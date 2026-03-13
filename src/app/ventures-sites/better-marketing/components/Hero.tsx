"use client";

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
  "No Contracts After 3 Months",
];

export default function Hero() {
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
          Want to Market Your Service,{" "}
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
          and strategists building and managing your ad campaigns — for $600/month.
          No discovery calls. No proposals. No six-month retainers. Just
          results, reported weekly, in plain English.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-5"
        >
          <a href="/checkout" className="btn-cta">
            Start Your Campaign
          </a>
          <div className="flex items-center gap-2 text-sm text-bm-gray-400 sm:pt-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-bm-green shrink-0"
            >
              <path
                d="M13.5 4.5L6 12L2.5 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>No sales calls required. Start in 48 hours.</span>
          </div>
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
