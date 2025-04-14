import React from "react";
import Header from "@/components/Header";
import GradientSection from "@/components/GradientSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <GradientSection />
      <Footer />
    </div>
  );
};

export default Index;
