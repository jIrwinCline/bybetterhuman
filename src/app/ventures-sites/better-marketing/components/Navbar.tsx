"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const defaultLinks = [
  { label: "HOW IT WORKS", href: "#process" },
  { label: "RESULTS", href: "#results" },
  { label: "PRICING", href: "#pricing" },
  { label: "GET STARTED", href: "/checkout" },
];

interface NavbarProps {
  links?: { label: string; href: string }[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  links = defaultLinks,
  ctaText = "Start Your Campaign",
  ctaHref = "/checkout",
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bm-blue-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="block">
            <Image
              src="/images/better-marketing/LogoHeader.png"
              alt="Better Digital Marketing"
              width={180}
              height={48}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-label text-bm-gray-400 hover:text-bm-cyan transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={ctaHref}
            className="hidden! lg:inline-block! btn-cta py-3! px-8! text-sm!"
          >
            {ctaText}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bm-blue-dark/98 backdrop-blur-xl pt-20 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-display text-3xl text-white hover:text-bm-cyan transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className="btn-cta text-center mt-4"
              >
                {ctaText}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
