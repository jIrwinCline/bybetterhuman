"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const nextSteps = [
  {
    step: "1",
    title: "We review your application",
    description:
      "Our team reads every detail you submitted and puts together a custom growth plan before your call. No generic decks.",
  },
  {
    step: "2",
    title: "Check your email",
    description:
      "You'll get a calendar invite with the call details and any prep info we need from you. Keep an eye on your inbox.",
  },
  {
    step: "3",
    title: "Show up to your call",
    description:
      "This isn't a sales pitch. We'll walk through your custom growth plan, show you what we'd do, and answer every question you have.",
  },
];

export default function BookedPage() {
  return (
    <main className="noise">
      {/* Nav */}
      <nav className="bg-bm-blue-dark border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="block">
            <Image
              src="/images/better-marketing/LogoHeader.png"
              alt="Better Marketing Digital"
              width={160}
              height={42}
              className="h-8 w-auto"
              priority
            />
          </a>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-bm-green flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 4.5L6 12L2.5 8.5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-label text-bm-green text-xs">
              Call booked
            </span>
          </div>
        </div>
      </nav>

      <section className="hero-gradient py-16 sm:py-24 px-4 sm:px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-bm-green/20 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 4.5L6 12L2.5 8.5"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-display text-white text-3xl sm:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              You&apos;re All Set.{" "}
              <span className="text-editorial text-bm-cyan">
                We&apos;ll Come Prepared.
              </span>
            </h1>
            <p className="text-bm-yellow text-lg font-semibold max-w-lg mx-auto mb-3">
              Accept the email invitation in your inbox.
            </p>
            <p className="text-white/60 text-lg max-w-lg mx-auto leading-relaxed">
              Your call is booked. Between now and then, our team will review
              your application and build a custom growth plan for your business.
            </p>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-display text-white text-2xl mb-8 text-center">
              What Happens Next
            </h2>

            <div className="space-y-6">
              {nextSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="card-dark p-5 sm:p-6 flex gap-4"
                >
                  <div className="step-dot text-sm shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-display text-white text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="accent-line max-w-xs mx-auto mb-8" />
            <p className="text-editorial text-xl text-white/40 max-w-md mx-auto">
              A real person reviewed your application. We&apos;ll come prepared.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="accent-line" />
    </main>
  );
}
