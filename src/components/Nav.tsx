"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f5efe6]/95 backdrop-blur border-b border-[#c4a882]">
      {/* Trans pride stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#55cdfc] via-[#f7a8b8] to-[#55cdfc]" />

      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold text-[#3d2b1f] tracking-tight"
        >
          Laur Fischer
          <span className="block text-xs font-normal font-[family-name:var(--font-sans-var)] text-[#8b5e3c] tracking-widest uppercase">
            Trail Running Coach
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide uppercase font-medium transition-colors hover:text-[#8b5e3c] ${
                  pathname === href
                    ? "text-[#8b5e3c] border-b-2 border-[#55cdfc] pb-0.5"
                    : "text-[#5c3d2e]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3d2b1f] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3d2b1f] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3d2b1f] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-[#c4a882] bg-[#f5efe6]">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 text-sm uppercase tracking-wide font-medium border-b border-[#ede0d0] hover:bg-[#ede0d0] transition-colors ${
                  pathname === href ? "text-[#8b5e3c]" : "text-[#5c3d2e]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
