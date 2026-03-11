const checklist = [
  "Samsung Galaxy XCover6 Pro (rugged, MIL-STD-810H)",
  "180GB+ pre-loaded offline knowledge library",
  "MIL-SPEC Faraday EMP protection bag",
  "20,000mAh USB-C power bank",
  "Quick-start guide",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg-primary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-16 reveal">
          ONE KIT. EVERYTHING YOU NEED.
        </h2>

        <div className="w-full bg-bg-card border border-accent-brass rounded p-8 md:p-12 text-center reveal">
          <h3 className="font-barlow font-bold text-lg tracking-[0.15em] text-text-primary uppercase mb-6">
            REZONANCE SURVIVAL KIT
          </h3>

          <div className="font-rez-mono text-accent-brass text-5xl md:text-6xl font-medium mb-8">
            $647
          </div>

          <ul className="text-left max-w-md mx-auto mb-10 space-y-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="#4A9E6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M4 9l3.5 3.5L14 5" />
                </svg>
                <span className="font-source text-text-primary text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={process.env.NEXT_PUBLIC_STRIPE_REZONANCE_LINK || "#"}
            className="cta-button inline-block w-full max-w-sm bg-cta-red text-text-primary font-barlow font-semibold text-lg tracking-[0.15em] uppercase px-10 py-4 rounded no-underline text-center"
          >
            ORDER NOW — $647
          </a>

          <p className="font-source text-text-secondary text-sm mt-6">
            Ships within 5-7 business days. Sealed and tested before shipment.
          </p>
        </div>

        <p className="text-center font-source text-text-secondary text-sm mt-8 max-w-lg mx-auto reveal">
          Coming soon: The Travel Edition — a pre-configured travel phone with
          eSIM, offline maps, and privacy tools for international travelers.
          Enter your email below to be first.
        </p>
      </div>
    </section>
  );
}
