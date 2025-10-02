"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Ecommerce Growth Campaign",
      tagline: "Problem → Low sales for a Shopify brand | Solution → Google & Meta Ads | Result → 3.5x ROAS",
      role: "Performance Marketing Strategist",
      image: "/ecommerce1.png", // replace with actual screenshot
      link: "https://www.feelingsexy.com.au",
    },
    {
      title: "Shopify Store Build",
      tagline: "Problem → Low conversion | Solution → Optimized store UX | Result → +30% checkout conversion",
      role: "Web Developer & CRO Specialist",
      image: "/shopify2.png",
      link: "https://liveproject2.com",
    },
    {
      title: "SEO Traffic Boost",
      tagline: "Problem → Low organic traffic | Solution → On-page & backlink strategy | Result → +180% traffic",
      role: "SEO & Analytics Lead",
      image: "/seo3.png",
      link: "https://liveproject3.com",
    },
    // add more projects as needed (up to 6)
  ];

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 max-w-6xl mx-auto flex flex-col items-center"
    >

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xl text-[#ebb2ff] font-medium mb-2">- Portfolio</p>
        <h2 className="text-4xl sm:text-5xl font-bold">Selected Work</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          High-impact projects that demonstrate my skills in performance marketing, ecommerce development, and SEO strategies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#4241427d] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
              <p className="text-gray-300 text-sm">{project.tagline}</p>
              <p className="text-gray-400 text-xs italic">{project.role}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-[#ebb2ff] hover:underline"
                >
                  View Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
