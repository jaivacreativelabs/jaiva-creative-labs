import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  industry: z.string({ required_error: "Please select an industry" }),
  services: z.string({ required_error: "Please select a service" }),
  requirements: z.string().min(10, "Please provide some project details"),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      requirements: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent Successfully",
      description: "Our experts will get back to you shortly.",
    });
    form.reset();
  }

  const offeredServices = [
    "Business Automation Consultation",
    "Workflow Audit & Strategy",
    "AI Integration Support",
    "Enterprise Automation Deployment"
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-primary)_0%,transparent_40%)] opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Let's Automate Your Business
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to streamline your operations with AI and workflow automation? Our experts can help you design, develop, and deploy intelligent automation systems tailored to your business needs.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                  <a href="mailto:jaivacreativelabs@gmail.com" className="text-white hover:text-primary transition-colors font-medium">
                    jaivacreativelabs@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                  <a href="tel:+918940506900" className="text-white hover:text-primary transition-colors font-medium">
                    +91 8940506900
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Services Offered</h3>
              <ul className="space-y-4">
                {offeredServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="bg-black/50 border-white/10 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="bg-black/50 border-white/10 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" type="tel" className="bg-black/50 border-white/10 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Industry</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 focus:ring-primary">
                            <SelectValue placeholder="Select an industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#09090B] border-white/10">
                          {["Manufacturing", "Healthcare", "Education", "Retail & E-commerce", "Logistics", "Real Estate", "Finance", "Waste Management", "Startups & SaaS", "Other"].map(ind => (
                            <SelectItem key={ind} value={ind} className="focus:bg-primary/20 focus:text-white">{ind}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Services Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 focus:ring-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#09090B] border-white/10">
                          <SelectItem value="Workflow Automation Consulting" className="focus:bg-primary/20 focus:text-white">Workflow Automation Consulting</SelectItem>
                          <SelectItem value="AI-Powered Business Automation" className="focus:bg-primary/20 focus:text-white">AI-Powered Business Automation</SelectItem>
                          <SelectItem value="Custom Workflow Template Creation" className="focus:bg-primary/20 focus:text-white">Custom Workflow Template Creation</SelectItem>
                          <SelectItem value="Website & App Automation Integration" className="focus:bg-primary/20 focus:text-white">Website & App Automation Integration</SelectItem>
                          <SelectItem value="Enterprise Process Automation" className="focus:bg-primary/20 focus:text-white">Enterprise Process Automation</SelectItem>
                          <SelectItem value="Other" className="focus:bg-primary/20 focus:text-white">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Project Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about the processes you'd like to automate..." 
                          className="min-h-[120px] bg-black/50 border-white/10 focus-visible:ring-primary resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                  Book a Free Automation Consultation Today
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}