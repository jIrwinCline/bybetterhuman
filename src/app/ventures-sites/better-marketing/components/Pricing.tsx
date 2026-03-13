"use client";

import { motion } from "framer-motion";

const everythingIncluded = [
  "14 complete playbooks and systems (70+ chapters total)",
  "Step-by-step guide videos for every product",
  "Done-for-you ad creative templates and swipe files",
  "Dedicated U.S.-based account manager",
  "Custom campaign strategy built around your goals and market",
  "Professional ad copy and creative assets",
  "Campaign build on Google, Meta, or TikTok",
  "Full conversion tracking and analytics setup",
  "Daily campaign monitoring and optimization",
  "A/B testing of creatives, copy, and audiences",
  "Weekly performance reports with real numbers",
  "Monthly strategy calls to review results and plan ahead",
  "Landing page recommendations and review",
  "100% U.S.-based team — no freelancers, no outsourcing",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-bm-green mt-1 shrink-0"
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-bm-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            Simple Pricing
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            One Plan. Everything Included.{" "}
            <span className="text-editorial text-bm-cyan-dark">
              No Surprises.
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Your digital product suite, done-for-you campaign management, and a
            dedicated team — all in one monthly subscription.
          </p>
        </motion.div>

        {/* Single pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated overflow-hidden border-2! border-bm-cyan!"
        >
          <div className="bg-bm-blue-dark p-5 sm:p-8 text-center">
            <p className="text-label text-bm-cyan tracking-[0.2em] mb-3">
              Better Marketing — Full Service
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="stat-number text-4xl sm:text-5xl lg:text-6xl">$600</span>
              <span className="text-white/50 text-lg">/month</span>
            </div>
            <p className="text-white/60 mt-2 text-base">
              3-month commitment &middot; cancel anytime after
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-label text-bm-gray-900 mb-4">
              Everything you get:
            </p>
            <ul className="space-y-3">
              {everythingIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-bm-gray-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-bm-cyan-50 rounded-xl">
              <p className="text-sm text-bm-gray-700 leading-relaxed">
                <span className="font-semibold">Changed your mind?</span>{" "}
                We&apos;ll cancel the subscription if you don&apos;t want to
                move forward. You keep the entire digital product suite either
                way. No questions asked.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why 3 months + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="card-elevated p-5 sm:p-8 lg:p-10">
            <div className="max-w-2xl mx-auto">
              <h4 className="text-display text-bm-gray-900 text-lg mb-2">
                Why 3 months?
              </h4>
              <p className="text-bm-gray-600 text-sm leading-relaxed mb-8">
                Month-to-month agency models fail for a reason. It takes 2-4
                weeks to build campaigns, gather data, and start optimizing. By
                month 2, you&apos;re seeing what works. By month 3, we&apos;re
                scaling the winners. Three months gives us the runway to
                actually deliver results — not just impressions.
              </p>

              <div className="text-center">
                <a href="/checkout" className="btn-cta">
                  Start Your Campaign
                </a>
                <p className="text-sm text-bm-gray-400 mt-4 flex items-center justify-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-bm-green"
                  >
                    <path
                      d="M11.5 4L5.5 10L2.5 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  No sales calls needed. No contracts beyond 3 months.
                </p>
              </div>
            </div>
          </div>

          {/* Ad spend note */}
          <p className="text-xs text-bm-gray-400 text-center mt-6">
            Ad spend is separate and paid directly to Meta/Google/TikTok. We
            recommend a minimum of $1,500/month in ad spend depending on your
            market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
