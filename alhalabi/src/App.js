import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Order from "./pages/order";
import Visiter from "./routes/visiter";
import Admin from "./routes/admin";
import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/sign in ";
import LoginAdmin from "./pages/admin/login/login";
import Dashboard from "./pages/admin/dashboard/dashboardAdmin";
import AdminPage from "./pages/admin/adminPage/adminPage";
import Category from "./pages/admin/category/category";

import RequireAuth from "./components/context/RequireAuth";
// import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
     
      <Routes>
      
        <Route path="/dashboard/admin" element={<LoginAdmin />} />
        <Route path="/dashboard/admin" element={<Admin />}>
          <Route path="/dashboard/admin/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/admin/adminPage" element={<AdminPage />} />
          <Route path="/dashboard/admin/category" element={<Category />} />
        </Route>
        <Route element={<RequireAuth/>}>
       
        
        <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Route>
        
        <Route path="/" element={<Visiter />}>
       
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/dashboard/footer" element={<Footer />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
