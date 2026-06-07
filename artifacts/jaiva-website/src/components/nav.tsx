import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
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

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-5 sm:px-8 md:px-16 border-b border-[#1A1A1F] transition-colors duration-300 ${
          isScrolled || mobileOpen ? "bg-[#09090B]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="#" className="flex items-center gap-1 shrink-0">
          <span className="text-lg sm:text-xl font-bold font-display text-white">JAIVA</span>
          <span className="text-lg sm:text-xl font-display animated-gradient-text"> Creative Labs</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-block bg-[#0DCCF2] text-[#09090B] text-sm font-semibold tracking-wide px-4 py-2 rounded-none"
          >
            Get Free Consultation
          </motion.a>

          <button
            data-testid="button-mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-9 h-9 text-white border border-[#1A1A1F] hover:border-[#0DCCF2]/40 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#09090B]/98 backdrop-blur-md border-b border-[#1A1A1F] overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="text-[#B8B8C0] text-base font-medium tracking-wide hover:text-white transition-colors py-3 border-b border-[#1A1A1F] last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-4 bg-[#0DCCF2] text-[#09090B] text-sm font-semibold tracking-wide px-6 py-3 rounded-none text-center"
              >
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
