import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar";
function Visiter() {
    return (
      <div className="About">
        <Navbar/>
        <section className="website">
<Outlet/>
</section>

      </div>
    );
  }
  
  export default Visiter;