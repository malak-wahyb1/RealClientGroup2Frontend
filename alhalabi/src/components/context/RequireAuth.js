
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.token) {
    return <Outlet/>
  } else {
    return (
      <Navigate to="/signIn" state={{ from: location }} replace />
    );
  }
};

export default RequireAuth;