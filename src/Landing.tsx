import { motion } from "framer-motion";
import { ArrowRight, Users, FileText, Building2, BarChart3, Lock, Zap, Sun, Moon } from "lucide-react";

interface LandingProps {
  isDark: boolean;
  onLaunch?: () => void;
  onThemeToggle?: () => void;
}

const frontend = ["React 19 + TypeScript", "Vite", "Tailwind CSS + shadcn/ui", "React Router & React Query", "Recharts", "Framer Motion"];
const backend = ["Spring Boot + Spring Security", "PostgreSQL", "RESTful API Architecture"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  })
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity }
  }
};

export default function Landing({ isDark, onLaunch, onThemeToggle }: LandingProps) {
  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      {/* ===== NAVBAR ===== */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
        style={{
          backgroundColor: isDark ? "rgba(29, 29, 29, 0.8)" : "rgba(246, 245, 244, 0.8)",
          borderColor: "var(--border)"
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold text-lg">Nexus</span>
            <span className="font-bold text-lg" style={{ color: "var(--primary)" }}>CRM</span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <motion.a 
              href="#features" 
              className="text-sm font-medium hover:opacity-70 transition-opacity" 
              style={{ color: "var(--muted-foreground)" }}
              whileHover={{ x: 2 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#roadmap" 
              className="text-sm font-medium hover:opacity-70 transition-opacity" 
              style={{ color: "var(--muted-foreground)" }}
              whileHover={{ x: 2 }}
            >
              Roadmap
            </motion.a>
            <motion.a 
              href="#tech" 
              className="text-sm font-medium hover:opacity-70 transition-opacity" 
              style={{ color: "var(--muted-foreground)" }}
              whileHover={{ x: 2 }}
            >
              Tech Stack
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm font-medium hover:opacity-70 transition-opacity" 
              style={{ color: "var(--muted-foreground)" }}
              whileHover={{ x: 2 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <motion.button
              type="button"
              className="p-2 rounded-lg hover:opacity-70 transition-opacity"
              style={{
                backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onThemeToggle}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              type="button"
              className="px-6 py-2 rounded-lg font-bold text-sm"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLaunch}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            className="inline-block mb-8"
          >
            <motion.div
              className="px-4 py-2 rounded-full text-sm font-semibold tracking-widest"
              style={{
                color: "var(--primary)",
                backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OPEN SOURCE CRM
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            custom={1}
            variants={fadeInUp}
            className="mb-8"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(3rem, 12vw, 5.5rem)",
              color: "var(--foreground)",
              fontWeight: 400,
              lineHeight: 1.1,
              textTransform: "uppercase"
            }}
          >
            From First Customer <br />
            to{" "}
            <motion.span
              animate={{ letterSpacing: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              THOUSANDTH.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.7
            }}
          >
            One platform. Every scale. No complexity, no vendor lock-in. Built for businesses that refuse to compromise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              type="button"
              className="px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0px 0px 0px rgba(209, 0, 1, 0)", "0px 10px 30px rgba(209, 0, 1, 0.3)", "0px 0px 0px rgba(209, 0, 1, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={onLaunch}
            >
              View Demo
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>

            <motion.button
              type="button"
              className="px-8 py-4 rounded-2xl font-bold text-base border-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "https://github.com/davidjennicson/nexuscrm"}
            >
              View on GitHub
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero image/visual - animated */}
        <motion.div
          className="w-full max-w-5xl mx-auto mt-20"

          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="overflow-hidden border shadow-2xl"
            style={{
             
       
            }}
            animate={floatAnimation.animate}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/dash.png" alt="" />
       
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 px-6 border-t" style={{ borderColor: "var(--border)" }} id="features">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Everything you need.
            </motion.h2>
            <p
              className="text-lg max-w-2xl"
              style={{ color: "var(--muted-foreground)" }}
            >
              Built for teams who prioritize clarity over clutter. Every feature earns its place.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="space-y-6">
            {/* Full width feature */}
            <motion.div
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, borderColor: "var(--primary)" }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{
                    backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users className="w-6 h-6" style={{ color: "var(--primary)" }} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact Management</h3>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Track all customer interactions in one place. Full history, notes, and activity timeline.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3 column grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: BarChart3, title: "Deal Pipeline", desc: "Visualize sales with Kanban boards, tables, and graphs. Drag-and-drop simplicity." },
                { icon: FileText, title: "Task Management", desc: "Create, assign, and track tasks with priorities, due dates, and team assignments." },
                { icon: Building2, title: "Company Profiles", desc: "Organize and manage company relationships with hierarchies and custom fields." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)"
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, borderColor: "var(--primary)" }}
                >
                  <motion.div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{
                      backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p style={{ color: "var(--muted-foreground)" }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* More features */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Lock, title: "Enterprise Security", desc: "Bank-grade encryption, role-based access control, and comprehensive audit logs." },
                { icon: Zap, title: "Lightning Fast", desc: "Built on modern tech stack. No loading spinners, no waiting. It just works." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)"
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, borderColor: "var(--primary)" }}
                >
                  <motion.div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{
                      backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p style={{ color: "var(--muted-foreground)" }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section id="tech-stack" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      className="mb-16"
    >
      <p className="font-sans text-sm font-medium tracking-widest uppercase text-primary mb-4">Tech Stack</p>
      <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
        Built on proven foundations.
      </h2>
      <p className="font-sans text-muted-foreground text-lg max-w-xl leading-relaxed">
        No magic. Just high-performance primitives for teams that ship.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="p-8 rounded-[24px] bg-card shadow-card"
      >
        <h3 className="font-serif text-2xl font-semibold mb-6 text-card-foreground">Frontend</h3>
        <div className="flex flex-wrap gap-3">
          {frontend.map((t) => (
            <span key={t} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        className="p-8 rounded-[24px] bg-card shadow-card"
      >
        <h3 className="font-serif text-2xl font-semibold mb-6 text-card-foreground">Backend</h3>
        <div className="flex flex-wrap gap-3">
          {backend.map((t) => (
            <span key={t} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>

      {/* ===== ROADMAP SECTION ===== */}
      <section className="py-20 px-6 border-t" style={{ borderColor: "var(--border)" }} id="roadmap">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold mb-4" style={{ color: "var(--primary)" }}>
              ROADMAP
            </div>
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              What's coming next.
            </h2>
            <p
              className="text-lg"
              style={{ color: "var(--muted-foreground)" }}
            >
              We're building in public. Here's the trajectory.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1"
              style={{ backgroundColor: "var(--border)" }}
            />

            <div className="space-y-12">
              {/* Phase 2 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pr-8">
                  <motion.div 
                    className="p-6 rounded-2xl border" 
                    style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                    whileHover={{ y: -5, borderColor: "var(--primary)" }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-lg p-1 flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                        <span style={{ color: "var(--primary-foreground)", fontSize: "10px" }}>📦</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>PHASE 2</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">ERP Capabilities</h3>
                    <ul className="space-y-2">
                      {["Inventory management", "Purchase orders & procurement", "Financial tracking and reporting", "Multi-warehouse support"].map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-2" 
                          style={{ color: "var(--muted-foreground)" }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: "var(--primary)" }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: idx * 0.1, repeat: Infinity }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                </motion.div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:ml-auto md:pl-8">
                  <motion.div 
                    className="p-6 rounded-2xl border" 
                    style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                    whileHover={{ y: -5, borderColor: "var(--primary)" }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-lg p-1 flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                        <span style={{ color: "var(--primary-foreground)", fontSize: "10px" }}>🚀</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>PHASE 3</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Advanced Features</h3>
                    <ul className="space-y-2">
                      {["Custom workflows and automation rules", "Advanced reporting and business intelligence", "API-first architecture for integrations", "Mobile app (native)", "Multi-language support"].map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-2" 
                          style={{ color: "var(--muted-foreground)" }}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: "var(--primary)" }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: idx * 0.1, repeat: Infinity }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-6 border-t" style={{ borderColor: "var(--border)" }}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6" 
            style={{ color: "var(--foreground)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to build?
          </motion.h2>
          <p className="text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
            Start building with Nexus CRM today. It's completely free and open source.
          </p>
          <motion.button
            type="button"
            className="px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 mx-auto"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)"
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0px 0px 0px rgba(209, 0, 1, 0)", "0px 10px 30px rgba(209, 0, 1, 0.3)", "0px 0px 0px rgba(209, 0, 1, 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={onLaunch}
          >
            Get Started
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: "var(--border)" }}>
     <p className="text-center">An Open Source Project by David Jennicson</p>
      </footer>
    </div>
  );
}