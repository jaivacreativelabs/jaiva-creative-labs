import { motion } from "framer-motion";
import { Workflow, BrainCircuit, Code, Globe, Building2, Briefcase } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation Consulting",
      description: "Business Process Mapping, Automation Strategy, Workflow Design, System Integration, Automation Audits, AI Workflow Consulting",
    },
    {
      icon: BrainCircuit,
      title: "AI-Powered Business Automation",
      description: "AI Chatbots, AI Voice Assistants, AI Email Automation, AI Data Extraction, AI Knowledge Base Systems, AI Decision Workflows",
    },
    {
      icon: Code,
      title: "Custom Workflow Template Creation",
      description: "HR Automation Templates, CRM Automation, Lead Management Systems, Invoice & Finance Automation, Customer Support Workflows, Sales Funnel Automation, Procurement Approval Systems, Inventory Automation",
    },
    {
      icon: Globe,
      title: "Website & App Automation Integration",
      description: "Website Forms to CRM, WhatsApp Automation, Payment Gateway Automation, Email Marketing Automation, API Integrations, Cloud Database Connectivity",
    },
    {
      icon: Building2,
      title: "Enterprise Process Automation",
      description: "ERP Integration, Multi-Department Workflows, Approval Automation, Internal Ticketing Systems, Dashboard & Analytics Automation, Cloud Infrastructure Automation",
    },
    {
      icon: Briefcase,
      title: "Industry-Specific Automation Solutions",
      description: "Manufacturing (Production Tracking, Inventory), Healthcare (Appointments, Patient Communication), Education (Enrollment, AI Learning), E-Commerce (Order Processing, Inventory Sync)",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0E] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)_0%,transparent_50%)] opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive automation and AI consulting tailored to streamline every facet of your business.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:text-primary transition-colors text-white/70">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-display leading-tight">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}