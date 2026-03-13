"use client";

import { motion } from "framer-motion";
import { problemStats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

function ProblemStatCard({
  stat,
  index,
}: {
  stat: (typeof problemStats)[number];
  index: number;
}) {
  const { count, ref } = useCountUp(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-dark p-5 sm:p-8 text-center"
    >
      <div className="stat-number text-3xl sm:text-5xl lg:text-6xl mb-4">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <p className="text-white/80 text-base leading-relaxed mb-4">
        {stat.label}
      </p>
      {stat.source && (
        <p className="text-mono text-xs text-bm-gray-400/60">
          Source: {stat.source}
        </p>
      )}
    </motion.div>
  );
}

export default function ProblemStats() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bm-blue-deep px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-label text-bm-cyan tracking-[0.2em] block mb-4">
            The Problem
          </span>
          <h2 className="text-display text-white text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            The Marketing Industry Has a{" "}
            <span className="text-editorial text-bm-cyan">Trust Problem</span>
          </h2>
          <p className="text-bm-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most small businesses know they need marketing. The problem is that
            the industry is full of agencies that overpromise, underdeliver, and
            lock you into contracts you can&apos;t escape. Here are the numbers
            they don&apos;t want you to see.
          </p>
        </motion.div>

        {/* Stat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemStats.map((stat, i) => (
            <ProblemStatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-bm-gray-400/70 text-sm mt-10 max-w-xl mx-auto"
        >
          These aren&apos;t scare tactics. These are published industry
          statistics. The system is broken — and it&apos;s costing small
          business owners thousands of dollars and months of wasted time.
        </motion.p>
      </div>
    </section>
  );
}
