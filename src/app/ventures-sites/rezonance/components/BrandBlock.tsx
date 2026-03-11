export default function BrandBlock() {
  return (
    <section className="bg-bg-primary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl text-center reveal">
        <div className="brass-divider mb-12" />

        <p className="font-source text-text-primary text-lg mb-2">
          Rezonance Mobile is a{" "}
          <span className="text-accent-brass">bybetterhuman</span> venture.
        </p>
        <p className="font-source text-text-secondary text-base mb-2">
          We build tools for people who refuse to be dependent on systems they
          can&apos;t control.
        </p>
        <p className="font-rez-playfair italic text-text-primary text-lg mt-6 mb-8">
          Self-reliance isn&apos;t paranoia. It&apos;s engineering.
        </p>

        <a
          href="https://instagram.com/bybetterhuman"
          target="_blank"
          rel="noopener noreferrer"
          className="font-rez-mono text-accent-brass text-sm hover:underline no-underline"
        >
          @bybetterhuman
        </a>
      </div>
    </section>
  );
}
