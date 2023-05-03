import { useEffect, useState } from "react";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import "./adminPage.css";
import CustomizedMenus from "../../../components/admin/role";
import DeleteComponent from "../../../components/admin/delete/delete";
import EditAdmin from "../../../components/admin/editForm/editAdmin";
import FormComponent from "../../../components/admin/addForm/addFom";
function AdminPage() {
  const [Admin, setAdmin] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}/auth`)
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
  function ChangeRole() {
    return alert("hey");
  }
  return (
    <section>
      <h1>Admin</h1>
      <FormComponent
        inputFields={[
          { name: "userName", label: "User Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "FirstName", label: "FullName", type: "email" },
        ]}
        title="Admin"
      />

      <section className="admin-cards">
        {Admin.map((admin) => {
          return (
            <div class="card">
              <div class="left">
                <div class="flag_wrapper">
                  <PersonIcon sx={{ marginTop: "17px" }} />
                  <section className="admin_action">
                    <EditAdmin
                      inputFields={[
                        { name: "userName", label: "User Name", type: "text" },
                        { name: "email", label: "Email", type: "email" },
                        { name: "FirstName", label: "FullName", type: "email" },
                      ]}
                      title="Admin"
                    />
                    <DeleteComponent />
                  </section>
                </div>
              </div>

              <div class="right">
                <h2 class="name">{admin.username}</h2>
                <p class="title">{admin.email}</p>
                <p class="location">
                  {admin.first_name} {admin.last_name}
                </p>

                <div class="interests">
                  <p class="interests_title">Role: </p>
                  <span>
                    <CustomizedMenus Role={Role(admin)} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
export default AdminPage;
