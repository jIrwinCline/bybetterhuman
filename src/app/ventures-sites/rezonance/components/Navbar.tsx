"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "THE PROBLEM", href: "#problem" },
  { label: "THE SOLUTION", href: "#solution" },
  { label: "WHAT'S INSIDE", href: "#knowledge" },
  { label: "ORDER NOW", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-barlow font-bold text-xl tracking-[0.2em] text-text-primary uppercase no-underline"
        >
          REZONANCE
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow text-sm tracking-[0.15em] text-text-secondary hover:text-accent-brass transition-colors no-underline uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-transform ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border-card px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow text-sm tracking-[0.15em] text-text-secondary hover:text-accent-brass transition-colors no-underline uppercase"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
