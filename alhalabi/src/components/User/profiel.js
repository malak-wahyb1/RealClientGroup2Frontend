import React from "react";
import "./profiel.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import LogoutIcon from '@mui/icons-material/Logout';
import DataGridDemo from "./userTabel";
import axios from "axios";

const Profile = (props) => {
    const navigate = useNavigate()
    const handleLogout = async()=>{
         try {const response = await axios.post(`http://localhost:4000/logout`);
         console.log(response.data)
         navigate("/home")
    }catch(error){console.log(error
        );}}
  return (
    <main>
    <div className="profile">
      <section>
        <header className="profile-header">
          <div className="profile-img">
            <img
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              width="200"
              alt="ProfileImage"
            />
          </div>
          <div className="profile-nav-info">
            <h3 className="user-name">User</h3>
            <div className="info">
              <FaHome />{" "}
              <p id="state" className="state">
               address
              </p>
            </div>
            <div className="info">
              <FaPhone /> <p className="mobile-no">phone</p>
            </div>
            <div className="info">
              <FaEnvelope />
              <p className="user-mail">email</p>
            </div>
          </div>
        </header>
      </section>
      <section className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <div className="user-bio">
              <div className="user-rating">
                <h3 className="rating">5</h3>
                <div className="appoin">requested order</div>
              </div>
              <div className="profile-btn">
                <Link to="/order">
                  <button className="bookBtn" id="bookBtn">
                   Get your order now 
                  </button>
                </Link>
              </div>
              <div className="profile-btn">
               
                  <button className="bookBtn" id="bookBtn" onClick={handleLogout}>
                  <LogoutIcon />  
                  </button>
               
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          
         <DataGridDemo/>
          
        </div>
      </section>
    </div>
    </main>
  );
};

export default Profile;
