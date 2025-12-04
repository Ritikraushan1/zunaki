import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CommitmentsSection from "./components/CommitmentsSection";
import ProductsSection from "./components/ProductsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
      <CommitmentsSection />
      <ProductsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
