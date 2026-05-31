import { motion } from "framer-motion";
import { SiOpenai, SiZapier, SiGooglecloud, SiAirtable, SiSlack, SiWhatsapp } from "react-icons/si";
import { BrainCircuit, Workflow, Zap, Cloud, MessageSquare } from "lucide-react";

export function AITools() {
  const tools = [
    { icon: BrainCircuit, name: "Claude AI" },
    { icon: Workflow, name: "N8N" },
    { icon: SiOpenai, name: "OpenAI GPT" },
    { icon: SiZapier, name: "Zapier" },
    { icon: Zap, name: "Make.com" },
    { icon: Cloud, name: "Power Automate" },
    { icon: SiGooglecloud, name: "Google Cloud AI" },
    { icon: SiAirtable, name: "Airtable" },
    { icon: SiSlack, name: "Slack" },
    { icon: MessageSquare, name: "Teams" },
    { icon: SiWhatsapp, name: "WhatsApp API" }
  ];

  return (
    <section id="ai-tools" className="py-20 sm:py-32 md:py-40 bg-[#09090B] overflow-hidden">
      <div className="px-5 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto">

          <div className="text-center">
            <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-3 sm:mb-4">
              TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-white">Stack Behind Every Automation</h2>
          </div>

          <div className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {tools.map((tool, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={index}
                className="group glass-card p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 hover:glow-border transition-all duration-300 cursor-default"
              >
                <tool.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8B8C0]/50 group-hover:text-[#0DCCF2] transition-colors duration-300" />
                <span className="text-[10px] sm:text-xs text-[#B8B8C0]/60 group-hover:text-[#B8B8C0] tracking-wide transition-colors text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 relative flex items-center justify-center max-w-sm mx-auto">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A1A1F] to-transparent"></div>
            <span className="bg-[#09090B] px-4 text-[#B8B8C0]/30 text-xs tracking-widest relative z-10">AND MORE</span>
          </div>

        </div>
      </div>
    </section>
  );
}
