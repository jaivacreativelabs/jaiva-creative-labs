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
    { icon: Cloud, name: "Microsoft Power Automate" },
    { icon: SiGooglecloud, name: "Google Cloud AI" },
    { icon: SiAirtable, name: "Airtable Automation" },
    { icon: SiSlack, name: "Slack Automation" },
    { icon: MessageSquare, name: "Teams Automation" },
    { icon: SiWhatsapp, name: "WhatsApp Business API" }
  ];

  return (
    <section id="ai-tools" className="py-32 bg-[#09090B]">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-4">
            PLATFORMS & TOOLS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
            Advanced AI & Automation Platforms We Use
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-16">
          {tools.map((tool, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              key={index} 
              className="group border border-[#1A1A1F] px-8 py-5 flex flex-col items-center gap-3 rounded-sm bg-[#0D0D10] hover:border-[#0DCCF2]/30 transition-all min-w-[140px]"
            >
              <tool.icon className="w-7 h-7 text-[#B8B8C0]/60 group-hover:text-[#0DCCF2] transition-colors" />
              <span className="text-xs text-[#B8B8C0]/60 tracking-wide group-hover:text-[#B8B8C0] transition-colors font-medium text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}