import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-32 py-4 bg-[#4241427d] shadow">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
      <button>⚙️</button>
    </nav>
  );
}
