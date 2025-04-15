// src/pages/Index.tsx
import GradientSection from "@/components/GradientSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DonationSection from "@/components/DonationSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Optional: Ensures footer sticks if added later */}
      <GradientSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <AboutUsSection />
      <TestimonialsSection />
      <FAQSection />
      <DonationSection />
      {/* Add Footer component here later if needed */}
    </div>
  );
};

export default Index;