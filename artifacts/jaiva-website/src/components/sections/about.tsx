import { motion } from "framer-motion";
import { CheckCircle2, Factory, HeartPulse, GraduationCap, ShoppingCart, Truck, Home, Landmark, Trash2, Rocket } from "lucide-react";

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
    { icon: Factory, name: "Manufacturing" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: ShoppingCart, name: "Retail & E-commerce" },
    { icon: Truck, name: "Logistics" },
    { icon: Home, name: "Real Estate" },
    { icon: Landmark, name: "Finance" },
    { icon: Trash2, name: "Waste Management & Circular Economy" },
    { icon: Rocket, name: "Startups & SaaS Companies" }
  ];

  const reasons = [
    "Industry-specific automation solutions",
    "Custom-built workflows",
    "Fast deployment",
    "Scalable architecture",
    "AI-first approach",
    "Cost-effective automation",
    "End-to-end consulting & support"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Empowering Businesses Through Automation & AI
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are a team of Workflow Automation Consultants specializing in building intelligent automation systems for businesses across industries. Our mission is to simplify complex operations using AI, automation platforms, and smart integrations. From customer support automation to enterprise workflow orchestration, we help organizations eliminate manual work and accelerate digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-display">Our Expertise</h3>
            <ul className="space-y-4">
              {expertise.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-display">Why Choose Us</h3>
            <ul className="space-y-4">
              {reasons.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-10 font-display">Industries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl bg-black/40 border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-colors group">
                <ind.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-3 transition-colors" />
                <span className="text-sm font-medium text-center text-white/80">{ind.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}