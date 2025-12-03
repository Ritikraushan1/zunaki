import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
      </div>
      <AboutSection />
      <ServicesSection />
    </>
  );
}
