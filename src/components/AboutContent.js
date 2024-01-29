import "./AboutContentStyles.css";
import AboutImg from "../Images/AboutImg.jpeg";
import React from "react";

const AboutContent = () => {
  return (
    <div className="About">
      <div className="About-Container">
        <div className="About-Card">
          <h1>Isha Sharma</h1>
          <p>
            A Front-end Web Developer with entry-level experience specializing
            in web development HTML, CSS, MySql and Javascript and frameworks Bootstrap
            and ReastJs. Adapt at identifying opportunities to enhance front-end
            design and improve the user experience.
          </p>
          <h2>Skills:</h2>
          <ul>
            <li>HyperText Markup Language HTML</li>
            <li>Cascading Style Sheets</li>
            <li>JavaSCript</li>
            <li>ReactJs</li>
            <li>MySQL</li>
            <li>Bootstrap</li>
            <li>Version Control: Git and GitHub</li>
          </ul>

        </div>
        <div className="About-Card">
          <img src={AboutImg} alt="About-Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
