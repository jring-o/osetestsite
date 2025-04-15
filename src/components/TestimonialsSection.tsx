// src/components/TestimonialsSection.tsx
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What People Are Saying
        </h2>
        {/* Add testimonial cards/slider */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="p-6 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600">
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">"A vital initiative for the sustainability of the tools we rely on every day."</p>
                <footer className="text-gray-600 dark:text-gray-400">- Placeholder Name, OSS Developer</footer>
            </blockquote>
             <blockquote className="p-6 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600">
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">"The endowment model is the right approach for long-term stability in open source funding."</p>
                <footer className="text-gray-600 dark:text-gray-400">- Placeholder Name, Tech Leader</footer>
            </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;