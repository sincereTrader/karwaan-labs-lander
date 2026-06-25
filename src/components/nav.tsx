"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { label: "Masala Dew", href: "https://masaladew.com" },
  // { label: "About", href: "#about" },
  // { label: "Careers", href: "mailto:hire@karwaanlabs.com" },
];

export function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <span
            className="w-8 h-8 rounded-full border-2 flex-shrink-0 transition-colors duration-200"
            style={{
              borderColor: "var(--accent)",
            }}
          />
          <span
            className="text-base font-medium tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            Karwaan Labs
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm px-4 py-1.5 rounded-full transition-all duration-150 hover:opacity-80"
              style={{
                color: "var(--fg)",
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-150 hover:opacity-70 ml-1"
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
          )}
        </div>
      </nav>
    </header>
  );
}
