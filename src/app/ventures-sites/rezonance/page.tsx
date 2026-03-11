"use client";

import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import ProblemStats from "./components/ProblemStats";
import Agitation from "./components/Agitation";
import Solution from "./components/Solution";
import KnowledgeLibrary from "./components/KnowledgeLibrary";
import SoftwareSuite from "./components/SoftwareSuite";
import WhyThisPhone from "./components/WhyThisPhone";
import TrustBar from "./components/TrustBar";
import Pricing from "./components/Pricing";
import TravelTeaser from "./components/TravelTeaser";
import BrandBlock from "./components/BrandBlock";
import Footer from "./components/Footer";

export default function RezonancePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <ProblemStats />
      <Agitation />
      <Solution />
      <KnowledgeLibrary />
      <SoftwareSuite />
      <WhyThisPhone />
      <TrustBar />
      <Pricing />
      <TravelTeaser />
      <BrandBlock />
      <Footer />
    </>
  );
}
