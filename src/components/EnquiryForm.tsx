import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Mail, User, Building2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function EnquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section ref={ref} id="enquiry" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-6">
              Ready to Launch?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're validating your first idea or scaling globally, 
              our team is here to guide you through the Vencorp ecosystem.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, text: "contact@vencorp.io" },
                { icon: <Building2 size={18} />, text: "A Stacia Corp Product" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card border border-border/60">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bento-card p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pragati/10 mb-4">
                    <CheckCircle className="text-pragati" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={16} />
                      <Textarea
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="pl-10 min-h-[120px] resize-none"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={16} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
