import { Outlet } from "react-router-dom";
import AdminProfile from "../components/admin/adminProfile/adminProfile";
import Sidebar from '../components/admin/sidebar/sidebar';
function Admin() {
    return (
      <div className="adminContainer">
        <Sidebar/>
        <section className="adminProfile-main">
        <AdminProfile/>
        </section>
        <section className="visitor-main">
          
       <Outlet/>
       </section>
      </div>
    );
  }
  
  export default Admin;