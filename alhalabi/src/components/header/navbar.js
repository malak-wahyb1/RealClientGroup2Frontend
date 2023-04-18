import { Link } from "react-router-dom";
import SuggestProduct from "../suggestProduct/suggest";
import logo from "./logo.png";
import "./navbar.css";
import order from './order.png'
function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" width={200} height={200} className="logo" />
      </Link>
      <input type="text" placeholder="Search for product" className="search"/>
       
      <section className="navLink">
      <Link to="/about" >
        About
      </Link>
      <Link>
        <SuggestProduct className='component'/>
        </Link>
      <Link>
     Login/Register
      </Link>
      <Link className="contactLink">
      Contact us
      </Link>
      <Link >
     <img src={order} alt="order" className="imageOrder"/>
      </Link>
      </section>
      
    </header>
  );
}
export default Navbar;
