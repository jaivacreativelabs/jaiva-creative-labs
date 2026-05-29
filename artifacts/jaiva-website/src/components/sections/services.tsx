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
    <section id="services" className="py-32 bg-[#0D0D10]">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-4">
            SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="border border-[#1A1A1F] bg-[#09090B] p-8 rounded-sm hover:border-[#0DCCF2]/30 transition-all duration-300 group"
            >
              <service.icon className="w-8 h-8 text-[#0DCCF2]" />
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#0DCCF2] transition-colors font-display">{service.title}</h3>
              <p className="mt-3 text-[#B8B8C0] text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1 h-1 bg-[#0DCCF2] mt-1.5 shrink-0" />
                    <span className="text-[#B8B8C0] text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}