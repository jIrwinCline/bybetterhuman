const items = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="16" height="24" rx="2" />
        <line x1="14" y1="25" x2="18" y2="25" />
        <line x1="12" y1="8" x2="20" y2="8" />
      </svg>
    ),
    title: "THE PHONE",
    description:
      "Samsung Galaxy XCover6 Pro — MIL-STD-810H rugged, IP68 waterproof, 6.6\" display, removable battery. Every app installed. Every database loaded. 180GB+ of offline knowledge, searchable instantly.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="20" height="20" rx="2" />
        <path d="M6 12h20M6 20h20" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="10" y1="3" x2="10" y2="6" />
        <line x1="22" y1="3" x2="22" y2="6" />
      </svg>
    ),
    title: "THE FARADAY BAG",
    description:
      "MIL-SPEC EMP shielding. Blocks all signals — cellular, WiFi, GPS, Bluetooth. Protects against EMPs, solar flares, and electronic surveillance. Your device stays safe until you need it.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="6" width="12" height="20" rx="2" />
        <line x1="14" y1="10" x2="18" y2="10" />
        <path d="M16 2v4M16 26v4" />
        <line x1="14" y1="18" x2="18" y2="18" />
        <line x1="16" y1="16" x2="16" y2="20" />
      </svg>
    ),
    title: "THE POWER BANK",
    description:
      "20,000mAh USB-C. Charges the phone 4-5 times over. Because when the power goes out, outlets are the first thing you lose.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-bg-primary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-6 reveal">
          ALL OF HUMAN KNOWLEDGE. ZERO BARS REQUIRED.
        </h2>

        <div className="w-full max-w-2xl mx-auto aspect-[16/9] rounded overflow-hidden mb-16 reveal">
          <img
            src="/images/rezonance/solution-field.png"
            alt="Hand holding Rezonance phone with offline maps in the rain"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Three columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border-card rounded p-8 card-glow reveal"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-barlow font-semibold text-lg tracking-[0.1em] text-text-primary uppercase mb-4 text-center">
                {item.title}
              </h3>
              <p className="font-source text-text-secondary text-base leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-source text-accent-brass text-lg reveal">
          Arrives sealed. Stored for years. Ready in seconds.
        </p>
      </div>
    </section>
  );
}
