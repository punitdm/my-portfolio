import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Punit Chauhan`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[#ebb2ff] hover:text-[#f3cbff] mb-8 transition text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10" style={{ border: "1px solid var(--card-border)" }}>
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#190F24] via-[#190F2466] to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="text-[#ebb2ff] text-sm font-medium mb-1">{project.role}</p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">{project.title}</h1>
        </div>
      </div>

      {/* Meta pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { label: "Client", value: project.client },
          { label: "Duration", value: project.duration },
          { label: "Budget", value: project.budget },
        ].map(({ label, value }) => (
          <div key={label} className="card-glass rounded-xl px-4 py-2 text-sm">
            <span className="text-[#ebb2ff] font-medium">{label}: </span>
            <span className="text-white">{value}</span>
          </div>
        ))}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient rounded-xl px-4 py-2 text-sm flex items-center gap-1"
          >
            View Live <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Content sections */}
      <div className="flex flex-col gap-6">
        {[
          { title: "Overview", content: project.overview },
          { title: "The Problem", content: project.problem },
          { title: "The Solution", content: project.solution },
        ].map(({ title, content }) => (
          <div key={title} className="card-glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[#f3cbff] mb-3">{title}</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{content}</p>
          </div>
        ))}

        {/* Results */}
        <div className="card-glass rounded-2xl p-6">
          <h2 className="text-lg font-bold text-[#f3cbff] mb-4">Results</h2>
          <ul className="flex flex-col gap-3">
            {project.results.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ebb2ff] mt-2 shrink-0" />
                <span className="font-medium">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="card-glass rounded-2xl p-6">
          <h2 className="text-lg font-bold text-[#f3cbff] mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-sm bg-[#ebb2ff]/10 border border-[#ebb2ff]/30 text-[#ebb2ff]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 text-center card-glass rounded-2xl p-10">
        <h3 className="text-2xl font-bold mb-2">
          Want Similar Results?
        </h3>
        <p className="mb-6" style={{ color: "var(--text-muted)" }}>Let&apos;s build a strategy that scales your brand.</p>
        <a href="/#contact" className="btn-gradient rounded-full px-8 py-3 font-semibold">
          Let&apos;s Talk
        </a>
      </div>
    </main>
  );
}
