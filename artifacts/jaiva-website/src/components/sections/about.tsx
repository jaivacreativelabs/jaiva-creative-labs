import { motion } from "framer-motion";

export function About() {
  const expertise = [
    { title: "AI Workflow Architecture", desc: "Designing robust, scalable automation architectures from the ground up." },
    { title: "Custom Template Creation", desc: "Building specialized workflow templates that map directly to your operations." },
    { title: "AI Chatbot Deployment", desc: "Implementing intelligent agents for customer support and internal knowledge." },
    { title: "Enterprise Integration Systems", desc: "Connecting disparate software ecosystems into a unified flow." },
    { title: "Process Digitization", desc: "Converting manual, paper-based operations into streamlined digital processes." },
    { title: "Data-Driven Optimization", desc: "Continuous improvement of workflows based on performance analytics." }
  ];

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
            We are Workflow Automation Consultants building{" "}
            <br className="hidden md:block" />
            <span className="text-[#0DCCF2]">intelligent systems</span> that transform how businesses operate.
          </h2>
          <p className="text-[#B8B8C0] text-base sm:text-lg max-w-2xl mt-4 sm:mt-6">
            Our mission is to simplify complex operations using AI, advanced automation platforms, and smart integrations. We help organizations eliminate manual work and accelerate their digital transformation.
          </p>
        </motion.div>
      </div>

      <div className="px-5 sm:px-8 md:px-16 mt-16 sm:mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1F]">
          {expertise.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#09090B] p-6 sm:p-8 hover:bg-[#0D0D10] transition-colors"
            >
              <div className="text-xs text-[#0DCCF2]/60 font-mono mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg font-display">{exp.title}</h3>
              <p className="text-[#B8B8C0] text-sm mt-2 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
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
