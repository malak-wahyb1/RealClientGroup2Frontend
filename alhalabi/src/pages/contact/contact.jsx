import React from "react";
import img from "../../images/imgContact.png";
import "./contact.css";
import { Input, Button, Rating } from "@mui/material";
import { MdPlace, MdLocalPhone, MdEmail } from "react-icons/md";
// import { Rating } from "@mui/lab";

export default function contact() {
  return (
    <div className="container">
      <div className="info-contact">
        <div className="Icons-info">
          <div className="info-container">
            <div className="icon">
              <MdPlace />
            </div>
            <span>Akkar , Halba</span>
          </div>
          <div className="info-container">
            <div className="icon">
              <MdEmail />
            </div>
            <span>alhalabi@gmail.com</span>
          </div>
          <div className="info-container">
            <div className="icon">
              <MdLocalPhone />
            </div>
            <span>+96176885959</span>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="inputs-form">
          <div className="inputs">
            <span>Contact Us</span>
            <div>
              <label htmlFor="name">Name:</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <Input id="message" name="message" required />
            </div>
            <div className="button">
              <Button variant="contained" type="submit">
                Send Message
              </Button>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="contact" />
        </div>
      </div>
      <div className="map">
        <div className="map-location">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.2223329762896!2d36.07304047651529!3d34.547925672974394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152225f1b126f30d%3A0xfedee73d1ffab8ce!2z2KfZhNit2YTYqNmKINmE2YTYqtis2KfYsdip!5e0!3m2!1sen!2slb!4v1682872327294!5m2!1sen!2slb"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="feedback">
          <label htmlFor="rating">Rating:</label>
          <Rating name="rating" max={5} required />
      </div>
    </div>
  );
}
