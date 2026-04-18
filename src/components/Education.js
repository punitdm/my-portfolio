"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      title: "Bachelors in Commerce",
      institution: "Delhi University",
      period: "May 2014 - May 2016",
      notes: ["Learned business fundamentals and management principles."],
    },
    {
      title: "Digital Marketing Course",
      institution: "Expert Training Institute",
      period: "Aug 2021 - Mar 2022",
      notes: [
        "Learned core digital marketing skills including SEO, Google Ads, Meta Ads, and web development.",
      ],
    },
  ];

  const certifications = [
    "Google Ads Certification",
    "Meta Blueprint Certification",
    "SEO & Analytics Advanced Course",
  ];

  return (
    <section
      id="education"
      className="relative px-4 sm:px-6 md:px-8 py-16 max-w-6xl mx-auto flex flex-col items-center"
    >


      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Education</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Education & Certifications</h2>
        <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Relevant degrees, certifications, and professional development that validate my skills.
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-8 w-full mb-12">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="card-glass rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-2xl font-semibold text-[#f3cbff]">{edu.title}</h3>
              <span className="italic" style={{ color: "var(--text-muted)" }}>{edu.period}</span>
            </div>
            <p className="mb-2 font-medium" style={{ color: "var(--text-secondary)" }}>{edu.institution}</p>
            <ul className="list-disc list-inside text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
              {edu.notes.map((note, i) => (
                <li key={i} className="mb-1">{note}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-[#f3cbff] mb-4">Certifications</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
          {certifications.map((cert, i) => (
            <li
              key={i}
              className="px-4 py-2 rounded-lg shadow transition"
              style={{ background: "var(--input-bg)", border: "1px solid var(--card-border)" }}
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
