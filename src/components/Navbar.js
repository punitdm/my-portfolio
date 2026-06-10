"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { label: "Home",         href: "/"             },
  { label: "Services",     href: "/services"      },
  { label: "About",        href: "/about"         },
  { label: "Projects",     href: "/projects"      },
  { label: "Testimonials", href: "/testimonials"  },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname               = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="sticky top-3 z-50 mx-auto w-11/12 sm:w-4/5 flex items-center justify-between
                   px-5 py-3 rounded-full backdrop-blur-md transition-shadow duration-300"
        style={{
          background: "var(--nav-bg)",
          border: "1px solid var(--nav-border)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold nav-link tracking-tight">
          Punit
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 nav-link"
                  style={active ? { color: "var(--accent)" } : {}}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: theme + CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full transition hover:scale-110"
            style={{ color: "var(--nav-link)" }}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="/#contact"
            className="hidden md:inline-flex btn-gradient rounded-full px-5 py-2 text-sm font-semibold"
          >
            Contact Me
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full transition hover:scale-110"
            style={{ color: "var(--nav-link)" }}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-100 flex flex-col md:hidden"
            style={{ background: "var(--background)" }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <Link href="/" className="text-2xl font-bold nav-link" onClick={() => setOpen(false)}>
                Punit
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full"
                style={{ color: "var(--nav-link)" }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px" style={{ background: "var(--card-border)" }} />

            {/* Links */}
            <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-4 rounded-2xl text-xl font-semibold transition-colors duration-150"
                    style={{
                      color: pathname === href ? "var(--accent)" : "var(--foreground)",
                      background: pathname === href ? "color-mix(in srgb, var(--accent) 8%, transparent)" : "transparent",
                    }}
                  >
                    {label}
                    {pathname === href && (
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="px-6 pb-10 pt-4 flex flex-col gap-3"
            >
              <div className="h-px mb-2" style={{ background: "var(--card-border)" }} />
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-gradient rounded-full py-3.5 text-center font-semibold text-base"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
