// src/components/AboutUsSection.tsx
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About the Foundation
        </h2>
        {/* Add details about entity, governance, team */}
        <div className="text-center max-w-3xl mx-auto">
             <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The Open Source Endowment Foundation is a 501(c)(3)(status pending) dedicated to the long-term health of the open source ecosystem.
            </p>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Governance</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">We operate with radical transparency and community oversight. Key decisions are guided by our donors and the broader OSS community. [Link to Governance Docs]</p>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Our Team</h3>
             <p className="text-gray-600 dark:text-gray-400">[Placeholder for team info or link]</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;