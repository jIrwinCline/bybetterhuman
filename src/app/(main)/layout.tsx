import { Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} noise gradient-mesh`}>
      {/* Left lateral bar */}
      <div className="fixed left-0 top-0 bottom-0 w-[4vw] md:w-[2vw] bg-white/10 backdrop-blur-md border-r border-white/20 z-30 flex items-center justify-center pointer-events-none">
        <span className="text-bbh-white/50 text-[0.5rem] md:text-[0.6rem] font-bold font-mono uppercase tracking-[0.35em] whitespace-nowrap rotate-180 [writing-mode:vertical-lr]">
          Better Human&ensp;&ensp;Better Human&ensp;&ensp;Better Human&ensp;&ensp;Better Human
        </span>
      </div>

      {/* Right lateral bar */}
      <div className="fixed right-0 top-0 bottom-0 w-[4vw] md:w-[2vw] bg-white/10 backdrop-blur-md border-l border-white/20 z-30 flex items-center justify-center pointer-events-none">
        <span className="text-bbh-white/50 text-[0.5rem] md:text-[0.6rem] font-bold font-mono uppercase tracking-[0.35em] whitespace-nowrap [writing-mode:vertical-lr]">
          Better Human&ensp;&ensp;Better Human&ensp;&ensp;Better Human&ensp;&ensp;Better Human
        </span>
      </div>

      <Navigation />
      <main className="min-h-screen pt-16 mx-[4vw] md:mx-[2vw]">{children}</main>
      <div className="mx-[4vw] md:mx-[2vw]">
        <Footer />
      </div>
    </div>
  );
}
