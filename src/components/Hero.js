export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Punit Chauhan</h1>
        <p className="text-lg mb-6">
          I build modern web apps and help brands grow online.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/profile.jpg"
          alt="Punit Chauhan"
          className="w-64 h-64 rounded-4xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
