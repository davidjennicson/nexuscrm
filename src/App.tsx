import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, FileText, Building2, BarChart3, Lock, Zap } from "lucide-react";
import "@fontsource/anton";
import "@fontsource/source-serif-4";
import "@fontsource-variable/inter";

interface LandingProps {
  isDark: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export default function Landing({ isDark }: LandingProps) {
  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12">
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
            <div
              className="px-4 py-2 rounded-full text-sm font-semibold tracking-widest"
              style={{
                color: "var(--primary)",
                backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
              }}
            >
              OPEN SOURCE CRM
            </div>
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
              fontWeight: 700,
              lineHeight: 1.1,
              textTransform: "uppercase"
            }}
          >
            From First Customer <br />
            to{" "}
            <span style={{ color: "var(--primary)" }}>
              THOUSANDTH.
            </span>
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
              className="px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-2xl font-bold text-base border-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Dashboard preview - positioned lower */}
        <motion.div
          className="w-full max-w-5xl mx-auto mt-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div
            className="rounded-2xl overflow-hidden border shadow-2xl"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)"
            }}
          >
            {/* Mock dashboard header */}
            <div
              className="px-6 py-4 border-b flex items-center justify-between"
              style={{
                backgroundColor: isDark ? "rgba(255, 75, 50, 0.05)" : "rgba(209, 0, 1, 0.05)",
                borderColor: "var(--border)"
              }}
            >
              <div className="text-sm font-bold">Note: This is a frontend-only version. The backend is being deployed soon! Until then, see the project on GitHub.</div>
              <button className="px-4 py-1.5 rounded-lg font-semibold text-sm" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                Refresh
              </button>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-red-100" />
                <h2 className="text-2xl font-bold">Dashboard</h2>
              </div>
              <div className="text-sm text-gray-500 mb-6">Latest updated: 16 March 2026</div>

              {/* Mock stats grid */}
              <div className="grid grid-cols-4 gap-4">
                {["1 new", "open in pipeline", "$270K pipeline", "2 won"].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: isDark ? "rgba(255, 75, 50, 0.05)" : "rgba(209, 0, 1, 0.05)" }}
                  >
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 px-6 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Everything you need.
            </h2>
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
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{
                    backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: "var(--primary)" }} />
                </div>
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
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{
                      backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
                    }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </div>
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
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{
                      backgroundColor: isDark ? "rgba(255, 75, 50, 0.1)" : "rgba(209, 0, 1, 0.1)"
                    }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p style={{ color: "var(--muted-foreground)" }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROADMAP SECTION ===== */}
      <section className="py-20 px-6 border-t" style={{ borderColor: "var(--border)" }}>
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
                  <div className="p-6 rounded-2xl border" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-lg p-1 flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                        <span style={{ color: "var(--primary-foreground)", fontSize: "10px" }}>📦</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>PHASE 2</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">ERP Capabilities</h3>
                    <ul className="space-y-2">
                      {["Inventory management", "Purchase orders & procurement", "Financial tracking and reporting", "Multi-warehouse support"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2" style={{ color: "var(--muted-foreground)" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                </div>
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
                  <div className="p-6 rounded-2xl border" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-lg p-1 flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                        <span style={{ color: "var(--primary-foreground)", fontSize: "10px" }}>🚀</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>PHASE 3</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Advanced Features</h3>
                    <ul className="space-y-2">
                      {["Custom workflows and automation rules", "Advanced reporting and business intelligence", "API-first architecture for integrations", "Mobile app (native)", "Multi-language support"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2" style={{ color: "var(--muted-foreground)" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
            Ready to build?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
            Start building with Nexus CRM today. It's completely free and open source.
          </p>
          <motion.button
            className="px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 mx-auto"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">Nexus</span>
            <span className="font-bold text-lg" style={{ color: "var(--primary)" }}>CRM</span>
          </div>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            © {new Date().getFullYear()} Nexus CRM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" style={{ color: "var(--muted-foreground)" }} className="hover:opacity-70">GitHub</a>
            <a href="#" style={{ color: "var(--muted-foreground)" }} className="hover:opacity-70">Docs</a>
            <a href="#" style={{ color: "var(--muted-foreground)" }} className="hover:opacity-70">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}