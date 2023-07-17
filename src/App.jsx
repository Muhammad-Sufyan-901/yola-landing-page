import React from "react";
import Aos from "aos";
import { Hero, Cards, Facts, Features, Courses, Pricing, Newsletter, Contact, Footer } from "./components";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
