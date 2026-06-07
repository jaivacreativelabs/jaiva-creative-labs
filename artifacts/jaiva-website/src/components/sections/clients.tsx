import { motion } from "framer-motion";

export function Clients() {
  const clients = [
    { name: "Hexpertify", tag: "Automated Lead Generation & Brand Mentions" },
    { name: "Askabhi Technologies", tag: "Automated HR Process" },
    { name: "Voogun", tag: "Automated Staffing Workflow" },
  ];

  const reasons = [
    { title: "AI-First Approach", desc: "Leveraging the latest artificial intelligence models to build systems that learn, adapt, and improve." },
    { title: "Industry-Specific Automation", desc: "Tailored solutions built with deep domain expertise for your specific sector's unique challenges." },
    { title: "Scalable Architecture", desc: "Infrastructure designed to handle your growth without requiring complete rebuilds." },
    { title: "End-to-End Consulting", desc: "From initial process mapping to deployment, training, and ongoing maintenance." },
    { title: "Cost-Effective Solutions", desc: "Automation that pays for itself through massive efficiency gains and time savings." }
  ];

  return (
    <section id="clients" className="py-14 sm:py-20 md:py-28 bg-[#09090B] overflow-hidden">
      <div className="px-5 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase text-xs tracking-[0.2em] text-[#B8B8C0]/60 font-medium block text-center mb-8 sm:mb-10">
                TRUSTED BY
              </span>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full flex-wrap">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card px-8 sm:px-10 py-8 sm:py-10 text-center hover:glow-border hover:pulse-glow transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-display">{client.name}</h3>
                  <p className="text-xs text-[#0DCCF2]/60 tracking-wide mt-2 sm:mt-3">{client.tag}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 sm:mt-32 border-t border-[#1A1A1F] pt-16 sm:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-3 sm:mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-white">
                The JAIVA Advantage
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="flex flex-col gap-2 sm:gap-3 group"
                >
                  <div className="font-mono text-xs text-[#0DCCF2]/50">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-white font-semibold font-display text-base sm:text-lg">{reason.title}</h3>
                  <p className="text-[#B8B8C0] text-sm leading-relaxed">{reason.desc}</p>
                  <div className="w-8 h-px bg-[#0DCCF2]/40 mt-1 sm:mt-2 group-hover:w-16 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
