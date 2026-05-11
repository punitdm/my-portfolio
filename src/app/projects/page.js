import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects — Punit Chauhan",
  description: "Case studies in performance marketing, Shopify development, and SEO.",
};

const MARQUEE_ITEMS = [
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "Shopify Dev",
  "SEO",
  "CRO",
  "Analytics",
  "Email Marketing",
  "Landing Pages",
  "ROAS Growth",
];

export default function ProjectsPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold mb-3">Projects</h1>
        <p style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-[#ebb2ff] transition">
            Home
          </Link>{" "}
          /{" "}
          <span style={{ color: "var(--foreground)" }}>Projects</span>
        </p>
      </div>

      {/* ── Category Marquee ── */}
      <div
        className="overflow-hidden border-y py-3 marquee-wrapper"
        style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}
      >
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-6 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="text-[#ebb2ff] text-base">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Projects Section ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-lg text-[#ebb2ff] font-medium mb-2">— My Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My Latest{" "}
            <span className="text-[#ebb2ff]">Projects</span>
          </h2>
        </div>

        {/* Interactive grid (client component) */}
        <ProjectsGrid />
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "var(--card-bg)", borderTop: "1px solid var(--card-border)" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
          Let&apos;s Create an{" "}
          <span className="text-[#ebb2ff]">Amazing</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-[#ebb2ff]">Project</span> Together!
        </h2>
        <a
          href="/#contact"
          className="btn-gradient inline-flex items-center gap-2 rounded-full px-10 py-4 font-semibold text-lg"
        >
          Contact Us Now
          <span className="w-7 h-7 rounded-full bg-[#3f2748]/30 flex items-center justify-center text-sm">
            →
          </span>
        </a>
      </section>
    </main>
  );
}
