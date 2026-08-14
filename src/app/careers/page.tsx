import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Careers — Karwaan Labs",
  description:
    "Join Karwaan Labs in building frontier technology for real people doing real things.",
};

export default function Careers() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Nav />
      <article className="px-6 pt-32 pb-24 max-w-2xl mx-auto">
        <p
          className="text-xs sm:text-sm uppercase tracking-widest mb-5"
          style={{ color: "var(--muted)" }}
        >
          Careers at Karwaan Labs
        </p>

        <h1
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
          style={{ color: "var(--fg)" }}
        >
          Come build what matters.
        </h1>

        <div
          className="space-y-6 text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--fg)" }}
        >
          <p>
            We&apos;re building accountability systems for the future—small,
            ambitious products that bring frontier technology to real people
            doing real things.
          </p>

          <p>
            We&apos;re early, independent and remote-first. The work is
            exploratory by nature, grounded in outcomes, and shaped by people
            who care about the craft.
          </p>

          <section className="pt-6" aria-labelledby="open-roles">
            <h2
              id="open-roles"
              className="text-xl sm:text-2xl font-semibold tracking-tight mb-5"
              style={{ color: "var(--fg)" }}
            >
              Open roles
            </h2>

            <Link
              href="/careers/ai-engineer-01"
              className="group block rounded-2xl border p-5 sm:p-6 transition-colors duration-150 hover:bg-[var(--border)]/20"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold tracking-tight"
                    style={{ color: "var(--fg)" }}
                  >
                    AI Engineer (Contract)
                  </h3>
                  <p className="mt-2" style={{ color: "var(--muted)" }}>
                    Own the agent infrastructure that powers Saras.
                  </p>
                </div>
                <span
                  className="text-xl transition-transform duration-150 group-hover:translate-x-1"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {["Remote", "3 months", "₹50k/month", "10% profit share"].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full border"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
