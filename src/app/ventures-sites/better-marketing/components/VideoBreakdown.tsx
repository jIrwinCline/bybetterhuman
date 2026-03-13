"use client";

import { motion } from "framer-motion";

export default function VideoBreakdown() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-bm-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            See It In Action
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            Watch This 5-Minute Breakdown of{" "}
            <span className="text-editorial text-bm-cyan-dark">
              Exactly How We&apos;ll Get You Results
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            In this video, you&apos;ll see exactly how we structure campaigns,
            the types of results our clients get, and why our 3-month model
            works better than the typical month-to-month agency setup. No fluff.
            No pitch. Just the process, explained in plain English by someone
            who&apos;s managed over $20 million in ad spend.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video bg-bm-blue-dark rounded-2xl overflow-hidden group cursor-pointer shadow-2xl shadow-black/10"
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-bm-yellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-bm-yellow/30">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                  fill="#1a2332"
                />
              </svg>
            </div>
            <p className="text-label text-white/60 mt-6 tracking-[0.2em]">
              Watch the 5-minute breakdown
            </p>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-bm-cyan/20 rounded-tl" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-bm-cyan/20 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-bm-cyan/20 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-bm-cyan/20 rounded-br" />
        </motion.div>

        {/* Video highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
        >
          {[
            {
              time: "0:00–1:30",
              title: "The Strategy",
              desc: "How we identify your ideal customers and build campaigns that reach them",
            },
            {
              time: "1:30–3:30",
              title: "The Results",
              desc: "Real client examples with actual lead costs, conversion rates, and revenue",
            },
            {
              time: "3:30–5:00",
              title: "The Process",
              desc: "What happens after you sign up — from onboarding to your first live campaign",
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <span className="text-mono text-xs text-bm-cyan">
                {item.time}
              </span>
              <h4 className="text-display text-bm-gray-900 text-lg mt-1 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-bm-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
