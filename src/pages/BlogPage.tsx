import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredPost = {
  title: "The Death of the Business Plan: Why AI Validation is the New Standard",
  excerpt: "For decades, entrepreneurs have been taught to write extensive business plans before launching. But in a world of rapid iteration and data-driven decisions, is this approach still relevant?",
  author: "Arjun Krishnan",
  date: "Dec 28, 2024",
  category: "Insights",
  readTime: "8 min read",
};

const posts = [
  {
    title: "How We Built Pragati's 110-Point Validation Engine",
    excerpt: "A deep dive into the technology behind our AI validation system.",
    author: "Priya Sharma",
    date: "Dec 20, 2024",
    category: "Engineering",
    readTime: "12 min read",
  },
  {
    title: "5 Signs Your Startup Idea Needs a Pivot",
    excerpt: "Early warning signals that could save you years of building the wrong thing.",
    author: "Rahul Mehta",
    date: "Dec 15, 2024",
    category: "Founder Tips",
    readTime: "5 min read",
  },
  {
    title: "The Vencorp Stack: Our Tech Choices Explained",
    excerpt: "Why we chose the tools we did to build a platform serving 50,000+ founders.",
    author: "Ananya Gupta",
    date: "Dec 10, 2024",
    category: "Engineering",
    readTime: "10 min read",
  },
  {
    title: "Building a Startup Ecosystem: Lessons from 3 Years",
    excerpt: "What we learned creating an interconnected platform for founders.",
    author: "Arjun Krishnan",
    date: "Dec 5, 2024",
    category: "Company",
    readTime: "7 min read",
  },
  {
    title: "The Future of Co-Founder Matching: Psychometrics and AI",
    excerpt: "How Interllexia is using science to solve the co-founder problem.",
    author: "Vikram Patel",
    date: "Nov 28, 2024",
    category: "Product",
    readTime: "6 min read",
  },
  {
    title: "From Validation to Valuation: The Startup Journey",
    excerpt: "A founder's guide to navigating the path from idea to funding.",
    author: "Neha Krishnan",
    date: "Nov 20, 2024",
    category: "Founder Tips",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} />
              <span className="font-mono text-xs uppercase tracking-wider">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                Blog
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Insights & Ideas
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Thoughts on startups, technology, and building the future from the Vencorp team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bento-card group cursor-pointer bg-foreground text-background p-8 md:p-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-pragati/20 text-pragati font-mono text-xs tracking-wider uppercase mb-4">
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-pragati transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-background/70 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-background/60">
                <span className="flex items-center gap-2">
                  <User size={14} />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {featuredPost.date}
                </span>
                <span>{featuredPost.readTime}</span>
                <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card group cursor-pointer"
                >
                  <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-pragati transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border/40">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span className="ml-auto">{post.readTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
