import { Outlet } from "react-router-dom";
import { AdminProvider } from "../components/admin/adminContext/adminContext";
import AdminProfile from "../components/admin/adminProfile/adminProfile";
import Sidebar from "../components/admin/sidebar/sidebar";
function Admin() {
  return (
    <AdminProvider>
    <div className="adminContainer">
      <Sidebar />
      <section className="adminProfile-main">
        <AdminProfile />
      </section>
      <section className="visitor-main">
        <Outlet />
      </section>
    </div>
    </AdminProvider>
  );
}

export default Admin;
