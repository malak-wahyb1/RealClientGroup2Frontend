import SignIn from "../../components/auth/sign in ";
import { useContext } from "react";
import userContext from ".././../components/context/userContext";
import Profile from ".././../components/User/profiel";
import SignUp from "../../components/auth/signUp";
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";

function LoginUser() {
    const { token } = useContext(userContext);
    const { signup } = useContext(userContext);

  
  
    if (token) {
      return(
      <>
      <Navbar/>
      <Profile />;
      <Footer/>
      </> )
    } else if (signup) {
      return (
        <>
          <SignUp />
        </>
      );
    } else if(!token && !signup) {
      return (
        <>
          <SignIn />
        </>
      );
    }
  }
export default LoginUser;
