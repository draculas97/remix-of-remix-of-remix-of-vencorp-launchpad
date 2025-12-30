import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Mail, User, Building2, MessageSquare, ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const features = [
  { icon: <Zap size={16} />, text: "Response within 24 hours" },
  { icon: <Sparkles size={16} />, text: "Free consultation call" },
  { icon: <Globe size={16} />, text: "Global support team" },
];

export default function EnquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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
    <section ref={ref} id="enquiry" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-pragati/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-stello/5 blur-3xl" />

      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-3 mb-4">
              Let's Build <span className="text-pragati">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Whether you're validating your first idea or scaling globally, 
              our team is here to guide you through the Vencorp ecosystem.
            </p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card p-0 overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              {/* Left side - Info */}
              <div className="lg:col-span-2 bg-foreground text-background p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Ready to Launch?</h3>
                    <p className="text-background/70 mb-8 leading-relaxed">
                      Join thousands of founders who have transformed their ideas into 
                      validated, scalable ventures through the Vencorp ecosystem.
                    </p>
                  </motion.div>

                  <div className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/10">
                          {feature.icon}
                        </div>
                        <span className="text-sm text-background/80">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="pt-8 border-t border-background/10"
                  >
                    <p className="font-mono text-xs text-background/50 mb-2">CONTACT DIRECTLY</p>
                    <a 
                      href="mailto:contact@vencorp.io" 
                      className="text-background/90 hover:text-background transition-colors inline-flex items-center gap-2 group"
                    >
                      <Mail size={16} />
                      contact@vencorp.io
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>

                {/* Decorative orb */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-pragati/20 blur-2xl" />
              </div>

              {/* Right side - Form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-pragati/10 mb-6"
                    >
                      <CheckCircle className="text-pragati" size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                          <User size={12} />
                          Name
                        </label>
                        <motion.div
                          animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-muted/50 border-border/60 focus:border-pragati/50 transition-all"
                            required
                          />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                          <Mail size={12} />
                          Email
                        </label>
                        <motion.div
                          animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-muted/50 border-border/60 focus:border-pragati/50 transition-all"
                            required
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                        <Building2 size={12} />
                        Company (Optional)
                      </label>
                      <motion.div
                        animate={{ scale: focusedField === 'company' ? 1.02 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="h-12 bg-muted/50 border-border/60 focus:border-pragati/50 transition-all"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                        <MessageSquare size={12} />
                        Message
                      </label>
                      <motion.div
                        animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Textarea
                          placeholder="Tell us about your project or idea..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="min-h-[140px] resize-none bg-muted/50 border-border/60 focus:border-pragati/50 transition-all"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full h-12 rounded-full gap-2 text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Send size={18} />
                          </motion.div>
                        ) : (
                          <>
                            Send Enquiry
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
