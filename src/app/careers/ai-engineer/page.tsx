import type { Metadata } from "next";
import { Nav } from "@/components/nav";

const APPLY_URL = "mailto:contact@karwaanlabs.com";

export const metadata: Metadata = {
  title: "AI Engineer (Contract) — Karwaan Labs",
  description:
    "Own the agent infrastructure that powers Saras. A 3-month remote contract role at Karwaan Labs.",
};

const meta = ["Remote", "Contract · 3 months", "2+ years"];

export default function AIEngineerContract() {
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
            , we&apos;re building the accountability systems of the future for
            busy professionals. We&apos;re starting out by solving standardized
            test prep in a way that creates real outcomes for real users,
            beyond the benchmarks, with ambitions to make a huge dent in this
            $120B+ market.
          </p>

          <p>
            What we build through Saras feeds forward towards our even larger
            ambitions at Karwaan Labs: to bring frontier technology to an
            exciting space where it can produce meaningful outcomes beyond
            benchmarks. We&apos;re independent, bootstrapped, remote-first but
            mission-oriented.
          </p>

          <p>
            The role involves dealing with a new class of software altogether,
            which is 80% configuration, 15% coding with agents and 5% tasteful
            intuition about systems. Which is why you&apos;d be expected to
            learn quickly, make mistakes and have a fun time working on
            important problem statements that matter to real people doing real
            things. Hermes, Codex and the rest of the stack are your co-workers;
            be ready to build the way engineering will get done in the future.
          </p>

          <h2
            className="text-xl sm:text-2xl font-semibold tracking-tight pt-6"
            style={{ color: "var(--fg)" }}
          >
            About the role
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Own and evolve the platform that Saras runs on, custom-built with
              open source components. Make onboarding repeatable, and automate
              as much of the work as possible. By eliminating the recurring work
              over time, you create room for the higher-leverage parts of the
              charter
            </li>
            <li>
              Build messaging gateways that help Saras scale across platforms
              while preserving continuity. Saras lives on Telegram today, with
              WhatsApp and iMessage on the roadmap
            </li>
            <li>
              Build the systems around the agent: conversational intake,
              personalized study plans, routines, payments and integrations with
              proprietary 3P platforms
            </li>
            <li>
              Share your learnings through social channels and, where it makes
              sense, make open source contributions to high-profile projects.
              Build career capital and exemplify how to build outcome-driven
              agents
            </li>
          </ul>

          <p>
            The stack is intentionally open-ended, but you&apos;ll work with
            autonomous AI agents, multi-tenant messaging, Docker, cron-driven
            automation, cloud deployment and agent frameworks in the
            Hermes/OpenClaw lineage. You&apos;ll also own the operational layer:
            per-profile logging, memory-integrity checks and gateway health. If
            you can reason about self-running agents and production cloud
            systems, you can pick up the specifics on the job.
          </p>

          <p>
            This is not a research-only or pure backend role. You&apos;ll configure
            agents, write the code and docs, make product calls, and own
            decisions from day one.
          </p>

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
              <strong>Work style:</strong> Remote-first, with a sustainable
              rhythm that protects working hours, leaves room for mentorship,
              and makes wellness part of the way we work
            </li>
            <li>
              <strong>Fixed component:</strong> ₹50k/month
            </li>
            <li>
              <strong>Profit share:</strong> 10% of Saras&apos;s gross profit, paid
              at the end of the contract term, with no ceiling
            </li>
            <li>
              <strong>Tooling:</strong> All AI tools and subscriptions, fully
              expensed
            </li>
            <li>
              <strong>What could come next:</strong> If things work out between
              us and the business keeps booming, the role could convert to a
              founding engineer role with meaningful equity
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

          <div className="pt-10">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-medium px-7 py-3 rounded-full transition-opacity duration-150 hover:opacity-85"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              Apply via email
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
