import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-2 mx-auto w-4/5 flex justify-between items-center
                    px-3 py-2 bg-[#4241427d] backdrop-blur-md border border-white/20 rounded-full
                    shadow-lg hover:shadow-2xl transition-all duration-300 z-50">
      <h1 className="text-2xl font-bold pl-4">Punit</h1>

      <ul className="flex gap-10 text-2xl">
        <li><Link href="/" className="nav-link">Home</Link></li>
        <li><Link href="/services" className="nav-link">Services</Link></li>
        <li><Link href="/about" className="nav-link">About</Link></li>
        <li><Link href="/Projects" className="nav-link">Project</Link></li>
        <li><Link href="/testimonials" className="nav-link">Testimonials</Link></li>
      </ul>

      <div className="flex justify-center md:justify-start gap-8">
        <a href="#contact" className="btn-gradient rounded-full">Contact Me</a>
      </div>
    </nav>
  );
}
