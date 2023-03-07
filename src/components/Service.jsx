import React from "react";
import Hero from "./Hero";
import heroimage from "../assets/night.jpg"
import Trip from "./Trip"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Service = () => {
  return (
    <div>
    <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={heroimage}
        title="Service"
      />
      <Trip />
      <Footer />
    </div>
  );
};

export default Service;
