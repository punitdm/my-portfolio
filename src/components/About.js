import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 sm:px-8 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <Image
          src="/about.jpg"
          alt="About Me"
          width={256}   // adjust to your design
          height={256}
          className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-mainPurple"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-mainPurple">About Me</h2>
        <p className="text-base sm:text-lg mb-6 text-gray-200 leading-relaxed">
          I’m a <span className="text-secondaryPurple font-semibold">full-stack developer</span> passionate
          about building modern web apps and helping businesses grow online.
          With hands-on experience in <span className="text-secondaryPurple font-semibold">Next.js, TailwindCSS,
          and performance marketing</span>, I bridge both technology and strategy to deliver results.
        </p>

        {/* Skills Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
          <li className="bg-[#2a1639] px-4 py-2 rounded-lg shadow">⚡ Next.js / React</li>
          <li className="bg-[#2a1639] px-4 py-2 rounded-lg shadow">🎨 TailwindCSS</li>
          <li className="bg-[#2a1639] px-4 py-2 rounded-lg shadow">🚀 Performance Marketing</li>
          <li className="bg-[#2a1639] px-4 py-2 rounded-lg shadow">📈 SEO & Analytics</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a href="/resume.pdf" className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
