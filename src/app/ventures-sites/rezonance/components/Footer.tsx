const footerLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "The Solution", href: "#solution" },
  { label: "What's Inside", href: "#knowledge" },
  { label: "Order Now", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-card py-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8 text-center md:text-left">
          {/* Left */}
          <div>
            <p className="font-barlow font-bold text-sm tracking-[0.2em] text-text-primary uppercase mb-1">
              REZONANCE MOBILE
            </p>
            <p className="font-source text-text-secondary text-sm">
              A bybetterhuman venture
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-source text-text-secondary text-sm hover:text-accent-brass transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="font-source text-text-secondary text-sm">
              Questions?{" "}
              <a
                href="mailto:hello@rezonancemobile.com"
                className="text-accent-brass hover:underline no-underline"
              >
                hello@rezonancemobile.com
              </a>
            </p>
          </div>
        </div>

        <div className="w-full border-t border-border-card pt-6 text-center">
          <p className="font-source text-text-secondary text-xs">
            &copy; 2026 bybetterhuman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
