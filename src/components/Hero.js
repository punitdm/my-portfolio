import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Punit Chauhan</h1>
        <p className="text-lg mb-6">
          Performance-focused marketer and web developer with 3+ years experience driving revenue growth for
          ecommerce brands across 5+ countries. Specialized in running ROI-driven ad campaigns (Meta + Google),
          SEO strategies, and conversion-optimized Shopify/WordPress builds. Proven track record of managing 60+
          projects that delivered measurable business results — not just traffic, but real sales and scale.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="/resume.pdf" className="btn-gradient rounded-lg">Download Resume</a>
          <a href="#contact" className="btn-gradient rounded-lg">Contact Me</a>
        </div>
      </div>

      {/* Hero Image with gradient/glow effect */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
        <div className="rounded-4xl p-1 bg-gradient-to-r from-[#ebb2ff] to-[#ce85e9] shadow-[0_10px_20px_#5721557e] hover:scale-105 transition-transform">
          <Image
            src="/profile.png"
            alt="Punit Chauhan"
            width={350}
            height={350}
            className="rounded-4xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
