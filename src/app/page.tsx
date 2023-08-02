import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Overlay from "@/app/components/Overlay";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Overlay />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
