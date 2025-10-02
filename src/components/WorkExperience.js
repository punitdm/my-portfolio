"use client";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      company: "TNW - The Natural Wash",
      role: "Digital Marketing Executive",
      period: "Dec 2024 - Present",
      achievements: [
        "Launched & managed Meta + Google ad campaigns, achieving a 3.5x average ROAS.",
        "Optimized Shopify store performance with faster load times and UX tweaks, boosting conversion rate by 25%.",
        "Created Looker Studio dashboards for marketing analytics and KPI tracking."
      ],
    },
    {
      company: "Incrementors Web Sol.",
      role: "Team Coach & Project Manager",
      period: "June 2022 - Nov 2024",
      achievements: [
        "Led a team of 5+ marketers across 10+ digital campaigns (SEO, Ads, Analytics).",
        "Trained team on GSC/GA4 usage, technical SEO audits, and CRO best practices.",
        "Built project delivery systems that improved client retention by 40%."
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 md:px-8 py-16 max-w-6xl mx-auto flex flex-col items-center"
    >

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Professional Background</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Where I&apos;ve applied my skills and delivered measurable results.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-8 w-full">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-[#4241427d] backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-2xl font-semibold text-[#f3cbff]">{exp.role}</h3>
              <span className="text-gray-400 italic">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-2 font-medium">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
              {exp.achievements.map((ach, i) => (
                <li key={i} className="mb-1">{ach.replace("'", "&apos;")}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
