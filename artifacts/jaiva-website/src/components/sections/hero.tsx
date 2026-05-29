import { motion } from "framer-motion";

export function Hero() {
  const tags = [
    "Workflow Automation Consulting",
    "AI-Powered Business Automation",
    "Custom Automation Templates",
    "CRM & ERP Integrations",
    "AI Chatbots & Agents",
    "No-Code Automation",
    "Process Digitization"
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full min-h-screen flex items-center bg-[#09090B] grid-bg"
    >
      <div className="container mx-auto px-8 md:px-16 pt-24 pb-16 max-w-3xl ml-0">
        <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block">
          WORKFLOW AUTOMATION & AI CONSULTING
        </span>
        
        <h1 className="mt-6 text-5xl md:text-7xl font-bold font-display leading-[1.1] text-white">
          Transform Your Business <span className="text-white">with</span> <span className="text-[#0DCCF2]">Intelligent Workflow</span> <span className="text-white">Automation</span>
        </h1>
        
        <p className="mt-6 max-w-xl text-[#B8B8C0] text-lg leading-relaxed">
          We help businesses automate operations, customer engagement, approvals, reporting, AI-driven workflows, and repetitive processes using advanced automation platforms and AI technologies. From startups to enterprises, we design scalable automation systems that save time, reduce costs, and improve efficiency across every industry.
        </p>
        
        <div className="mt-10 flex items-center gap-4">
          <a href="#contact" className="bg-[#0DCCF2] text-[#09090B] font-semibold tracking-wide px-8 py-3 rounded-none hover:bg-[#09B8DB] transition-colors inline-block">
            Get Free Consultation
          </a>
          <a href="#contact" className="border border-[#1A1A1F] text-white font-medium tracking-wide px-8 py-3 rounded-none hover:border-[#0DCCF2]/40 transition-colors inline-block">
            Book Demo
          </a>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span key={index} className="border border-[#1A1A1F] text-[#B8B8C0] text-xs tracking-wide px-4 py-2 rounded-none">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}