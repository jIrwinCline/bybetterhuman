import Navbar from "./components/Navbar";
import HeroLead from "./components/HeroLead";
import TrustBar from "./components/TrustBar";
import ProblemStats from "./components/ProblemStats";
import Agitation from "./components/Agitation";
import ResultsShowcase from "./components/ResultsShowcase";
import MissionStatement from "./components/MissionStatement";
import OfferStack from "./components/OfferStack";
import VideoBreakdown from "./components/VideoBreakdown";
import Process from "./components/Process";
import IndustrySpotlights from "./components/IndustrySpotlights";
import FAQ from "./components/FAQ";
import LeadCapture from "./components/LeadCapture";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { leadGenFaqItems, leadGenProcessSteps } from "./data/stats";

const navLinks = [
  { label: "RESULTS", href: "#results" },
  { label: "HOW IT WORKS", href: "#process" },
  { label: "INDUSTRIES", href: "#industries" },
  { label: "APPLY NOW", href: "#apply" },
];

const footerLinks = [
  { label: "Results", href: "#results" },
  { label: "How It Works", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Apply", href: "#apply" },
];

export default function Home() {
  return (
    <main className="noise">
      <Navbar links={navLinks} ctaText="Apply Now" ctaHref="#apply" />
      <HeroLead />
      <TrustBar />
      <ProblemStats />
      <Agitation />
      <ResultsShowcase />
      <MissionStatement />
      <OfferStack />
      {/* <VideoBreakdown /> — uncomment when video is ready */}
      <Process steps={leadGenProcessSteps} />
      <IndustrySpotlights />
      <FAQ
        items={leadGenFaqItems}
        subtitle="We know you have questions. Here are straight answers to the ones we hear most."
      />
      <LeadCapture />
      <FinalCTA
        ctaHref="#apply"
        ctaText="Apply Now"
        description="We onboard 8 new clients per month. That's it. When we're full, we close applications until a spot opens. If you're serious about growing your business, don't wait."
        tagline="8 spots per month. Real team. Real results."
        microDetails={[
          "100% U.S.-based team",
          "Ads live within 7 days",
          "Weekly reporting from day one",
        ]}
      />
      <Footer links={footerLinks} />
    </main>
  );
}
