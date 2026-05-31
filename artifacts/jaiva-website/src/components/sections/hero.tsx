import { motion } from "framer-motion";
import { NeuralBackground } from "@/components/neural-background";

export function Hero() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  };

  return (
    <section className="relative min-h-screen bg-[#09090B] overflow-hidden flex items-center">
      <NeuralBackground />
      <div className="relative z-10 container mx-auto px-8 md:px-16 pt-28 pb-20">
        <motion.div variants={container} initial="hidden" animate="visible">
          
          <motion.div variants={item} className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#0DCCF2]/60"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0DCCF2]/80 font-medium">
              AI & WORKFLOW AUTOMATION COMPANY
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mt-8 text-6xl md:text-8xl font-bold font-display leading-[0.95] tracking-tight">
            <div className="text-white">We Automate </div>
            <div className="animated-gradient-text">the Future</div>
            <div className="text-white">Together</div>
            <div className="text-[#B8B8C0]/60 text-4xl md:text-5xl font-normal mt-4">For You</div>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-lg text-[#B8B8C0] text-base md:text-lg leading-relaxed">
            We design intelligent automation systems that eliminate manual work, accelerate operations, and scale with your business — from AI agents to enterprise workflow orchestration.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a 
              href="#contact" 
              className="relative overflow-hidden bg-[#0DCCF2] text-[#09090B] font-semibold tracking-wide px-8 py-4 rounded-none inline-block group"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10">Book Free Consultation</span>
            </motion.a>
            <a href="#services" className="text-[#B8B8C0] text-sm font-medium underline underline-offset-4 hover:text-[#0DCCF2] transition-colors">
              Start Your Automation Journey &rarr;
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex flex-wrap gap-12 border-t border-[#1A1A1F] pt-8">
            <div>
              <div className="text-white font-bold text-2xl">50+</div>
              <div className="text-[#B8B8C0] text-xs tracking-wide uppercase mt-1">Automations Deployed</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl">3x</div>
              <div className="text-[#B8B8C0] text-xs tracking-wide uppercase mt-1">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl">48hr</div>
              <div className="text-[#B8B8C0] text-xs tracking-wide uppercase mt-1">Fast Deployment</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
