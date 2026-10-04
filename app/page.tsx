import HeroSection from "@/components/HeroSection";
import MarqueeLogos from "@/components/MarqueeLogos";
import StudioStatement from "@/components/StudioStatement";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <MarqueeLogos />
      <StudioStatement />
      <ServicesSection />
      <ProcessTimeline />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
