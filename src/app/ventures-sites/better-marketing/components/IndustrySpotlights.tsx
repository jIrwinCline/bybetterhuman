"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    id: "medical",
    label: "Medical",
    headline: "Built for Practices That Want a Full Waiting Room",
    description:
      "We understand healthcare advertising. HIPAA-compliant campaigns, ad platform restrictions, and the nuances of marketing to patients who are actively searching for treatment. We don't sell clicks. We fill appointment books.",
    verticals: [
      "Chiropractors",
      "Naturopaths & Functional Medicine",
      "TRT / HRT Clinics",
      "Dental Practices",
      "Med Spas & Aesthetics",
    ],
    strengths: [
      "HIPAA-aware ad strategies that don't get flagged",
      "Symptom-based targeting for restricted treatments (TRT, HRT, weight loss)",
      "Local patient acquisition, not just clicks",
      "Before/after campaign optimization for regulated industries",
    ],
    stat: { value: "32", label: "new patients/month", context: "for a solo chiropractor at $28/patient" },
    image: "/images/better-marketing/stock/medical-dental.jpg",
  },
  {
    id: "home-services",
    label: "Home Services",
    headline: "Exclusive Leads That Actually Answer the Phone",
    description:
      "Tired of shared leads from Angi and HomeAdvisor? We generate exclusive leads for your business. When someone calls, they're calling you and only you. No more competing with 4 other contractors on the same lead.",
    verticals: [
      "Roofing",
      "Solar Installation",
      "HVAC",
      "Plumbing",
      "Remodeling & General Contracting",
    ],
    strengths: [
      "Exclusive leads, never shared with competitors",
      "Hyper-local targeting within your service area",
      "Call tracking so you know exactly what's working",
      "Landing pages built for each service type",
    ],
    stat: { value: "$22", label: "cost per lead", context: "down from $150+ on lead gen platforms (roofing)" },
    image: "/images/better-marketing/stock/home-services.jpg",
  },
  {
    id: "b2b",
    label: "B2B Services",
    headline: "Your Sales Team Needs Better Leads. We Deliver Them.",
    description:
      "B2B campaigns need a different approach. Longer sales cycles, higher deal values, and more sophisticated targeting. We build campaigns that reach decision-makers, not just browsers. LinkedIn, Google, and Meta campaigns working together.",
    verticals: [
      "Professional Services",
      "IT & Managed Services",
      "Commercial Contractors",
      "Consulting Firms",
      "Staffing & Recruiting",
    ],
    strengths: [
      "Decision-maker targeting by title, industry, and company size",
      "Multi-platform campaigns (Google + LinkedIn + Meta)",
      "Lead quality focus over lead volume",
      "Long-cycle nurture and retargeting strategies",
    ],
    stat: { value: "3,000+", label: "campaigns managed", context: "across 100+ industries" },
    image: "/images/better-marketing/stock/b2b-meeting.jpg",
  },
];

export default function IndustrySpotlights() {
  const [active, setActive] = useState("medical");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section
      id="industries"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-bm-blue-deep"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-label text-bm-cyan tracking-[0.2em] block mb-4">
            Industries We Serve
          </span>
          <h2 className="text-display text-white text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            We Specialize Where It{" "}
            <span className="text-editorial text-bm-cyan">Matters Most.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;ve run campaigns across 100+ industries. But these three
            verticals are where we consistently deliver the highest ROI.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`text-label px-4 sm:px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
                active === ind.id
                  ? "bg-bm-cyan text-white"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="card-dark overflow-hidden"
          >
            {/* Industry image */}
            <div className="relative h-48 sm:h-56">
              <Image
                src={current.image}
                alt={current.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-bm-blue-deep/95" />
            </div>

            <div className="p-5 sm:p-8 lg:p-10 -mt-8 relative">
            <h3 className="text-display text-white text-2xl sm:text-3xl mb-4">
              {current.headline}
            </h3>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
              {current.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Verticals we serve */}
              <div>
                <p className="text-label text-bm-cyan tracking-[0.15em] mb-4 text-sm">
                  Verticals We Serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.verticals.map((v) => (
                    <span
                      key={v}
                      className="text-white/70 text-sm bg-white/5 px-3 py-1.5 rounded-lg"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why this works */}
              <div>
                <p className="text-label text-bm-cyan tracking-[0.15em] mb-4 text-sm">
                  Why We Win Here
                </p>
                <ul className="space-y-2.5">
                  {current.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
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
                      <span className="text-white/60 text-sm leading-relaxed">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Highlight stat */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-baseline gap-3">
              <span className="stat-number text-3xl sm:text-4xl">
                {current.stat.value}
              </span>
              <div>
                <p className="text-white/70 text-sm">{current.stat.label}</p>
                <p className="text-white/40 text-xs">{current.stat.context}</p>
              </div>
            </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="#apply" className="btn-cta">
            See If Your Industry Qualifies
          </a>
        </motion.div>
      </div>
    </section>
  );
}
