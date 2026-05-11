"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const CATEGORIES = ["All", "Performance Marketing", "Shopify Dev", "SEO"];
const PAGE_SIZE = 4;

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.categories?.includes(active));

  const shown = filtered.slice(0, visible);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setVisible(PAGE_SIZE);
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === cat
                ? "bg-[#ebb2ff] text-[#190F24] border-[#ebb2ff] shadow-[0_4px_14px_#ebb2ff55]"
                : "border-[#ebb2ff]/30 text-[#ebb2ff] hover:bg-[#ebb2ff]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {shown.map((project, idx) => (
          <div
            key={idx}
            className="card-glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#190F24]/70 to-transparent" />
            </div>

            {/* Card Body */}
            <div className="p-5 flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.categories?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#ebb2ff]/10 border border-[#ebb2ff]/25 text-[#ebb2ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                <p className="text-sm line-clamp-2" style={{ color: "var(--text-muted)" }}>
                  {project.tagline}
                </p>
              </div>

              {/* Arrow CTA */}
              <Link
                href={`/projects/${project.slug}`}
                className="flex-shrink-0 w-11 h-11 rounded-full bg-[#ebb2ff] flex items-center justify-center text-[#190F24] hover:scale-110 transition-transform shadow-[0_4px_14px_#ebb2ff55]"
                aria-label={`View case study for ${project.title}`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {shown.length === 0 && (
        <p className="text-center py-16" style={{ color: "var(--text-muted)" }}>
          No projects in this category yet.
        </p>
      )}

      {/* Load More */}
      {visible < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-gradient rounded-full px-8 py-3 font-semibold"
          >
            Load More Projects
          </button>
        </div>
      )}
    </>
  );
}
