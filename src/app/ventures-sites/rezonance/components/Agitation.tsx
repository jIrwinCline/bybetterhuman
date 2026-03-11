const scenarios = [
  {
    situation: "Your child has a 104\u00B0 fever at 2am",
    consequence:
      "You can't Google symptoms. You can't call poison control. You can't look up dosage charts.",
  },
  {
    situation: "A storm knocked out power for 3 days",
    consequence:
      "You can't access maps, weather updates, or instructions for purifying water from your tap.",
  },
  {
    situation:
      "You need to identify an edible plant, tie a specific knot, or treat a wound",
    consequence:
      "The survival manual you bookmarked is on a server 2,000 miles away.",
  },
  {
    situation: "You need to navigate without GPS",
    consequence: "Your offline maps app? You never downloaded the maps.",
  },
];

export default function Agitation() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-16 reveal">
          NO SIGNAL. NO SEARCH. NO ANSWERS.
        </h2>

        <div className="w-full space-y-0 reveal">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-6 border-b border-border-card last:border-b-0"
            >
              <div className="font-source font-semibold text-text-primary text-lg text-center">
                {s.situation}
              </div>
              <div className="font-source text-text-secondary text-base leading-relaxed text-center">
                {s.consequence}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <blockquote className="font-rez-playfair italic text-accent-brass text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            &ldquo;Knowledge doesn&apos;t expire. But your access to it can
            vanish in an instant.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
