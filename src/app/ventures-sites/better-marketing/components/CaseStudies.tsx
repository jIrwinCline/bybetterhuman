"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, industryCategories } from "../data/caseStudies";
import type { CaseStudy } from "../data/caseStudies";

function ResultMetric({
  metric,
  index,
}: {
  metric: CaseStudy["results"][number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-bm-gray-50 rounded-lg p-4 text-center"
    >
      <div className="stat-number text-2xl lg:text-3xl mb-1">
        {metric.value}
      </div>
      <p className="text-display text-bm-gray-900 text-sm mb-1">
        {metric.metric}
      </p>
      <p className="text-xs text-bm-gray-400">{metric.context}</p>
    </motion.div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-elevated overflow-hidden"
    >
      {/* Header strip */}
      <div className="bg-bm-blue-dark px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="text-label text-bm-cyan text-xs tracking-[0.2em]">
            {study.industry}
          </span>
          <span className="text-white/30 mx-3">|</span>
          <span className="text-sm text-white/60">{study.businessType}</span>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span className="text-mono">{study.timeline} timeline</span>
          <span className="text-mono">{study.adSpend} ad spend</span>
        </div>
      </div>

      <div className="p-4 sm:p-8 lg:p-10">
        {/* Headline */}
        <h3 className="text-display text-bm-gray-900 text-2xl lg:text-3xl mb-6 leading-tight">
          {study.headline}
        </h3>

        {/* Challenge */}
        <div className="mb-6">
          <span className="text-label text-bm-cyan-dark block mb-2">
            The Challenge
          </span>
          <p className="text-bm-gray-600 leading-relaxed">{study.challenge}</p>
        </div>

        {/* Strategy */}
        <div className="mb-8">
          <span className="text-label text-bm-cyan-dark block mb-2">
            Our Strategy
          </span>
          <p className="text-bm-gray-600 leading-relaxed">{study.strategy}</p>
        </div>

        {/* Results grid */}
        <div className="mb-8">
          <span className="text-label text-bm-cyan-dark block mb-4">
            The Results
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {study.results.map((result, i) => (
              <ResultMetric key={result.metric} metric={result} index={i} />
            ))}
          </div>
        </div>

        {/* Quote */}
        {study.quote && (
          <div className="border-l-2 border-bm-cyan pl-4 sm:pl-6 py-2">
            <p className="text-editorial text-lg lg:text-xl text-bm-gray-700 leading-relaxed">
              &ldquo;{study.quote}&rdquo;
            </p>
            <p className="text-label text-bm-gray-400 mt-2">
              — {study.businessType} Owner
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.industry === activeFilter);

  return (
    <section id="results" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            Proven Results
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl max-w-4xl mx-auto mb-6">
            Real Campaigns. Real Numbers.{" "}
            <span className="text-editorial text-bm-cyan-dark">
              No Hypotheticals.
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every case study below is a real client with a real business who came
            to us with a real problem. We&apos;re showing you the challenge, the
            strategy, and the exact numbers — because that&apos;s what we&apos;d
            want to see if we were in your shoes.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-14 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {industryCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`text-label px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shrink-0 whitespace-nowrap ${
                activeFilter === cat.name
                  ? "bg-bm-blue-dark text-bm-cyan"
                  : "bg-bm-gray-100 text-bm-gray-600 hover:bg-bm-gray-200"
              }`}
            >
              {cat.name}{" "}
              <span className="text-mono text-xs ml-1 opacity-60">
                ({cat.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Case study cards */}
        <div className="space-y-8 lg:space-y-12">
          <AnimatePresence mode="wait">
            {filtered.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-bm-gray-600 text-lg mb-6">
            These results aren&apos;t outliers. They&apos;re the standard when
            you combine experienced media buyers, proven creative strategies, and
            daily optimization.
          </p>
          <a href="/checkout" className="btn-cta">
            Get Results Like These
          </a>
        </motion.div>
      </div>
    </section>
  );
}
