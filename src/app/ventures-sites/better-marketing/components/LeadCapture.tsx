"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const TALLY_FORM_ID = "obBJo5";

export default function LeadCapture() {
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";
    // Load Tally embed script if not already present
    if (typeof window !== "undefined") {
      const win = window as Window & { Tally?: { loadEmbeds: () => void } };
      if (win.Tally) {
        win.Tally.loadEmbeds();
      } else if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.onload = () => {
          if (win.Tally) win.Tally.loadEmbeds();
        };
        script.onerror = () => {
          // Fallback: set src directly on iframes
          document
            .querySelectorAll<HTMLIFrameElement>(
              "iframe[data-tally-src]:not([src])"
            )
            .forEach((el) => {
              if (el.dataset.tallySrc) el.src = el.dataset.tallySrc;
            });
        };
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <section
      id="apply"
      className="hero-gradient relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-label text-bm-cyan tracking-[0.2em] block mb-4">
            Apply Now
          </span>
          <h2 className="text-display text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
            Ready To Launch?{" "}
            <span className="text-editorial text-bm-cyan">
              Book with our team
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            No sales pitch. Simply tell us about your business, order the
            service, and have a dedicated account manager reach out to you within
            a business day. You&apos;ll get access to our full marketing &amp;
            asset catalog to be able to launch a campaign with or without us.
            Takes about 2 minutes.
          </p>
        </motion.div>

        {/* Tally form embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="card-dark p-4 sm:p-6 rounded-2xl overflow-hidden"
        >
          <iframe
            data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            loading="lazy"
            width="100%"
            height="174"
            style={{ border: 0 }}
            title="BETTER Digital Marketing"
          />
        </motion.div>

        {/* Reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/30 text-xs mt-6"
        >
          Your information is kept confidential. No spam. We review every
          application personally.
        </motion.p>
      </div>
    </section>
  );
}
