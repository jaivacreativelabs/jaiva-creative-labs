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
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-16 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">

          <motion.div variants={item} className="flex items-center gap-3">
            <div className="w-6 sm:w-8 h-px bg-[#0DCCF2]/60 shrink-0"></div>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#0DCCF2]/80 font-medium">
              AI & WORKFLOW AUTOMATION COMPANY
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mt-6 sm:mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight">
            <div className="text-white">We Automate</div>
            <div className="animated-gradient-text">the Future</div>
            <div className="text-white">Together</div>
            <div className="text-[#B8B8C0]/60 text-3xl sm:text-4xl md:text-5xl font-normal mt-3 sm:mt-4">For Your Business</div>
          </motion.h1>

          <motion.p variants={item} className="mt-6 sm:mt-8 max-w-lg text-[#B8B8C0] text-sm sm:text-base md:text-lg leading-relaxed">
            We design intelligent automation systems that eliminate manual work, cut operational costs, accelerate growth, maximize revenue, and scale with your business — from AI agents to enterprise workflow orchestration.
          </motion.p>

          <motion.div variants={item} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.a
              href="#contact"
              className="relative overflow-hidden bg-[#0DCCF2] text-[#09090B] font-semibold tracking-wide px-6 sm:px-8 py-3 sm:py-4 rounded-none inline-block group text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10">Book Free Consultation</span>
            </motion.a>
            <a href="#services" className="text-[#B8B8C0] text-xs sm:text-sm font-medium underline underline-offset-4 hover:text-[#0DCCF2] transition-colors">
              Start Your Automation Journey &rarr;
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 sm:mt-16 flex flex-wrap gap-6 sm:gap-12 border-t border-[#1A1A1F] pt-6 sm:pt-8">
            <div>
              <div className="text-white font-bold text-xl sm:text-2xl">50+</div>
              <div className="text-[#B8B8C0] text-[10px] sm:text-xs tracking-wide uppercase mt-1">Automations Deployed</div>
            </div>
            <div>
              <div className="text-white font-bold text-xl sm:text-2xl">3x</div>
              <div className="text-[#B8B8C0] text-[10px] sm:text-xs tracking-wide uppercase mt-1">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-white font-bold text-xl sm:text-2xl">48hr</div>
              <div className="text-[#B8B8C0] text-[10px] sm:text-xs tracking-wide uppercase mt-1">Fast Deployment</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
