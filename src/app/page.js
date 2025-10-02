import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

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

      <section id="metrices">
        <Metrics />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="workExperience">
        <WorkExperience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="about">
        <About />
      </section>
    </main>
  );
}