"use client";

import { useCountUp } from "../hooks/useCountUp";
import { problemStats, problemProse, problemSources } from "../data/stats";

function StatBlock({ stat }: { stat: { value: number; suffix: string; label: string; decimals?: number } }) {
  const { count, ref } = useCountUp(stat.value, 2000, stat.decimals || 0);

  return (
    <div ref={ref} className="text-center p-6 reveal">
      <div className="font-rez-mono text-data-blue text-3xl md:text-4xl font-medium mb-3">
        {typeof stat.value === "number" && stat.value >= 1000
          ? count.toLocaleString()
          : count}
        {stat.suffix}
      </div>
      <p className="font-source text-text-secondary text-sm md:text-base leading-relaxed max-w-xs mx-auto">
        {stat.label}
      </p>
    </div>
  );
}

export default function ProblemStats() {
  return (
    <section id="problem" className="bg-bg-primary py-20 md:py-28 px-6 relative flex flex-col items-center">
      {/* Interference */}
      <div className="interference-line" style={{ top: "30%", animationDelay: "2s" }} />

      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-16 reveal">
          THE GRID IS A SINGLE POINT OF FAILURE.
        </h2>

        {/* Stats grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 place-items-center">
          {problemStats.map((stat, i) => (
            <StatBlock key={i} stat={stat} />
          ))}
        </div>

        <div className="brass-divider mb-12" />

        {/* Prose */}
        <p className="font-source text-lg text-text-primary leading-relaxed max-w-3xl mx-auto mb-8 text-center reveal">
          {problemProse}
        </p>

        {/* Sources */}
        <p className="font-rez-mono text-xs text-text-secondary text-center reveal">
          {problemSources}
        </p>
      </div>
    </section>
  );
}
