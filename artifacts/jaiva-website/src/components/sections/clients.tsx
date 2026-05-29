import { motion } from "framer-motion";

export function Clients() {
  const clients = ["Hexpertify", "Askabhi Technologies"];

  return (
    <section id="clients" className="py-24 bg-[#0A0A0E] relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Trusted By
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative companies rely on our automation expertise to scale their operations.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full sm:w-1/2 p-8 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden group flex flex-col items-center justify-center min-h-[160px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Client</span>
              <h3 className="text-2xl font-bold text-white font-display relative z-10">{client}</h3>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}