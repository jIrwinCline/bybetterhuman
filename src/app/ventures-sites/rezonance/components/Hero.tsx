export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-bg-primary overflow-hidden">
      {/* Interference lines */}
      <div className="interference-line" style={{ top: "20%", animationDelay: "0s" }} />
      <div className="interference-line" style={{ top: "45%", animationDelay: "3s" }} />
      <div className="interference-line" style={{ top: "75%", animationDelay: "6s" }} />

      <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
        <h1 className="font-barlow font-bold text-4xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[0.02em] text-text-primary uppercase mb-6">
          When the Grid Goes Down, Your Phone Becomes a Brick.
        </h1>
        <p className="font-source text-lg md:text-[22px] text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          Unless it&apos;s loaded with everything you need to survive.
        </p>

        {/* Stat */}
        <p className="font-rez-mono text-data-blue text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          In 2025, 45% of U.S. utility customers experienced at least one power outage.
          Average duration: 12.8 hours. — J.D. Power
        </p>

        {/* CTA */}
        <a
          href="#pricing"
          className="cta-button inline-block bg-cta-red text-text-primary font-barlow font-semibold text-base tracking-[0.15em] uppercase px-10 py-4 rounded no-underline"
        >
          ORDER YOUR KIT — $497
        </a>
      </div>

      {/* Chevron */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 chevron-pulse">
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 2L12 12L22 2" />
        </svg>
      </div>
    </section>
  );
}
