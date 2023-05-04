import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";
function Visiter() {



  return (
    <div className="About">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}


export default Visiter;