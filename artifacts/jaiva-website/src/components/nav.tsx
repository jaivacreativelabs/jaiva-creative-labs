import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function Nav() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "AI Tools", href: "#ai-tools" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 md:px-16 border-b border-[#1A1A1F] transition-colors duration-300 ${
        isScrolled ? "bg-[#09090B]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <a href="#" className="flex items-center gap-1">
        <span className="text-xl font-bold font-display text-white">JAIVA</span>
        <span className="text-xl font-display text-[#B8B8C0]">Creative Labs</span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[#B8B8C0] text-sm font-medium tracking-wide hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center">
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#0DCCF2] text-[#09090B] text-sm font-semibold tracking-wide px-5 py-2 rounded-none inline-block"
        >
          Get Free Consultation
        </motion.a>
      </div>
    </motion.header>
  );
}