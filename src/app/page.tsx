import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Nav />
      <Hero />
    </main>
  );
}
