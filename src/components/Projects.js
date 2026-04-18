"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const projects = projectsData;

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 max-w-6xl mx-auto flex flex-col items-center"
    >

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Portfolio</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Selected Work</h2>
        <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          High-impact projects that demonstrate my skills in performance marketing, ecommerce development, and SEO strategies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="card-glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="relative w-full h-48 sm:h-56 md:h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[#f3cbff]">{project.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{project.tagline}</p>
              <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>{project.role}</p>
              <div className="mt-3 flex items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm text-[#ebb2ff] hover:text-[#f3cbff] font-medium hover:underline transition"
                >
                  View Case Study →
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-gray-200 transition" style={{ color: "var(--text-muted)" }}
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
