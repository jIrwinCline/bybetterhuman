"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Strategy",
    icon: (
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    items: [
      "Custom campaign strategy built around your goals and market",
      "Target audience research and segmentation",
      "Ad account audit (or new account setup)",
      "Competitive analysis of your local market",
    ],
  },
  {
    title: "Creative",
    icon: (
      <path
        d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 13a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    items: [
      "Professional ad copy written by experienced copywriters",
      "Custom creative assets designed for your brand",
      "Landing page recommendations and review",
      "A/B testing of creatives, copy, and audiences",
    ],
  },
  {
    title: "Management",
    icon: (
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    items: [
      "Campaign build on Google, Meta, or TikTok",
      "Daily monitoring and optimization",
      "Dedicated U.S.-based account manager",
      "Full conversion tracking and analytics setup",
    ],
  },
  {
    title: "Reporting",
    icon: (
      <path
        d="M18 20V10M12 20V4M6 20v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    items: [
      "Weekly performance reports with real numbers",
      "Monthly strategy calls to review and plan ahead",
      "Call tracking and lead source attribution",
      "No vanity metrics. Just leads, costs, and results.",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-bm-green mt-1 shrink-0"
    >
      <path
        d="M11.5 4L5.5 10L2.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OfferStack() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-bm-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            What You Get
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            Here&apos;s What Your Team{" "}
            <span className="text-editorial text-bm-cyan-dark">
              Does for You.
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            You run your practice. We run your marketing. Your dedicated team
            handles strategy, creative, campaign management, and reporting. Every
            week, you see exactly what&apos;s working.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-elevated p-5 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-bm-cyan-50 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-bm-cyan-dark"
                  >
                    {cat.icon}
                  </svg>
                </div>
                <h3 className="text-display text-bm-gray-900 text-xl">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-bm-gray-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Team + digital product suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 card-elevated overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-48 md:h-auto min-h-50">
              <Image
                src="/images/better-marketing/stock/team-working.jpg"
                alt="Your dedicated marketing team"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-8 flex flex-col justify-center">
              <p className="text-label text-bm-cyan-dark tracking-[0.15em] mb-2">
                Plus: 14 Playbooks &amp; Guide Videos Included
              </p>
              <p className="text-bm-gray-600 text-sm leading-relaxed">
                Google Ads, Meta Ads, LSA, LinkedIn, SEO, Outbound Sales, Organic
                Social, Referral &amp; Retention, Business Launch Kit, and more.
                70+ chapters of step-by-step guides, done-for-you templates, and
                swipe files. Yours to keep.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href="#apply" className="btn-cta">
            Apply for Your Free Growth Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
