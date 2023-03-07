import React from "react";
import Hero from "./Hero";
import heroimage from "../assets/night.jpg"
import Aboutus from "./Aboutus";

const About = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroimg={heroimage}
        title="About"
      />
      <Aboutus />
    </div>
  );
};

export default About;
