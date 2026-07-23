import type { Metadata } from "next";
import { Nav } from "@/components/nav";

// TODO: swap in the Youform application link
const APPLY_URL = "#";

export const metadata: Metadata = {
  title: "AI Engineer (Contract) — Karwaan Labs",
  description:
    "Own the agent infrastructure that powers Saras. A 3-month remote contract role at Karwaan Labs.",
};

const meta = ["Remote", "Contract · 3 months", "Noida", "2+ years"];

const skills = [
  "Production AI systems",
  "Software Architecture",
  "Problem Solving",
  "OpenClaw configuration",
  "Large Language Models and finetuning",
  "Agent Memory Management",
];

export default function Careers() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Nav />
      <article className="px-6 pt-32 pb-24 max-w-2xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5"
          style={{ color: "var(--fg)" }}
        >
          AI Engineer (Contract)
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {meta.map((item) => (
            <span
              key={item}
              className="text-xs sm:text-sm px-3 py-1 rounded-full border"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {item}
            </span>
          ))}
        </div>

        <div
          className="space-y-6 text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--fg)" }}
        >
          <p>
            With{" "}
            <a
              href="https://saras.works"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              Saras
            </a>
            , we&apos;re building the learning system for the future for busy
            professionals. We&apos;re starting out by solving standardized test
            prep, with ambitions to make a huge dent in this $120B+ market.
          </p>

          <p>
            What we build through Saras feeds forward towards our even larger
            ambitions at Karwaan Labs. We&apos;re independent, bootstrapped,
            remote-first but mission-oriented. We&apos;re very early in the
            game, and have the right room to experiment and bring frontier tech
            to those who deserve it.
          </p>

          <p>
            The role involves dealing with a new class of software altogether,
            which is 80% configuration, 15% coding with agents and 5% tasteful
            intuition about systems. Which is why you&apos;d be expected to
            learn quickly, make mistakes and have a fun time working on
            important problem statements.
          </p>

          <h2
            className="text-xl sm:text-2xl font-semibold tracking-tight pt-6"
            style={{ color: "var(--fg)" }}
          >
            About the role
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Own the agent infrastructure that powers Saras: design, build, and
              maintain (~40 hours/week)
            </li>
            <li>
              Take key architectural decisions based on user pulse and new
              developments in agent frameworks
            </li>
            <li>
              Document key learnings tastefully and call out architecture limits
              well in advance; take part in setting long-term strategy of the
              product
            </li>
          </ul>

          <h2
            className="text-xl sm:text-2xl font-semibold tracking-tight pt-6"
            style={{ color: "var(--fg)" }}
          >
            Contract terms
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Duration:</strong> 3 months initial, with option to extend
              to 6 months by mutual agreement
            </li>
            <li>
              <strong>Cash:</strong> ₹35–50k/month
            </li>
            <li>
              <strong>Profit share:</strong> 15% of Saras&apos;s net profit
              after 1L+ MRR, paid quarterly
            </li>
            <li>
              <strong>Tooling:</strong> All AI tools and subscriptions, fully
              expensed
            </li>
          </ul>

          <p style={{ color: "var(--muted)" }}>
            After the 3-month period, we&apos;re open to renegotiate the terms
            of the contract subject to product trajectory and work performance.
          </p>

          <h2
            className="text-xl sm:text-2xl font-semibold tracking-tight pt-6"
            style={{ color: "var(--fg)" }}
          >
            What we&apos;re looking for
          </h2>

          <p>
            Expecting the following at a minimum, with some exceptions for
            stellar profiles:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>2+ years of experience working on production-grade systems</li>
            <li>
              1+ years of experience building/contributing to AI projects;
              exposure to OpenClaw/Hermes frameworks is a strong plus
            </li>
            <li>
              Fluency with concepts of agent memory, self-continuing loops and
              agent skills
            </li>
            <li>
              Above all, apply only if this resonates with you strongly:{" "}
              <a
                href="/manifesto"
                className="underline underline-offset-2 hover:opacity-80"
                style={{ color: "var(--accent)" }}
              >
                our manifesto
              </a>{" "}
              &mdash; be prepared to ask and answer questions!
            </li>
          </ul>

          <p>
            Applicants with compelling GitHub profiles or portfolios will be
            preferred over swanky resumes.
          </p>

          <h2
            className="text-xl sm:text-2xl font-semibold tracking-tight pt-6"
            style={{ color: "var(--fg)" }}
          >
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs sm:text-sm px-3 py-1 rounded-full border"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="pt-10">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-medium px-7 py-3 rounded-full transition-opacity duration-150 hover:opacity-85"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              Apply for this role
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
