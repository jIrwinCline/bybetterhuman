"use client";

export default function TravelTeaser() {
  return (
    <section className="bg-[#0F0F0F] py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl flex flex-col items-center text-center reveal">
        <h2 className="font-barlow font-bold text-xl md:text-2xl tracking-[0.1em] text-text-primary uppercase mb-4">
          THE TRAVEL EDITION IS COMING
        </h2>

        <p className="font-source text-text-secondary text-base leading-relaxed mb-8 max-w-lg">
          A clean, pre-configured phone for international travel. Leave your
          personal device at home. Arrive with maps, translation, and eSIM
          connectivity — and nothing to lose if it&apos;s stolen.
        </p>

        <form action="#" className="w-full flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 bg-bg-card border border-border-card rounded px-4 py-3 font-source text-text-primary text-base placeholder-text-secondary outline-none focus:border-accent-brass transition-colors"
          />
          <button
            type="submit"
            className="font-barlow font-semibold text-sm tracking-[0.15em] uppercase px-6 py-3 rounded border border-accent-brass text-accent-brass bg-transparent hover:bg-accent-brass hover:text-bg-primary transition-colors cursor-pointer"
          >
            NOTIFY ME
          </button>
        </form>
      </div>
    </section>
  );
}
