import "./footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=123456789">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="/dashboard/contact-us">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
