import React from "react";
import Hero from "./Hero";
import heroimage from "../assets/night.jpg"
import Trip from "./Trip"

const Service = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroimg={heroimage}
        title="Service"
      />
      <Trip />
    </div>
  );
};

export default Service;
