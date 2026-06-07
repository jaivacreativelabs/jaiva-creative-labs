import { motion } from "framer-motion";

export function About() {
  const industries = [
    "Manufacturing", "Healthcare", "Education", "Retail & E-commerce",
    "Logistics", "Real Estate", "Finance", "Waste Management", "Startups & SaaS"
  ];

  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section id="about" className="py-20 sm:py-32 md:py-48 bg-[#09090B] overflow-hidden">

      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display leading-tight text-white">
            We Build
            <br />
            <span className="text-[#0DCCF2]">Intelligent Workflow Systems</span>
            <br />
            that transform how your business operates.
          </h2>
          <p className="text-[#B8B8C0] text-base sm:text-lg max-w-2xl mt-4 sm:mt-6">
            Our mission is to simplify complex operations using AI, advanced automation platforms, and smart integrations. We help organizations eliminate manual work and accelerate their digital transformation.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 sm:mt-24 overflow-hidden relative">
        <div className="px-5 sm:px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="uppercase text-xs tracking-[0.2em] text-[#B8B8C0]/50 mb-5 sm:mb-6">
              INDUSTRIES WE SERVE
            </div>
          </div>
        </div>

        <div className="marquee-track">
          {duplicatedIndustries.map((ind, i) => (
            <div key={i} className="px-5 sm:px-8 py-2 sm:py-3 border border-[#1A1A1F] text-[#B8B8C0]/70 text-xs sm:text-sm whitespace-nowrap mx-1 sm:mx-2">
              {ind}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
