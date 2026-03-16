import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  UsersRound, 
  Kanban, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe 
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Landing({ onLaunch }: { onLaunch: () => void }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              C
            </div>
            <span className="font-bold text-xl tracking-tight">CRM.io</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button 
              onClick={onLaunch}
              className="px-5 py-2.5 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open Source Enterprise CRM
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-[#47A248]">React & Spring Boot</span>. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff8c00]">
                Loved by developers.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              A premium, completely open-source CRM built for modern teams. Streamline your sales pipeline, manage contacts, and customize it infinitely.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 w-full sm:w-auto rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                <span>View on GitHub</span>
              </button>
              <button 
                onClick={onLaunch}
                className="px-8 py-4 w-full sm:w-auto rounded-2xl bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/80 transition-all flex items-center justify-center gap-2">
                Live Demo <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Mockup (Abstracted) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-[1000px] mx-auto mt-20 relative"
        >
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-2 shadow-2xl relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            <div className="rounded-2xl bg-background border border-border p-8 aspect-[16/9] flex flex-col">
              {/* Fake UI */}
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <div className="flex gap-4">
                  <div className="w-24 h-8 bg-muted rounded-lg" />
                  <div className="w-16 h-8 bg-muted rounded-lg" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">JD</div>
              </div>
              <div className="grid grid-cols-4 gap-4 flex-1">
                <div className="col-span-1 border-r border-border pr-4 space-y-4">
                  <div className="w-full h-8 bg-muted/50 rounded-lg" />
                  <div className="w-full h-8 bg-muted/50 rounded-lg" />
                  <div className="w-2/3 h-8 bg-muted/50 rounded-lg" />
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  {/* Kanban Columns */}
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="w-20 h-4 bg-muted mb-4 rounded" />
                    <div className="w-full h-24 bg-card border border-border rounded-xl mb-3 shadow-sm" />
                    <div className="w-full h-24 bg-card border border-border rounded-xl shadow-sm" />
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="w-20 h-4 bg-primary/50 mb-4 rounded" />
                    <div className="w-full h-24 bg-card border border-primary/20 rounded-xl mb-3 shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="w-20 h-4 bg-success/50 mb-4 rounded" />
                    <div className="w-full h-24 bg-card border border-border rounded-xl shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to win</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features packaged in an impossibly beautiful, lightning-fast interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<UsersRound className="w-6 h-6 text-primary" />}
              title="Intelligent Contacts"
              desc="Manage thousands of relationships without breaking a sweat. Automatic enrichment and intuitive grouping."
            />
            <FeatureCard 
              icon={<Kanban className="w-6 h-6 text-primary" />}
              title="Visual Pipelines"
              desc="Drag, drop, and close. See your entire sales funnel at a glance and identify bottlenecks instantly."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6 text-primary" />}
              title="Deep Analytics"
              desc="Actionable insights delivered in real-time. Know exactly where your revenue is coming from."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Lightning Fast"
              desc="Built on modern web technologies. No loading spinners, no waiting. It just works, instantly."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              title="Enterprise Security"
              desc="Bank-grade encryption, role-based access control, and comprehensive audit logs."
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6 text-primary" />}
              title="Work Anywhere"
              desc="Fully responsive design. Your entire CRM is in your pocket, on your tablet, or on your desktop."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to self-host?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Clone the repository and deploy your own instance of CRM.io in minutes.
          </p>
          <button className="px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
            Get the Source Code
          </button>
          <p className="mt-6 text-sm text-muted-foreground">100% Free and Open Source. MIT Licensed.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border bg-card">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
              C
            </div>
            <span className="font-bold tracking-tight">CRM.io</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CRM.io. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}
