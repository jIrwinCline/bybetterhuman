"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/mentorship", label: "Mentorship" },
  { href: "/ventures", label: "Ventures" },
  { href: "/muses", label: "Muses" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-[4vw] md:left-[2vw] right-[4vw] md:right-[2vw] z-50 glass-strong">
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-bbh-white flex items-center justify-center group-hover:bg-bbh-red group-hover:border-bbh-red transition-all duration-300">
              <span className="text-xs font-bold font-mono">BH</span>
            </div>
            <span className="text-label hidden sm:block tracking-[0.25em]">
              By Better Human
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label px-4 py-2 transition-all duration-300 hover:bg-bbh-white hover:text-bbh-black ${
                  pathname === link.href
                    ? "bg-bbh-white text-bbh-black"
                    : "text-bbh-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-bbh-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-bbh-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-bbh-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu — brutalist bordered list */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 bottom-0 left-[4vw] md:left-[2vw] right-[4vw] md:right-[2vw] z-40 bg-bbh-black flex flex-col"
          >
            {/* Top marquee — CLOSE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden whitespace-nowrap border-b-[3px] border-bbh-white py-3 shrink-0"
            >
              <div className="animate-marquee inline-block">
                <span className="text-label text-sm tracking-[0.3em]">
                  {Array(12).fill("CLOSE").join("  ")}
                </span>
              </div>
            </motion.div>

            {/* Menu items */}
            <div className="flex-1 flex flex-col">
              {[{ href: "/", label: "Home" }, ...NAV_LINKS].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="border-b-[3px] border-bbh-white flex-1 flex items-center justify-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`w-full h-full flex items-center justify-center text-display text-xl sm:text-2xl tracking-[0.15em] uppercase transition-colors duration-200 active:bg-bbh-white active:text-bbh-black ${
                      pathname === link.href
                        ? "text-bbh-red"
                        : "text-bbh-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom marquee — RISING */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden whitespace-nowrap border-t-[3px] border-bbh-white py-3 shrink-0"
            >
              <div className="animate-marquee inline-block">
                <span className="text-label text-sm tracking-[0.3em]">
                  {Array(12).fill("PREPARATION").join("  ")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
