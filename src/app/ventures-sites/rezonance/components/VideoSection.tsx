export default function VideoSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center reveal">
        <p className="font-barlow font-semibold text-sm tracking-[0.2em] text-accent-brass uppercase text-center mb-8">
          WATCH: WHY 23 MILLION AMERICANS ARE PREPARING — AND WHAT THEY&apos;RE MISSING
        </p>

        {/* Video placeholder */}
        <div className="w-full relative aspect-video bg-bg-card border border-border-card rounded overflow-hidden">
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-text-secondary flex items-center justify-center cursor-pointer hover:border-accent-brass transition-colors group">
              <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M4 2L26 16L4 30V2Z"
                  stroke="#8A8680"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="group-hover:stroke-accent-brass transition-colors"
                />
              </svg>
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-sm text-center mt-6 font-source">
          Prefer to read? Keep scrolling. &#8595;
        </p>
      </div>
    </section>
  );
}
