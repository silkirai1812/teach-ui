
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import AppShowcase from "../components/AppShowcase";
import Students from "../components/Students";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tools />
      <AppShowcase />
      <Students />
      <Stats />
      <Testimonials />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
