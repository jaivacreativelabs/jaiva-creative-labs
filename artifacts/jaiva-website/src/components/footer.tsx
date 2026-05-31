export function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-[#1A1A1F] py-12 sm:py-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-[#0DCCF2]/20"></div>
      <div className="px-5 sm:px-8 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
              <a href="#" className="flex items-center gap-1">
                <span className="text-xl font-bold font-display text-white">JAIVA</span>
                <span className="text-xl font-display text-[#B8B8C0]"> Creative Labs</span>
              </a>
              <p className="text-[#B8B8C0] text-sm mt-3 leading-relaxed max-w-xs">
                Premium AI and Workflow Automation consulting firm helping businesses accelerate digital transformation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold font-display mb-4 sm:mb-6 text-sm">Quick Links</h4>
              <div className="flex flex-col gap-2 sm:gap-3">
                <a href="#services" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">Services</a>
                <a href="#about" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">About</a>
                <a href="#ai-tools" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">AI Tools</a>
                <a href="#clients" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">Clients</a>
                <a href="#contact" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold font-display mb-4 sm:mb-6 text-sm">Services</h4>
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-[#B8B8C0] text-sm">Workflow Consulting</span>
                <span className="text-[#B8B8C0] text-sm">AI Business Automation</span>
                <span className="text-[#B8B8C0] text-sm">Custom Templates</span>
                <span className="text-[#B8B8C0] text-sm">Enterprise Integration</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold font-display mb-4 sm:mb-6 text-sm">Contact</h4>
              <div className="flex flex-col gap-2 sm:gap-3">
                <a href="mailto:jaivacreativelabs@gmail.com" className="text-[#0DCCF2] text-sm hover:underline break-all">
                  jaivacreativelabs@gmail.com
                </a>
                <a href="tel:+918940506900" className="text-white text-sm hover:text-[#0DCCF2] transition-colors">
                  +91 8940506900
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1A1A1F] mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <p className="text-[#B8B8C0]/50 text-sm text-center sm:text-left">© 2025 JAIVA Creative Labs.</p>
            <p className="text-[#B8B8C0]/50 text-sm text-center sm:text-right">All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
