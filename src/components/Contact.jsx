import React from "react";
import Hero from "./Hero";
import heroimage from "../assets/2.jpg";
import ContactForm from "./ContactForm.jsx";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Contact = () => {
  return (
    <div>
    <Navbar />
      <Hero cName="hero-mid" heroimg={heroimage} title="Contact" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
