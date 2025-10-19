import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MissionSection } from "@/components/MissionSection";
import { PolesSection } from "@/components/PolesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <PolesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
