import { motion } from "framer-motion";

export function Clients() {
  const clients = ["Hexpertify", "Askabhi Technologies"];
  
  const reasons = [
    { title: "AI-First Approach", desc: "Leveraging the latest artificial intelligence models to build systems that learn, adapt, and improve." },
    { title: "Industry-Specific Automation", desc: "Tailored solutions built with deep domain expertise for your specific sector's unique challenges." },
    { title: "Scalable Architecture", desc: "Infrastructure designed to handle your growth without requiring complete rebuilds." },
    { title: "Fast Deployment (48hr avg)", desc: "Rapid prototyping and implementation to deliver value and ROI faster." },
    { title: "End-to-End Consulting", desc: "From initial process mapping to deployment, training, and ongoing maintenance." },
    { title: "Cost-Effective Solutions", desc: "Automation that pays for itself through massive efficiency gains and time savings." }
  ];

  return (
    <section id="clients" className="py-32 md:py-40 bg-[#09090B] overflow-hidden">
      <div className="container mx-auto px-8 md:px-16">
        
        {/* Part A: Trusted By */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase text-xs tracking-[0.2em] text-[#B8B8C0]/60 font-medium block text-center mb-10">
              TRUSTED BY
            </span>
          </motion.div>

          <div className="flex justify-center gap-8 flex-wrap">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card px-16 py-12 text-center hover:glow-border hover:pulse-glow transition-all duration-300 min-w-[280px]"
              >
                <h3 className="text-xl font-semibold text-white font-display">{client}</h3>
                <p className="text-xs text-[#B8B8C0]/50 tracking-[0.2em] uppercase mt-3">CLIENT SINCE 2024</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part B: Why Choose Us */}
        <div className="mt-32 border-t border-[#1A1A1F] pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              The JAIVA Advantage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex flex-col gap-3 group"
              >
                <div className="font-mono text-xs text-[#0DCCF2]/50">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white font-semibold font-display text-lg">{item.title}</h3>
                <p className="text-[#B8B8C0] text-sm leading-relaxed">{item.desc}</p>
                <div className="w-8 h-px bg-[#0DCCF2]/40 mt-2 group-hover:w-16 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}