"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { caseStudies } from "../data/caseStudies";

const showcaseIds = [
  "dental-implants",
  "roofing-leads",
  "chiropractor-new-patients",
];

const showcaseImages: Record<string, string> = {
  "dental-implants": "/images/better-marketing/stock/medical-dental.jpg",
  "roofing-leads": "/images/better-marketing/stock/home-roofing.jpg",
  "chiropractor-new-patients": "/images/better-marketing/stock/medical-chiro.jpg",
};

const showcaseCases = showcaseIds
  .map((id) => caseStudies.find((c) => c.id === id))
  .filter(Boolean);

export default function ResultsShowcase() {
  return (
    <section
      id="results"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            Our Case Studies
          </span>
          <h2 className="text-display text-bm-gray-900 text-4xl sm:text-5xl lg:text-6xl max-w-3xl mx-auto mb-6">
            Real Results.{" "}
            <span className="text-editorial text-bm-cyan-dark">
              Real Businesses.
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Not impressions. Not clicks. Patients in chairs, calls on the phone,
            and revenue in the bank. Here&apos;s what we did for practices just
            like yours.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="space-y-8">
          {showcaseCases.map((study, i) => (
            <motion.div
              id={`case-${study!.id}`}
              key={study!.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-elevated overflow-hidden scroll-mt-24"
            >
              {/* Case study image */}
              {showcaseImages[study!.id] && (
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={showcaseImages[study!.id]}
                    alt={study!.businessType}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/90" />
                </div>
              )}
              <div className={`p-5 sm:p-8 lg:p-10 ${showcaseImages[study!.id] ? "-mt-10 relative" : ""}`}>
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-label text-bm-cyan-dark bg-bm-cyan-50 px-3 py-1 rounded-full text-xs">
                    {study!.businessType}
                  </span>
                  <span className="text-mono text-xs text-bm-gray-400">
                    {study!.timeline} &middot; {study!.adSpend}
                  </span>
                </div>

                <h3 className="text-display text-bm-gray-900 text-xl sm:text-2xl lg:text-3xl mb-6 max-w-3xl">
                  {study!.headline}
                </h3>

                {/* Results grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
                  {study!.results.map((result) => (
                    <div
                      key={result.metric}
                      className="bg-bm-gray-50 rounded-xl p-4"
                    >
                      <div className="stat-number text-2xl sm:text-3xl text-bm-cyan-dark mb-1">
                        {result.value}
                      </div>
                      <p className="text-label text-bm-gray-900 text-xs mb-0.5">
                        {result.metric}
                      </p>
                      <p className="text-bm-gray-400 text-xs">
                        {result.context}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                {study!.quote && (
                  <div className="border-l-2 border-bm-cyan pl-4 sm:pl-6">
                    <p className="text-editorial text-bm-gray-700 text-lg leading-relaxed">
                      &ldquo;{study!.quote}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#apply" className="btn-cta">
            Get Results Like These
          </a>
          <p className="text-sm text-bm-gray-400 mt-4">
            We&apos;ve run 3,000+ campaigns across 100+ industries. These are
            just three.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
