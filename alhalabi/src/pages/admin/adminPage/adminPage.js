import { useEffect, useState } from "react";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import "./adminPage.css";
import CustomizedMenus from "../../../components/admin/role";

function AdminPage() {
 
  const [Admin, setAdmin] = useState([]);
  useEffect(() => {
    console.log("http://localhost:4000");
    axios
      .get(`http://localhost:4000/auth`)
      .then((response) => {
        console.log(response.data.response);
        // add an `id` property to each row object
        const data = response.data.response.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setAdmin(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function Role(admin) {
    if (admin.role === 1) {
      return "admin";
    } else if (admin.role === 0) {
      return "super admin";
    }
  }

  return (
    <section>
      <h1>Admin</h1>
      <section className="admin-cards">
        {Admin.map((admin) => {
          return (
            <div class="card">
              <div class="interests">
                <CustomizedMenus  />
              </div>
              <div class="left">
                <div class="flag_wrapper">
                  <PersonIcon sx={{ marginTop: "17px" }} />
                </div>
              </div>

              <div class="right">
                <h2 class="name">{admin.username}</h2>
                <p class="title">{admin.email}</p>
                <p class="location">
                  {admin.first_name} {admin.last_name}
                </p>

                <p class="interests_title">Role:{Role(admin)} </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
export default AdminPage;
