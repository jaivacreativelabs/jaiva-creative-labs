import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <a href="#" className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold font-display tracking-tight text-white">
                JAIVA <span className="text-primary">Creative Labs</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm">
              Premium AI and Workflow Automation consulting firm helping businesses accelerate digital transformation.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="#ai-tools" className="text-sm text-muted-foreground hover:text-white transition-colors">AI Tools</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 JAIVA Creative Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:jaivacreativelabs@gmail.com" className="hover:text-white transition-colors">jaivacreativelabs@gmail.com</a>
            <a href="tel:+918940506900" className="hover:text-white transition-colors">+91 8940506900</a>
          </div>
        </div>
      </div>
    </footer>
  );
}