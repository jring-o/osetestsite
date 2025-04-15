// src/components/ProblemSolutionSection.tsx
import React from 'react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900"> {/* Example background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          The Digital World runs on Fragile Foundations
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Open source software is the invisible engine powering our modern lives, yet much of it relies on unpaid volunteers, unpredictable funding, and tenuous coordination infrastructure. This creates significant risks.
        </p>
        {/* More content here: Problem details, Solution intro */}
         <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Solution: The Open Source Endowment</h3>
             <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A permanent, community-governed fund providing stable, long-term resources to the critical open source projects we all depend on.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;