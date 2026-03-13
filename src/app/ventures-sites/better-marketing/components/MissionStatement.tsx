"use client";

import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-bm-gray-50 border-y border-bm-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-editorial text-bm-gray-900 text-2xl sm:text-3xl lg:text-4xl leading-snug">
          If you know you need to grow, let us show you we&apos;re the right
          team for the job. Then we&apos;ll skip the
          &ldquo;sales pitch&rdquo; and get right to work.
        </p>
      </motion.div>
    </section>
  );
}
