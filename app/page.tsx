import Products from "@/components/products";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <Intro />
        <About />
      </div>
      <SectionDivider />
      <Skills />
      <Experience />
      <Products />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}
