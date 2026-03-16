"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const nextSteps = [
  {
    step: "1",
    title: "Access your digital product suite",
    description:
      "Click the button below to get instant access to all 14 playbooks, 70+ chapters of guide videos, done-for-you templates, and swipe files.",
  },
  {
    step: "2",
    title: "We review your details",
    description:
      "Our team will review the information you submitted and start preparing your custom campaign strategy.",
  },
  {
    step: "3",
    title: "Your account manager reaches out",
    description:
      "A dedicated account manager from our U.S.-based team will contact you within 1 business day to schedule your onboarding call.",
  },
];

export default function ThankYouPage() {
  const payhipUrl = process.env.NEXT_PUBLIC_PAYHIP_ACCESS_URL || "";
  // TODO: Replace with your actual thank-you/explainer video URL
  const videoUrl = "";

  return (
    <main className="noise">
      {/* Nav */}
      <nav className="bg-bm-blue-dark border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="block">
            <Image
              src="/images/better-marketing/LogoHeader.png"
              alt="Better Digital Marketing"
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
              You&apos;re all set
            </span>
          </div>
        </div>
      </nav>

      <section className="hero-gradient py-16 sm:py-24 px-4 sm:px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Step indicator - all complete */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            {["Payment", "Details", "Confirmation"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && <div className="w-8 h-px bg-bm-green/40" />}
                <div className="w-8 h-8 rounded-full bg-bm-green flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.5 4.5L6 12L2.5 8.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-label text-white/40 text-xs">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
              Welcome to{" "}
              <span className="text-editorial text-bm-cyan">
                Better Marketing
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mx-auto leading-relaxed">
              Your subscription is active and your Digital Product &amp; Asset
              Suite is ready. Access it now, then watch the quick video below.
            </p>
          </motion.div>

          {/* Payhip access CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center mb-12"
          >
            <a
              href={payhipUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-lg inline-block"
            >
              Access Your Digital Product Suite
            </a>
            <p className="text-white/40 text-sm mt-3">
              14 playbooks, guide videos, templates, and swipe files — all yours
              to keep.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12"
          >
            {videoUrl ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <iframe
                  src={videoUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Welcome video"
                  className="absolute inset-0"
                />
              </div>
            ) : (
              /* Placeholder until video is added */
              <div className="relative aspect-video bg-bm-blue-dark rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-bm-yellow flex items-center justify-center shadow-lg shadow-bm-yellow/30">
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
                    Welcome video coming soon
                  </p>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-bm-cyan/20 rounded-tl" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-bm-cyan/20 rounded-tr" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-bm-cyan/20 rounded-bl" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-bm-cyan/20 rounded-br" />
              </div>
            )}
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
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
                  transition={{ delay: 0.4 + i * 0.1 }}
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
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <div className="accent-line max-w-xs mx-auto mb-8" />
            <p className="text-editorial text-xl text-white/40 max-w-md mx-auto">
              We don&apos;t send you to a chatbot or a queue. A real person will
              reach out to you within the next business day. That&apos;s a
              promise.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="accent-line" />
    </main>
  );
}
