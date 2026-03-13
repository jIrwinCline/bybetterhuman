"use client";

import { motion } from "framer-motion";
import { processSteps } from "../data/stats";

interface ProcessProps {
  steps?: typeof processSteps;
}

export default function Process({ steps = processSteps }: ProcessProps) {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            How It Works
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            Your Ads, Live in 7 Days.{" "}
            <span className="text-editorial text-bm-cyan-dark">
              Here&apos;s Exactly How.
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            No month-long &ldquo;discovery phases.&rdquo; No endless onboarding
            calls. We move fast because we&apos;ve done this 3,000+ times and we
            know exactly what&apos;s needed to get your campaigns live and
            generating leads.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-bm-cyan via-bm-cyan/40 to-transparent hidden md:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Step dot */}
                <div className="relative z-10 shrink-0">
                  <div className="step-dot text-sm">{step.number}</div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Days badge */}
                  <span className="text-mono text-xs text-bm-cyan bg-bm-cyan/10 px-3 py-1 rounded-full inline-block mb-3">
                    {step.days}
                  </span>

                  <h3 className="text-display text-bm-gray-900 text-2xl lg:text-3xl mb-1">
                    {step.title}
                  </h3>
                  <p className="text-editorial text-bm-cyan-dark text-base mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-bm-gray-600 leading-relaxed mb-6 max-w-xl">
                    {step.description}
                  </p>

                  {/* Detail bullets */}
                  <ul className="space-y-2.5">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-bm-cyan mt-1 shrink-0"
                        >
                          <path
                            d="M13.5 4.5L6 12L2.5 8.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-bm-gray-600 text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
