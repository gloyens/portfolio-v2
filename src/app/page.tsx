import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Overlay from "@/app/components/Overlay";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <>
      <Overlay />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
