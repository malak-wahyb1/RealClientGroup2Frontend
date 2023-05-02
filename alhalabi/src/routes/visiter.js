import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar";
function Visiter() {
    return (
      <div className="About">

        <Navbar/>
<Outlet/>
      </div>
    );
  }
  
  export default Visiter;