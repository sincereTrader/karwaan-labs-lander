export function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-7xl mx-auto"
    >
      <div>
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-8 w-full"
          style={{ color: "var(--fg)" }}
        >
          Frontier technology,{" "}
          <span style={{ color: "var(--accent)" }}>
            for those who deserve it.
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-xl"
          style={{ color: "var(--muted)" }}
        >
          We build and write about tech and its cultural implications,
          in India and beyond.
        </p>
      </div>

    </section>
  );
}
