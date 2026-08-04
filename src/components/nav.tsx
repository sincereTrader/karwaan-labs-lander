"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Logomark } from "./logomark";

const links = [
  { label: "Saras", href: "https://saras.works" },
  { label: "Masala Dew", href: "https://masaladew.com" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Careers", href: "/careers" },
  // { label: "About", href: "#about" },
];

export function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const themeToggle = mounted && (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-150 hover:opacity-70 flex-shrink-0"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-4 border-b" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <Logomark className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-colors duration-200" />
            <span
              className="text-sm sm:text-base font-medium tracking-wide whitespace-nowrap"
              style={{ color: "var(--fg)" }}
            >
              Karwaan Labs
            </span>
          </a>

          {/* Right side (desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm px-4 py-1.5 rounded-full transition-all duration-150 hover:opacity-80 whitespace-nowrap"
                style={{ color: "var(--fg)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-1">{themeToggle}</div>
          </div>

          {/* Right side (mobile) */}
          <div className="flex sm:hidden items-center gap-2 flex-shrink-0">
            {themeToggle}
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-150 hover:opacity-70 flex-shrink-0"
              style={{ borderColor: "var(--border)", color: "var(--fg)" }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm px-2 py-2.5 rounded-lg transition-all duration-150 hover:opacity-80"
                style={{ color: "var(--fg)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
