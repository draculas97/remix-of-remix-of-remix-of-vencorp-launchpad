import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, login, signup } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    let result;
    if (isLogin) {
      result = await login(formData.email, formData.password);
    } else {
      result = await signup(formData.name, formData.email, formData.password);
    }
    
    if (result.success) {
      toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: isLogin 
          ? "You've successfully logged in to Vencorp SSO." 
          : "Your account has been created successfully.",
      });
      navigate("/");
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 0% 100% / 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pragati/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stello/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-20">
          <Link to="/" className="mb-12">
            <span className="font-mono text-xs tracking-[0.3em] text-background/60">BY STACIA</span>
            <span className="block text-3xl font-bold tracking-[0.2em]">VENCORP</span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            One Identity.<br />
            <span className="text-background/70">Seven Modules.</span>
          </h1>
          
          <p className="text-background/60 text-lg max-w-md mb-8">
            Access the entire Vencorp ecosystem with a single sign-on. 
            From validation to exit—your journey starts here.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["Pragati", "Stello", "Edifai", "Interllexia", "GINE", "Job Portal", "Tezzaract"].map((product) => (
              <span 
                key={product} 
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-background/20 text-background/70"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/">
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">BY STACIA</span>
              <span className="block text-2xl font-bold tracking-[0.2em]">VENCORP</span>
            </Link>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                isLogin ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Login
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                !isLogin ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="bento-card p-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-center">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-8">
              {isLogin 
                ? "Enter your credentials to access your account" 
                : "Join the Vencorp ecosystem today"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full rounded-full gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Processing..."
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight size={16} />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground font-mono tracking-wider">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="rounded-full font-mono text-xs">
                Google
              </Button>
              <Button variant="outline" className="rounded-full font-mono text-xs">
                Microsoft
              </Button>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-6">
            <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
