"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-2 mx-auto w-11/12 sm:w-4/5 flex items-center justify-between
                 px-4 py-3 bg-[#4241427d] backdrop-blur-md border border-white/20 rounded-full
                 shadow-lg z-50"
    >
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold"><Link href="/" className="nav-link">Punit</Link></h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-base lg:text-lg">
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/testimonials" className="nav-link">
            Testimonials
          </Link>
        </li>
      </ul>

      {/* Contact CTA (desktop only) */}
      <div className="hidden md:flex">
        <a href="#contact" className="btn-gradient rounded-full px-5 py-2 text-sm lg:text-base">
          Contact Me
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ebb2ff]"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-11/12 sm:w-4/5
                     bg-[#424142e6] backdrop-blur-md border border-white/20 rounded-2xl
                     shadow-lg p-6 flex flex-col gap-6 text-center md:hidden"
        >
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="nav-link" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <a
            href="#contact"
            className="btn-gradient rounded-full py-2 px-6 text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
