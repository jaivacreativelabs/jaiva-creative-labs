import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { AITools } from "@/components/sections/ai-tools";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-foreground selection:bg-[#0DCCF2]/30 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <AITools />
        <Clients />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-none bg-[#0D0D10] border border-[#1A1A1F] text-[#B8B8C0] flex items-center justify-center hover:text-white hover:border-[#0DCCF2]/40 transition-colors z-50 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}