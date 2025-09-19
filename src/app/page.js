import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>
    </main>
  );
}