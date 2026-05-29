export function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-[#1A1A1F] py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-start">
            <a href="#" className="flex items-center gap-1">
              <span className="text-xl font-bold font-display text-white">JAIVA</span>
              <span className="text-xl font-display text-[#B8B8C0]">Creative Labs</span>
            </a>
            <p className="text-[#B8B8C0] text-sm mt-3 leading-relaxed">
              Premium AI and Workflow Automation consulting firm helping businesses accelerate digital transformation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold font-display mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">About</a>
              <a href="#ai-tools" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">AI Tools</a>
              <a href="#clients" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">Clients</a>
              <a href="#contact" className="text-[#B8B8C0] text-sm hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold font-display mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              <span className="text-[#B8B8C0] text-sm">Workflow Consulting</span>
              <span className="text-[#B8B8C0] text-sm">AI Business Automation</span>
              <span className="text-[#B8B8C0] text-sm">Custom Templates</span>
              <span className="text-[#B8B8C0] text-sm">Enterprise Integration</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold font-display mb-6">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:jaivacreativelabs@gmail.com" className="text-[#0DCCF2] text-sm hover:underline">
                jaivacreativelabs@gmail.com
              </a>
              <a href="tel:+918940506900" className="text-white text-sm">
                +91 8940506900
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#1A1A1F] mt-12 pt-8 flex items-center justify-between">
          <p className="text-[#B8B8C0]/50 text-sm">© 2025 JAIVA Creative Labs.</p>
          <p className="text-[#B8B8C0]/50 text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}