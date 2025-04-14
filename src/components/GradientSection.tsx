
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const GradientSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500 animate-gradient-move"
        style={{ backgroundSize: "400% 400%" }}
      />
      <div className="relative z-10 text-center">
        <Button 
          size="lg" 
          className="text-lg font-medium px-10 py-8 rounded-full bg-white/90 text-black hover:bg-white transition-all shadow-xl hover:scale-105 duration-300"
        >
          <Heart className="mr-2 h-6 w-6 text-pink-500" />
          Donate
        </Button>
      </div>
    </section>
  );
};

export default GradientSection;
