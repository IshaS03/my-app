import "./MainImgStyles.css";
import React from 'react';
import IntroImg from '../Images/MainPageImg.png';
import { Link } from "react-router-dom";

const MainImg = () => {
  return (
    <div className="Main">
        <div className="MaskImg">
            <img className="intro-Img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="Content">
            <p>
                'HI, I AM ISHA SHARMA'
            </p>
            <h1>Front-End Developer</h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default MainImg