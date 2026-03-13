"use client";

import { motion } from "framer-motion";

const trustItems = [
  "3,000+ Campaigns",
  "$20M+ Ad Spend",
  "100+ Industries",
  "100% U.S. Team",
  "Google Partner",
  "Meta Partner",
];

export default function TrustBar() {
  return (
    <section className="py-6 bg-bm-blue-dark overflow-hidden border-y border-white/5">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-bm-blue-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-bm-blue-dark to-transparent z-10" />

        {/* Scrolling marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex items-center gap-6 sm:gap-12 whitespace-nowrap"
        >
          {/* Duplicate for seamless loop */}
          {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-label text-white/50 tracking-[0.2em] text-sm">
                  {item}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-bm-cyan/40" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
