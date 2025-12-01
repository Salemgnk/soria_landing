import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SolutionSection from "./components/SolutionSection";
import ScreenshotsSection from "./components/ScreenshotsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SolutionSection />
        <ScreenshotsSection />
        <DownloadSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
