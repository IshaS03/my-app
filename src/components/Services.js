import { Link } from "react-router-dom";
import "./ServicesStyles.css";

import React from 'react'

const Services = () => {
  return (
    
    <div className="Services">
        <div className="Card-Container">
            <div className="Card">
                <h3>Front-end Website Development</h3>
                <p>It consists of the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. </p>
                <p>for more Details...</p>
                <Link to="/Contact" className="btn"> Contact Me </Link>
            </div>
            <div className="Card">
                <h3>Web Designing</h3>
                <p>It consists of the tasks associated with creating the visual and interactive elements of a website. </p>
                <p>for more Details...</p>
                <Link to="/Contact" className="btn"> Contact Me </Link>
            </div>
        </div>
    </div>
  )
}

export default Services
