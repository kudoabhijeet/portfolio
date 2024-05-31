import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Recommendations />
      <Footer />
    </>
  );
}
