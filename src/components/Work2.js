import "./WorkStyles.css";

import Work from "./Work";
import WorkData from "./WorkData";


import React from "react";

const Work2 = () => {
  return (
    <div className="Work">
      <h1 className="Project-Heading">Projects and Services.</h1>
      <div className="Project-Container">
        {WorkData.map((val, ind) =>{
            return(
               <Work 
               key={ind}
               title={val.title}
               text={val.text}
               view={val.view}
               imgsrc={val.imgsrc} 
               /> 
            )
        })}
        
        
      </div>
    </div>
  );
};

export default Work2;
