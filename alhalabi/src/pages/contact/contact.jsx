import React from "react";
import img from "../../images/imgContact.png";
import "./contact.css";
import { Input, Button, Rating } from "@mui/material";
import { MdPlace, MdLocalPhone, MdEmail } from "react-icons/md";

import { Rating } from "@mui/lab";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/contact/", {
        fullName: name,
        email: email,
        message: message,
      })
      .then((res) => {
        toast.success("Message sent successfully");
        console.log(res.message);
      })
      .catch((err) => {
        toast.error("Message not sent successfully");
        console.log(err);
      });
  };


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
              <label htmlFor="name">fullName:</label>
              <Input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <Input
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                required
              />
            </div>
            <div className="button">
              <Button variant="contained" type="submit" onClick={handleSubmit}>
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
        <Rating
          name="rating"
          onClick={(e) => {
            axios
              .post("http://localhost:8001/review/", {
                review: e.target.value,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                toast.error("Message not sent successfully");
                console.log(err);
              });
          }}
          max={5}
          required
        />
      </div>
      <ToastContainer />
    </div>
  );
}
