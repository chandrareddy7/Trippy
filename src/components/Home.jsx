import React from "react";
import Hero from "./Hero";
import "./home.css";
import heroimage from "../assets/12.jpg";
import Destination from "./Destination";
import Trip from "./Trip";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Hero
        cName="hero"
        heroimg={heroimage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />
      <Destination />
      <Trip />
    </div>
  );
};

export default Home;
