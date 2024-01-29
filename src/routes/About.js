import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg1 from "../components/MainImg1";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <MainImg1 Heading="ABOUT ME." Text="This is some Information About Me" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
