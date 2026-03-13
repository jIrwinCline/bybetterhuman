"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "../data/stats";

function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-bm-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <h3 className="text-display text-bm-gray-900 text-lg lg:text-xl pr-8 group-hover:text-bm-cyan-dark transition-colors">
          {item.question}
        </h3>
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "border-bm-cyan bg-bm-cyan text-white rotate-45"
              : "border-bm-gray-200 text-bm-gray-400 group-hover:border-bm-cyan group-hover:text-bm-cyan"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v10M2 7h10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-bm-gray-600 leading-relaxed pb-6 pr-4 sm:pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface FAQProps {
  items?: { question: string; answer: string }[];
  subtitle?: string;
}

export default function FAQ({ items = faqItems, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            Questions
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            Straight Answers.{" "}
            <span className="text-editorial text-bm-cyan-dark">No BS.</span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle ||
              "We know you have questions. We'd rather answer them here than make you sit through a 45-minute sales call to find out what this costs."}
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="card-elevated p-2 lg:p-4">
          <div className="px-6 lg:px-8">
            {items.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
