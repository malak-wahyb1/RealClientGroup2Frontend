import "./footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import FormDialog from "../suggestProduct/suggest";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer className="footer-contain" >
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="ul-footer">
          <li className="li-footer">
            <a className="a-footer" href="https://www.facebook.com/">
              <FaFacebook className="icon-footer"/>
            </a>
          </li>
          <li className="li-footer">
            <a className="a-footer" href="https://www.instagram.com/">
              <FaInstagram className="icon-footer"/>
            </a>
          </li>
          <li className="li-footer">
            <a
              className="a-footer"
              href="https://api.whatsapp.com/send?phone=123456789"
            >
              <FaWhatsapp className="icon-footer" />
            </a>
          </li>
         
          <li className="li-footer">
            <a className="a-footer" href="/dashboard/contact-us">
              Contact Us
            </a>
          </li>
        </ul>

            <p class="copyright">Alhalabi © 2023</p>
      </footer>
    
  );
}

export default Footer;
