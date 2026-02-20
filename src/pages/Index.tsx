import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="glow-line" />
      <About />
      <div className="glow-line" />
      <Skills />
      <div className="glow-line" />
      <Portfolio />
      <div className="glow-line" />
      <Testimonials />
      <div className="glow-line" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
