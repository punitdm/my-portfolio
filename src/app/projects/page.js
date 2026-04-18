import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Projects — Punit Chauhan",
  description: "Case studies in performance marketing, Shopify development, and SEO.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Portfolio</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Selected Work</h1>
        <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Deep-dive case studies across performance marketing, ecommerce development, and SEO strategies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="card-glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#190F24]/80 to-transparent" />
              <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-[#ebb2ff]/20 border border-[#ebb2ff]/30 text-[#ebb2ff]">
                {project.role}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h2 className="text-xl font-bold text-[#f3cbff]">{project.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.tagline}
              </p>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-0.5 rounded-full bg-[#ebb2ff]/10 border border-[#ebb2ff]/20 text-[#ebb2ff]"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: "var(--text-muted)" }}>
                    +{project.tools.length - 3} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div
                className="mt-auto pt-3 flex items-center gap-4 border-t"
                style={{ borderColor: "var(--card-border)" }}
              >
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
                    className="text-sm transition hover:text-[#f3cbff]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center card-glass rounded-2xl p-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Have a Project in Mind?</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          Let&apos;s build something that grows your brand and drives real, measurable results.
        </p>
        <a href="/#contact" className="btn-gradient rounded-full px-10 py-4 font-semibold text-lg">
          Work With Me
        </a>
      </div>
    </main>
  );
}
