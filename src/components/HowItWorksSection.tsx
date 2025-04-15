// src/components/HowItWorksSection.tsx
import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"> {/* Different background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          How the Endowment Works
        </h2>
        {/* Add feature cards/list here */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="p-6 border rounded-lg dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Sustainable Funding</h3>
                <p className="text-gray-600 dark:text-gray-400">Donations build a permanent fund. Only investment returns are spent, ensuring perpetual support.</p>
            </div>
             <div className="p-6 border rounded-lg dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Targeted Impact</h3>
                <p className="text-gray-600 dark:text-gray-400">Funds are directed to crucial but under-resourced projects and initiatives identified via data and community input.</p>
            </div>
             <div className="p-6 border rounded-lg dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Community Governed</h3>
                <p className="text-gray-600 dark:text-gray-400">Donor member involvment is critical to all distribution and governance processes.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;