import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ProblemStats from "../components/ProblemStats";
import Agitation from "../components/Agitation";
import VideoBreakdown from "../components/VideoBreakdown";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function OffersPage() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemStats />
      <Agitation />
      <VideoBreakdown />
      <CaseStudies />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
