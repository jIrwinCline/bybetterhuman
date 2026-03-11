import { knowledgeCards } from "../data/knowledgeCards";

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="11" />
      <ellipse cx="14" cy="14" rx="5" ry="11" />
      <line x1="3" y1="14" x2="25" y2="14" />
    </svg>
  ),
  medical: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="20" height="14" rx="2" />
      <path d="M14 12v6M11 15h6" />
      <path d="M10 8V6a4 4 0 018 0v2" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3L4 8v6c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V8L14 3z" />
    </svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4a6 6 0 00-7.5 7.5L5 17l-1 6 6-1 5.5-5.5A6 6 0 0018 4z" />
    </svg>
  ),
  map: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6l7-3 6 3 7-3v19l-7 3-6-3-7 3V6z" />
      <line x1="11" y1="3" x2="11" y2="22" />
      <line x1="17" y1="6" x2="17" y2="25" />
    </svg>
  ),
  book: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h8a4 4 0 014 0h8v18h-8a2 2 0 00-4 0H4V4z" />
      <line x1="14" y1="4" x2="14" y2="22" />
    </svg>
  ),
  knot: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8c4-4 12-4 16 0" />
      <path d="M6 20c4 4 12 4 16 0" />
      <path d="M10 8c0 6-4 6-4 12" />
      <path d="M18 8c0 6 4 6 4 12" />
    </svg>
  ),
  qa: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="20" height="16" rx="2" />
      <path d="M4 20l5-4h15" />
      <circle cx="10" cy="12" r="1" fill="#8A8680" />
      <circle cx="14" cy="12" r="1" fill="#8A8680" />
      <circle cx="18" cy="12" r="1" fill="#8A8680" />
    </svg>
  ),
};

export default function KnowledgeLibrary() {
  return (
    <section id="knowledge" className="bg-bg-secondary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-16 reveal">
          12,000 YEARS OF HUMAN KNOWLEDGE. ONE DEVICE.
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {knowledgeCards.map((card, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border-card rounded p-6 card-glow reveal"
            >
              <div className="mb-3 flex justify-center">{icons[card.icon]}</div>
              <h3 className="font-barlow font-semibold text-base tracking-[0.08em] text-text-primary uppercase mb-2 text-center">
                {card.title}
              </h3>
              <p className="font-source text-text-secondary text-sm leading-relaxed mb-4 text-center">
                {card.description}
              </p>
              <div className="text-center">
                <span className="font-rez-mono text-data-blue text-sm">
                  {card.size}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-source text-accent-brass text-lg mt-12 reveal">
          Total: Over 180GB of curated offline knowledge — more than most public libraries.
        </p>
      </div>
    </section>
  );
}
