import React from "react";
import Hero from "./Hero";
import heroimage from "../assets/night.jpg"
import Aboutus from "./Aboutus";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const About = () => {
  return (
    <div>
    <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={heroimage}
        title="About"
      />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default About;
