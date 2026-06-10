"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Pawpourri",
    role: "Digital Marketing Manager",
    period: "May 2026 - Present",
    location: "Delhi, India · On-site",
    current: true,
    achievements: [
      "Managing all digital marketing end-to-end for a D2C pet accessories brand — from strategy to execution.",
      "Meta Ads: pixel creation, event tracking setup, audience building, and full-funnel campaigns (Cold, Retargeting, Retention).",
      "Google Ads: Search & Shopping campaigns for product-level targeting, with full-funnel ownership from awareness to purchase.",
      "Shopify CRO: product pages, collections, UX fixes, mobile optimization, and landing page improvements for better conversion rates.",
      "Built Sales ROI dashboards tracking ROAS, CPP, Revenue, and channel-wise performance; monitor pixel health and resolve duplicate events.",
      "Contributing to product decisions from customer & ad insights; coordinating with creative, catalog, and ops teams for campaign readiness.",
    ],
    skills: ["Performance Marketing", "Meta Ads", "Google Ads", "Shopify", "CRO"],
  },
  {
    company: "TNW - The Natural Wash",
    role: "Digital Marketing Executive",
    period: "Dec 2024 - May 2026",
    location: "Delhi, India · On-site",
    achievements: [
      "Launched & managed Meta + Google ad campaigns, achieving a 3.5x average ROAS.",
      "Improved sales through SEO and Google Ads while managing the Shopify store and inventory end-to-end.",
      "Optimized Shopify store performance with faster load times and UX tweaks, boosting conversion rate by 25%.",
      "Created Looker Studio dashboards for marketing analytics and KPI tracking.",
    ],
    skills: ["SEO", "Google Ads", "Shopify", "Analytics"],
  },
  {
    company: "Incrementors Web Solutions",
    role: "Project Performance Manager",
    period: "Jun 2022 - Dec 2024",
    location: "Rohini, Delhi, India · On-site",
    achievements: [
      "Led a team of 5+ marketers across 10+ digital campaigns (SEO, Ads, Analytics).",
      "Trained team on GSC/GA4 usage, technical SEO audits, and CRO best practices.",
      "Built project delivery systems that improved client retention by 40%.",
    ],
    skills: ["Project Management", "Team Leadership", "SEO", "CRO"],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 md:px-8 py-16 max-w-6xl mx-auto flex flex-col items-center"
    >

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-accent font-medium mb-2">- Experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Professional Background</h2>
        <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Where I&apos;ve applied my skills and delivered measurable results.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full pl-8 sm:pl-12">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00ff9c] via-[#00b8ff] to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              {/* Timeline node */}
              <span className="absolute -left-8 sm:-left-12 top-1.5 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/10 border border-accent/50">
                {exp.current ? (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                ) : (
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                )}
              </span>

              <div className="card-glass glow-accent-hover rounded-2xl p-6 shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <div>
                    <h3 className="text-2xl font-semibold text-accent-bright">{exp.role}</h3>
                    <p className="font-medium" style={{ color: "var(--text-secondary)" }}>
                      {exp.company} · Full-time
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    {exp.current && (
                      <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/40 text-accent font-semibold mb-1">
                        Current Role
                      </span>
                    )}
                    <p className="italic text-sm" style={{ color: "var(--text-muted)" }}>{exp.period}</p>
                    <p className="flex items-center sm:justify-end gap-1 text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-sm sm:text-base mt-3" style={{ color: "var(--text-secondary)" }}>
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="mb-1.5">{ach}</li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
