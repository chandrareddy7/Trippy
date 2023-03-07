import React from "react";
import Hero from "./Hero";
import "./home.css";
import heroimage from "../assets/12.jpg";
import Destination from "./Destination";
import Trip from "./Trip";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Home = () => {
  return (
    <div className="home">
    <Navbar />
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
      <Footer />
    </div>
  );
};

export default Home;
