"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/jacob-formacha/formacha-discovery-meeting-psf-clone";

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    // Load Calendly widget script
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for Calendly booking completion
    function handleMessage(e: MessageEvent) {
      if (
        e.origin === "https://calendly.com" &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        router.push("/booked");
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

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
              Application received
            </span>
          </div>
        </div>
      </nav>

      <section className="hero-gradient py-16 sm:py-24 px-4 sm:px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
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
              You&apos;re In.{" "}
              <span className="text-editorial text-bm-cyan">
                Pick a Time.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mx-auto leading-relaxed">
              We&apos;ll review your application and put together a custom growth
              plan before the call. Pick a time that works for you.
            </p>
          </motion.div>

          {/* Calendly inline widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card-dark p-1 sm:p-2 rounded-2xl overflow-hidden"
          >
            <div
              className="calendly-inline-widget bg-white rounded-xl"
              data-url={CALENDLY_URL}
              style={{ minWidth: 320, height: 700 }}
            />
          </motion.div>

          {/* Reassurance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <div className="accent-line max-w-xs mx-auto mb-8" />
            <p className="text-editorial text-xl text-white/40 max-w-md mx-auto">
              This isn&apos;t a sales call. We&apos;ll walk you through your
              custom growth plan and answer every question you have.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="accent-line" />
    </main>
  );
}
