// src/components/DonationSection.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const DonationSection: React.FC = () => {
  return (
    <section id="donate" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-purple-100 dark:from-gray-800 dark:to-purple-900"> {/* Example gradient */}
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Invest in the Future of Open Source
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your contribution helps build a permanent foundation for the digital world. Join us in securing the future of open source.
        </p>
        {/* Add donation form elements or link here */}
        {/* Simple Button Example */}
        <Button
            size="lg"
            className="text-lg font-medium px-10 py-8 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all shadow-xl hover:scale-105 duration-300"
            // onClick={() => { /* Link to donation platform or open modal */ }}
        >
            <Heart className="mr-2 h-6 w-6" />
            Donate Now
        </Button>
         <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">OSE is a US Based 501(c)(3)(status pending)</p>
      </div>
    </section>
  );
};

export default DonationSection;