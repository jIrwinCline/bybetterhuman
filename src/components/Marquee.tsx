"use client";

export default function Marquee({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const repeated = Array(6).fill(text).join(" — ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee inline-block">
        <span className="text-display text-6xl md:text-8xl lg:text-[10rem] text-bbh-white/[0.04] select-none">
          {repeated}
        </span>
      </div>
    </div>
  );
}
