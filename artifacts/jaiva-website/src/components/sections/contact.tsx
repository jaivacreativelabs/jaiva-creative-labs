import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  industry: z.string().min(1, "Please select an industry"),
  services: z.string().min(1, "Please select a service"),
  requirements: z.string().min(10, "Please provide some project details"),
});

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      services: "",
      requirements: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSuccess(true);
  }

  const offeredServices = [
    "Business Automation Consultation",
    "Workflow Audit & Strategy",
    "AI Integration Support",
    "Enterprise Automation Deployment"
  ];

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#0D0D10] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(13,204,242,0.06),transparent)] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="uppercase text-xs tracking-[0.2em] text-[#0DCCF2] font-medium block mb-4">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
            Let's Automate <br className="hidden sm:block"/>
            <span className="text-[#0DCCF2]">Your Business</span>
          </h2>
          <p className="text-[#B8B8C0] max-w-xl mx-auto mt-4">
            Ready to transform your operations? Get in touch with our automation experts to discuss your specific requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start mt-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8 rounded-sm"
          >
            <h3 className="text-white font-semibold font-display text-xl mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#0DCCF2]" />
                <a href="mailto:jaivacreativelabs@gmail.com" className="text-[#0DCCF2] hover:underline font-medium text-base">
                  jaivacreativelabs@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+918940506900" className="text-white font-medium text-base hover:text-[#0DCCF2] transition-colors">
                  +91 8940506900
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-[#B8B8C0]/60 text-xs uppercase tracking-widest mb-4 font-semibold">Services</h4>
              <ul className="space-y-3">
                {offeredServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ArrowRight className="w-3 h-3 text-[#0DCCF2]/60 shrink-0" />
                    <span className="text-[#B8B8C0] text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 rounded-sm"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 h-full min-h-[400px]"
              >
                <CheckCircle2 className="w-16 h-16 text-[#0DCCF2] mb-6" />
                <h3 className="text-2xl font-bold text-white font-display mb-2">Message Sent</h3>
                <p className="text-[#B8B8C0]">Our automation experts will get back to you shortly.</p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                  className="mt-8 text-[#0DCCF2] text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input 
                      {...form.register("name")} 
                      placeholder="Name" 
                      className="bg-[#09090B] border border-[#1A1A1F] text-white placeholder:text-[#B8B8C0]/30 px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full transition-colors"
                    />
                    {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                  </div>
                  <div>
                    <input 
                      {...form.register("company")} 
                      placeholder="Company Name" 
                      className="bg-[#09090B] border border-[#1A1A1F] text-white placeholder:text-[#B8B8C0]/30 px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full transition-colors"
                    />
                    {form.formState.errors.company && <p className="text-red-500 text-xs mt-1">{form.formState.errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input 
                      {...form.register("email")} 
                      type="email"
                      placeholder="Email Address" 
                      className="bg-[#09090B] border border-[#1A1A1F] text-white placeholder:text-[#B8B8C0]/30 px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full transition-colors"
                    />
                    {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <input 
                      {...form.register("phone")} 
                      type="tel"
                      placeholder="Phone Number" 
                      className="bg-[#09090B] border border-[#1A1A1F] text-white placeholder:text-[#B8B8C0]/30 px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full transition-colors"
                    />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <select 
                    {...form.register("industry")} 
                    className="bg-[#09090B] border border-[#1A1A1F] text-white px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full appearance-none transition-colors"
                  >
                    <option value="" disabled className="text-[#B8B8C0]/40">Select an industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Retail">Retail & E-commerce</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </select>
                  {form.formState.errors.industry && <p className="text-red-500 text-xs mt-1">{form.formState.errors.industry.message}</p>}
                </div>

                <div>
                  <select 
                    {...form.register("services")} 
                    className="bg-[#09090B] border border-[#1A1A1F] text-white px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full appearance-none transition-colors"
                  >
                    <option value="" disabled className="text-[#B8B8C0]/40">Select a service</option>
                    <option value="Consulting">Workflow Automation Consulting</option>
                    <option value="AI Automation">AI-Powered Business Automation</option>
                    <option value="Templates">Custom Workflow Template Creation</option>
                    <option value="Integration">Website & App Automation Integration</option>
                    <option value="Enterprise">Enterprise Process Automation</option>
                    <option value="Other">Other</option>
                  </select>
                  {form.formState.errors.services && <p className="text-red-500 text-xs mt-1">{form.formState.errors.services.message}</p>}
                </div>

                <div>
                  <textarea 
                    {...form.register("requirements")} 
                    placeholder="Project Requirements" 
                    className="bg-[#09090B] border border-[#1A1A1F] text-white placeholder:text-[#B8B8C0]/30 px-4 py-3 rounded-sm focus:border-[#0DCCF2]/50 focus:outline-none text-sm w-full min-h-[120px] resize-none transition-colors"
                  />
                  {form.formState.errors.requirements && <p className="text-red-500 text-xs mt-1">{form.formState.errors.requirements.message}</p>}
                </div>

                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#0DCCF2] text-[#09090B] font-semibold tracking-wide py-4 rounded-none text-sm w-full mt-2 transition-colors"
                >
                  Book Free Consultation &rarr;
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}