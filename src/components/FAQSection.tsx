// src/components/FAQSection.tsx
import React from 'react';
// You might want to use an Accordion component from shadcn/ui later
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>
        {/* Replace with Accordion later */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg dark:text-white">Why an endowment model?</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Endowments provide perpetual funding stability, unlike one-off donations or grants, ensuring critical infrastructure is maintained indefinitely.</p>
          </div>
           <div>
            <h3 className="font-semibold text-lg dark:text-white">How are projects selected for funding?</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">We use a data-driven approach combined with community input to identify high-impact, under-resourced projects. Our selection algorithm is open source. [Link]</p>
          </div>
           <div>
            <h3 className="font-semibold text-lg dark:text-white">Is my donation tax-deductible?</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">[Explain current status - e.g., "We are in the process of applying for 501(c)(3) status..." or "Yes, donations are..."]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;