import React from "react";
import Hero from "./Hero";
import heroimage from "../assets/2.jpg";
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroimg={heroimage} title="Contact" />
      <ContactForm />
    </div>
  );
};

export default Contact;
