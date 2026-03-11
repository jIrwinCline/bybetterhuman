import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border-strong bg-bbh-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-display text-3xl md:text-4xl mb-4">
              By Better Human
            </div>
            <p className="text-sm text-bbh-gray-400 max-w-md leading-relaxed font-mono">
              Cultivating modern projects that create human purpose and business
              during and after an AI economy. This is Preparation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-label text-bbh-gray-400 mb-4">Navigate</div>
            <div className="flex flex-col gap-2">
              {["Mentorship", "Ventures", "Muses", "About"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-bbh-gray-300 hover:text-bbh-white transition-colors font-mono"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-label text-bbh-gray-400 mb-4">Connect</div>
            <div className="flex flex-col gap-2">
              <a href="https://youtube.com/@JacobRising" target="_blank" rel="noopener noreferrer" className="text-sm text-bbh-gray-300 hover:text-bbh-white transition-colors font-mono">
                YouTube
              </a>
              <a href="https://instagram.com/jacobrising" target="_blank" rel="noopener noreferrer" className="text-sm text-bbh-gray-300 hover:text-bbh-white transition-colors font-mono">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-glass mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-label text-bbh-gray-400">
            &copy; {new Date().getFullYear()} By Better Human
          </span>
          <span className="text-label text-bbh-gray-400">
            A Venture Studio for the AI Economy
          </span>
        </div>
      </div>
    </footer>
  );
}
