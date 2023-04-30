import React, { useState } from "react";
import "./navbar.css";
import logo from "./logo.png";
import logoSmall from "./logo-small.png";
import { Link } from "react-router-dom";
import order from "./order.png";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FormDialog from "../suggestProduct/suggest";
import FormComponent from "../admin/addForm/addFom";
import AdminProfile from "../admin/adminProfile/adminProfile";



function Navbar() {
  const [isMobileNav, setIsMobileNav] = useState(false);


  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };
  return (
    <nav  className={`navbar ${isMobileNav ? "mobile-nav" : ""}`}>
      <ul className="start">
        <li>
          <Link to="/" className="logo">
            <div className="logo-svg" viewBox="0 0 200 60">
              <img src={logo} alt="logo" width={120} height={60} />
            </div>
          </Link>
          <Link to="/" className="logo2">
            <div className="logo-svg" viewBox="0 0 200 60">
              <img src={logoSmall} alt="logo" width={60} height={60} />
            </div>
          </Link>
        </li>
      </ul>
      <div className="center-navbar">
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>
      <ul className="end">
        <li>
          <Link to="/about">About</Link>
          <Link to="/about">
            <InfoIcon />
          </Link>
        </li>
        <li>
          <Link ><FormDialog/></Link>
          <Link >
            <AssignmentIcon />
          </Link>
        </li>
        <li>
          <Link>Contact us</Link>
          <Link>
            <ContactPhoneIcon />
          </Link>
        </li>
        <li>
          <Link>
            <img src={order} alt="order" />
          </Link>
          <Link>
            <img src={order} alt="order" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AccountCircleOutlinedIcon
              style={{ color: "#0097B2", width: "30", height: "30" }}
            />
          </Link>
          <Link to="/profile">
            <AccountCircleOutlinedIcon
              style={{ color: "#0097B2", width: "30", height: "30" }}
            />
          </Link>
        </li>
        <li>
     
          <div
            id="mobile-menu"
            className={`menu-toggle ${isMobileNav ? "is-active" : ""}`}
            onClick={toggleMobileNav}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </li>
      </ul>
    </nav>

  );
}
export default Navbar;
