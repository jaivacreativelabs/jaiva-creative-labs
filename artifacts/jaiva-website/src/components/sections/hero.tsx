import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Brain, Workflow, LineChart, Code2 } from "lucide-react";

export function Hero() {
  const expertise = [
    "Workflow Automation Consulting",
    "AI-Powered Business Automation",
    "Custom Automation Templates",
    "CRM & ERP Integrations",
    "AI Chatbots & Agents",
    "No-Code & Low-Code Automation",
    "Process Digitization",
    "Business Intelligence Automation"
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1F_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1F_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-8"
        >
          <Bot className="w-4 h-4" />
          <span>Next-Generation AI Consulting</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white max-w-4xl mb-6 leading-tight"
        >
          Transform Your Business with <span className="text-primary relative inline-block">
            Intelligent Workflow Automation
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed"
        >
          We help businesses automate operations, customer engagement, approvals, reporting, AI-driven workflows, and repetitive processes using advanced automation platforms and AI technologies. From startups to enterprises, we design scalable automation systems that save time, reduce costs, and improve efficiency across every industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a href="#contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
              Get Free Consultation
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 hover:bg-white/5 bg-black/20 backdrop-blur-sm">
              Book Demo
            </Button>
          </a>
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-2 sm:ml-4 mt-4 sm:mt-0">
            Start Your Automation Journey <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-5xl"
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">Our Expertise</p>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-white/80 hover:bg-white/10 hover:border-primary/50 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}