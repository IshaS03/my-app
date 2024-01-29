import "./WorkStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="Project-Card">
          <h2 className="Project-Title">{props.title}</h2>
          <div className="Project-Details">
            <p>
              {props.text}
            </p>
          </div>
          <NavLink to={props.view} className="btn">View Project</NavLink>
          <img src={props.imgsrc} alt="portfolio-image"/>
          
        </div>
  );
};

export default Work;
