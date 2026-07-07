import type { Metadata } from "next";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Manifesto — Karwaan Labs",
  description:
    "We believe that with the right intent, you can just do things.",
};

export default function Manifesto() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Nav />
      <article className="px-6 pt-32 pb-24 max-w-2xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10"
          style={{ color: "var(--fg)" }}
        >
          A manifesto
        </h1>

        <div
          className="space-y-6 text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--fg)" }}
        >
          <p>
            You wake up and look at your X timeline. Your feed is riddled
            with news of labs &mdash; American, Chinese, Japanese,
            occasionally Indian &mdash; building amazing things and pushing
            your
            imagination of what&apos;s possible.
          </p>

          <p>
            You get out of your house, ready for work, only to realize that
            the pothole in your road got even bigger due to the rain last
            night, the construction noises still persistent. The air still
            smells like shit and the people are hunched over their phones
            and lonely.
          </p>

          <p>
            You pop open your phone, book a Rapido, head over to LinkedIn to
            hear people complain.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Some are complaining about bad compensation structures at
              Indian tech companies
            </li>
            <li>
              Some are complaining about the toxicity of staying in an
              offshore IT firm; the late Sundays and the early Mondays
            </li>
            <li>
              Some are getting high praise about raising capital for yet
              another problem nobody dared to question &ldquo;why&rdquo;
              because the domain had a .ai in it
            </li>
          </ul>

          <p>
            And yet almost every company talks about AI transformation, how
            engineers will be out of jobs over the next 12 months
            (you&apos;ve been hearing this for 15 months straight), how big
            techs are pushing employees to burn more tokens to bake in
            &ldquo;more AI&rdquo; into their product.
          </p>

          <p>
            After all this, you look up. Still the ugly dumping grounds, the
            musty smell, the honking during traffic, the dread of showing up
            to work and making up reasons why that AI feature is more
            important than serving real users.
          </p>

          <blockquote
            className="border-l-4 pl-5 py-1 my-8 text-xl sm:text-2xl font-medium italic"
            style={{ borderColor: "var(--accent)", color: "var(--fg)" }}
          >
            How do they say everything has changed, when nothing around you
            has changed at all?
          </blockquote>

          <p>
            We attributed the reason to a divide &mdash; opening up quickly
            and dangerously. While AI enables only{" "}
            <strong>some</strong> agentic people to do life-changing work,
            nothing really changes for the anxious student, the overworked
            doctor, the unaware career consultant, for you.
          </p>

          <p>
            This divide is dangerous. It leads to decay and prevents India
            from becoming the land where people{" "}
            <a
              href="https://www.masaladew.com/p/make-them-stay"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              want to stay and make great things.
            </a>
          </p>

          <p>
            While we cannot take on everything all at once, we&apos;re
            reimagining what it means to run a company in the post-AGI age,
            solving problems for the world from India.
          </p>

          <p>
            We believe that win-win games can be created and everyone could
            benefit off them. We also believe that you can work on something
            meaningful, from a place and with people you like, and yet not
            burn yourself out in the process. We believe that if you have
            great ideas, then you have all the help in the world at your
            fingertips to go execute them.
          </p>

          <p className="font-semibold" style={{ color: "var(--fg)" }}>
            We believe that with the right intent, you can just do things.
          </p>

          <p>We envision this future for us, and for all the others who we build for.</p>

          <p>
            <a
              href="mailto:contact@karwaanlabs.com"
              className="underline underline-offset-2 hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              contact@karwaanlabs.com
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}
