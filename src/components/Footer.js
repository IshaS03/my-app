import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
          <div className="Location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
                Vadodara, Gujarat
            </h4>
          </div>

          <div className="Phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9104865807
            </h4>
          </div>
          <div className="Email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              ishas6182@gmail.com
            </h4>
          </div>
        </div>
        <div className="Right">
            <h4>Connect With Me</h4>
            <div className="Social">
            <Link to="https://www.instagram.com/"><FaInstagram
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              /></Link>
            <Link to="twitter.com/Isha_s03"><FaTwitter
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              /> </Link>
            <Link to="linkedin.com"><FaLinkedinIn
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              /></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
