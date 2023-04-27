import "./about.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import MyImg from "../../images/simpleSupermarket.jpeg";
function About() {
  return (
    <div className="about-main">
      <h1 className="about-section-header">About Us</h1>
      <p className="about-section-content">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      <div className="about-img-map">
        <img className="about-image" src={MyImg} />
        <iframe
          title="Map of Halabi Supermarket"
          className="about-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.7046602785639!2d36.07736764231194!3d34.549229891802845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152225d32eb4b109%3A0x390a62cfbb75b19b!2z2KfZhNit2YTYqNmKINmE2YTYqtis2KfYsdip!5e0!3m2!1sen!2slb!4v1681889550925!5m2!1sen!2slb"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="about-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
          {/* <p>AlHalabisupermarketfacebook.com</p> */}
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
          {/* <p>AlHalabisupermarketinstagram.com</p> */}
        </a>

        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <FaWhatsapp />
          {/* <p>AlHalabisupermarketwhatsapp.com</p> */}
        </a>
      </div>
    </div>
  );
}

export default About;
