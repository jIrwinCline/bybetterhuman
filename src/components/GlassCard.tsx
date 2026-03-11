"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface GlassCardProps {
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
  accent?: boolean;
  label?: string;
  children?: React.ReactNode;
}

export default function GlassCard({
  title,
  subtitle,
  description,
  href,
  accent = false,
  label,
  children,
}: GlassCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative p-8 md:p-10 h-full ${
        accent ? "glass-red" : "glass-card"
      }`}
    >
      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 border-b border-l ${
          accent ? "border-bbh-red/30" : "border-glass-border"
        }`}
      >
        <div
          className={`absolute top-3 right-3 w-2 h-2 ${
            accent ? "bg-bbh-red" : "bg-bbh-white/20"
          } group-hover:bg-bbh-red transition-colors`}
        />
      </div>

      {label && (
        <span className="text-label text-bbh-gray-400 mb-4 block">{label}</span>
      )}
      <h3 className="text-display text-2xl md:text-3xl mb-2">{title}</h3>
      {subtitle && (
        <p className="text-editorial text-bbh-red text-lg mb-4">{subtitle}</p>
      )}
      <p className="text-sm text-bbh-gray-300 leading-relaxed font-mono">
        {description}
      </p>
      {children}
      {href && (
        <div className="mt-6 flex items-center gap-2 text-label text-bbh-gray-400 group-hover:text-bbh-white transition-colors">
          <span>Explore</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
