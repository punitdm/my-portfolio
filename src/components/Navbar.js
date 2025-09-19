import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="mx-auto w-4/5 flex justify-between items-center px-8 py-2 bg-[#4241427d] rounded-4xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 m-2">
  <h1 className="text-2xl font-bold">Punit</h1>

  <ul className="flex gap-6 text-2xl">
    <li>
      <Link href="/" className="nav-link">Home</Link>
    </li>
    <li>
      <Link href="/services" className="nav-link">Services</Link>
    </li>
    <li>
      <Link href="/about" className="nav-link">About</Link>
    </li>
    <li>
      <Link href="/Projects" className="nav-link">Project</Link>
    </li>
    <li>
      <Link href="/testimonials" className="nav-link">Testimonials</Link>
    </li>
  </ul>


  <div className="flex justify-center md:justify-start gap-8">
    <a href="#contact" className="btn-gradient rounded-full">Contact Me</a>
  </div>
  </nav>
  );
}
