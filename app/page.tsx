import Products from "@/components/products";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Colors from "@/components/colors";
import ContactButton from "@/components/contact-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[60rem]">
        <Intro />
        <About />
      </div>
      <SectionDivider />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center max-w-[60rem]">
        <Experience />
        <Skills />
      </div>
      <Products />
      {/* <Contact /> */}
      <ContactButton />
      <Colors />
    </main>
  );
}
