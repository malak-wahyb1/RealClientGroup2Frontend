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
import { Home, Person } from "@mui/icons-material";
import { useContext } from "react";
import cartContext from "../../components/card/productContext";
import { useEffect } from "react";
import userContext from ".././../components/context/userContext";
function Navbar() {
  const { token } = useContext(userContext);
  const { items } = useContext(cartContext);

  const [isMobileNav, setIsMobileNav] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };
  return (
   
    <nav
    className={`navbar ${isMobileNav ? "mobile-nav" : ""} ${isScrolled ? "scroll" : ""}`}
    >
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

      <ul className="end">
        <li>
          <Link to="/">Home</Link>
          <Link to="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          <Link to="/about">
            <InfoIcon />
          </Link>
        </li>
        <li>
          <Link>
            <FormDialog />
          </Link>
          <Link>
            <AssignmentIcon />
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
          <Link>
            <ContactPhoneIcon />
          </Link>
        </li>
        <li className="checkout">
          <Link to="/checkout">
            <img src={order} alt="order" />
            <span style={{ color: "#06023b" }}>
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </Link>
          <Link to="/checkout">
            <img src={order} alt="order" />
            <span>1</span>
          </Link>
        </li>
        <li>
          {token?(<Link to='/user'><Person/></Link>):(   <Link to="/user">SignIn/SignUp</Link>)}
          {token?(<Link to='/user'><Person/></Link>):(     <Link to="/user">
            <AccountCircleOutlinedIcon
              style={{ color: "#0097B2", width: "30", height: "30" }}
            />
          </Link>)}

               
        
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
