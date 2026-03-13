"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const defaultLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Get Started", href: "/checkout" },
];

interface FooterProps {
  links?: { label: string; href: string }[];
}

export default function Footer({ links = defaultLinks }: FooterProps) {
  return (
    <footer className="bg-bm-blue-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <Image
                src="/images/better-marketing/LogoHeader.png"
                alt="Better Marketing Digital"
                width={160}
                height={42}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-white/30">
              A{" "}
              <span className="text-white/50">ByBetterHuman</span>{" "}
              venture.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-label text-white/40 hover:text-bm-cyan transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="accent-line my-10 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} BetterMarketing Digital. All
            rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Done-for-you ad campaign management for service-based businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
