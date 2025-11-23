import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatIsSoriaSection from "./components/WhatIsSoriaSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhySoriaSection from "./components/WhySoriaSection";
import ParentsSection from "./components/ParentsSection";
import UseCasesSection from "./components/UseCasesSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSoriaSection />
        <HowItWorksSection />
        <WhySoriaSection />
        <ParentsSection />
        <UseCasesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
