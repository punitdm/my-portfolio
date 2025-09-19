import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-32 py-4 bg-[#4241427d] shadow">
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      <ul className="flex gap-6 text-2xl">
        <li>
          <Link href="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link href="/projects" className="nav-link">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">About Me</Link>
        </li>
      </ul>

      <button>⚙️</button>
    </nav>
  );
}
