import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Aboutme from "./components/Aboutme";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <section className="relative font-sans w-full min-h-screen mx-auto">
    <Container className="font-sans flex-1">
      <Navbar />
      <Hero />
      <Experience />
      <Work />
      <Aboutme />
      <CTASection />
      <Footer className="mt-auto" />
    </Container>
  </section>
  );
}
