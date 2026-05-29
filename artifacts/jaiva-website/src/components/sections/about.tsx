import { motion } from "framer-motion";

export function About() {
  const expertise = [
    "AI workflow architecture",
    "Custom automation template creation",
    "Intelligent business process automation",
    "AI chatbot deployment",
    "Enterprise integration systems",
    "Data-driven workflow optimization"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Education",
    "Retail & E-commerce",
    "Logistics",
    "Real Estate",
    "Finance",
    "Waste Management",
    "Startups & SaaS"
  ];

  const reasons = [
    { title: "Industry-specific automation solutions", desc: "Tailored to your exact business needs" },
    { title: "Custom-built workflows", desc: "Designed for your team's specific processes" },
    { title: "Fast deployment", desc: "Get up and running in weeks, not months" },
    { title: "Scalable architecture", desc: "Grows alongside your business operations" },
    { title: "AI-first approach", desc: "Leveraging the latest AI technologies" },
    { title: "Cost-effective automation", desc: "High ROI on every process automated" },
    { title: "End-to-end consulting & support", desc: "We are with you every step of the way" }
  ];

  return (
    <section id="about" className="py-32 bg-[#09090B]">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-4">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white max-w-2xl">
            Empowering Businesses Through Automation & AI
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-[#B8B8C0] text-lg leading-relaxed mb-8">
              We are a team of Workflow Automation Consultants specializing in building intelligent automation systems for businesses across industries. Our mission is to simplify complex operations using AI, automation platforms, and smart integrations. From customer support automation to enterprise workflow orchestration, we help organizations eliminate manual work and accelerate digital transformation.
            </p>
            <div className="space-y-4">
              {expertise.map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <span className="text-[#0DCCF2] font-bold">—</span>
                  <span className="text-[#B8B8C0] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 font-display">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="border border-[#1A1A1F] p-4 text-sm text-[#B8B8C0] hover:border-[#0DCCF2]/30 hover:text-white transition-all rounded-sm">
                  {ind}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white mb-8 font-display">Why Choose Us</h3>
          <div className="flex flex-wrap gap-8">
            {reasons.map((item, i) => (
              <div key={i} className="border-l-2 border-[#0DCCF2] pl-4 py-1 min-w-[200px]">
                <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-[#B8B8C0] text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}