import { motion } from "framer-motion";
import { Workflow, Bot, FileCode2, Globe, Building2, Layers } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation Consulting",
      description: "Comprehensive workflow analysis and automation strategy to streamline your core business operations.",
      features: ["Business Process Mapping", "Automation Strategy", "System Integration", "Automation Audits"]
    },
    {
      icon: Bot,
      title: "AI-Powered Business Automation",
      description: "Intelligent systems that learn and adapt, taking over repetitive cognitive tasks across your organization.",
      features: ["AI Chatbots", "Data Extraction", "Decision Workflows", "Knowledge Base Systems"]
    },
    {
      icon: FileCode2,
      title: "Custom Workflow Template Creation",
      description: "Tailored automation templates built specifically for your department's unique requirements.",
      features: ["HR Automation", "CRM Workflows", "Invoice & Finance", "Sales Funnels"]
    },
    {
      icon: Globe,
      title: "Website & App Automation Integration",
      description: "Seamlessly connect your customer-facing platforms with your backend operational systems.",
      features: ["API Integrations", "Payment Gateways", "Email Marketing", "Cloud Databases"]
    },
    {
      icon: Building2,
      title: "Enterprise Process Automation",
      description: "Large-scale automation solutions designed for complex, multi-department enterprise environments.",
      features: ["ERP Integration", "Approval Automation", "Internal Ticketing", "Analytics Dashboards"]
    },
    {
      icon: Layers,
      title: "Industry-Specific Automation Solutions",
      description: "Specialized workflows built with deep understanding of your industry's specific challenges.",
      features: ["Manufacturing Tracking", "Healthcare Appointments", "E-Commerce Sync", "Logistics Flow"]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-32 md:py-40 bg-[#0D0D10] overflow-hidden">
      <div className="px-5 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 sm:mb-20 text-left">
            <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-3 sm:mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-white">
              Services Built For Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-6 sm:p-8 rounded-sm hover:glow-border transition-all duration-500 group relative overflow-hidden cursor-default"
              >
                <span className="absolute inset-0 bg-[#0DCCF2]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></span>

                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#1A1A1F] flex items-center justify-center group-hover:border-[#0DCCF2]/40 transition-colors bg-[#09090B]">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0DCCF2]/70 group-hover:text-[#0DCCF2] transition-colors" />
                </div>

                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold font-display text-white group-hover:text-[#0DCCF2] transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-[#B8B8C0] text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>

                <div className="mt-4 sm:mt-6 space-y-2 relative z-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <div className="w-[3px] h-[3px] bg-[#0DCCF2]/60 shrink-0" />
                      <span className="text-[#B8B8C0]/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0DCCF2]/0 group-hover:bg-[#0DCCF2]/30 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
