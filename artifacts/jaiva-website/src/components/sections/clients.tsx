import { motion } from "framer-motion";

export function Clients() {
  const clients = ["Hexpertify", "Askabhi Technologies"];

  return (
    <section id="clients" className="py-24 bg-[#0D0D10] border-y border-[#1A1A1F] flex flex-col items-center text-center">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="uppercase text-xs tracking-[0.2em] text-[#B8B8C0]/60 font-medium block">
            TRUSTED BY
          </span>
        </motion.div>

        <div className="flex justify-center gap-8 mt-10 flex-wrap">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="border border-[#1A1A1F] px-16 py-10 rounded-sm bg-[#09090B] hover:border-[#0DCCF2]/30 transition-all min-w-[280px]"
            >
              <h3 className="text-xl font-semibold text-white font-display">{client}</h3>
              <p className="text-xs text-[#B8B8C0]/60 tracking-wide mt-2">CLIENT</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}