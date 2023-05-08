import { Outlet } from "react-router-dom";
import AdminProfile from "../components/admin/adminProfile/adminProfile";
import Sidebar from "../components/admin/sidebar/sidebar";
import adminContext from "../components/admin/adminContext/adminContext";
import { useContext } from "react";
import { Unauthorized } from "../pages/admin/unauthorized/unauthorized";
function Admin() {
  const {tokenAdmin}=useContext(adminContext)
  if(tokenAdmin){
  return (
 
      

    <div className="adminContainer">
      <Sidebar />
      <section className="adminProfile-main">
        <AdminProfile />
      </section>
      <section className="visitor-main">
        <Outlet />
      </section>
    </div>

  );}
  else{
    return(  <Unauthorized/>)
  
  }
}

export default Admin;
