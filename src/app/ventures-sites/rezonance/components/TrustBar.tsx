const trustLogos = [
  "Wikipedia",
  "Kiwix",
  "WikiMed",
  "Project Gutenberg",
  "OpenStreetMap",
  "wikiHow",
  "Stack Exchange",
];

export default function TrustBar() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 px-6 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-12 reveal">
          BUILT ON OPEN KNOWLEDGE
        </h2>

        {/* Marquee */}
        <div className="w-full relative mb-12 overflow-hidden reveal">
          <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <span
                key={i}
                className="font-barlow text-xl tracking-[0.1em] text-text-secondary uppercase opacity-50"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center font-source text-text-secondary text-base max-w-2xl mx-auto mb-16 reveal">
          All content is open-source and freely licensed. We curate, configure,
          and deliver it — so you don&apos;t have to.
        </p>

        {/* Testimonial placeholders */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-bg-card border border-border-card rounded p-6 text-center"
            >
              <p className="font-source text-text-secondary text-sm italic">
                [Customer testimonial coming soon]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
