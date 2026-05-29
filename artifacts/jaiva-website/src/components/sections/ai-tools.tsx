import { motion } from "framer-motion";
import { SiOpenai, SiZapier, SiGooglecloud, SiAirtable, SiSlack, SiWhatsapp } from "react-icons/si";
import { BrainCircuit, Workflow, Zap, Cloud, MessageSquare, Bot } from "lucide-react";

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
    <section id="ai-tools" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Advanced AI & Automation Platforms We Use
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage industry-leading tools to build robust, scalable, and intelligent workflows.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative py-8 overflow-hidden flex flex-col items-center">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl px-4 relative z-0">
            {tools.map((tool, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index} 
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-primary/30 transition-all cursor-default"
              >
                <tool.icon className="w-6 h-6 text-white/70" />
                <span className="text-white/80 font-medium whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}