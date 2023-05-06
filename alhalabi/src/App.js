import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Visiter from "./routes/visiter";
import Admin from "./routes/admin";
import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/sign in ";
import LoginAdmin from "./pages/admin/login/login";
import Dashboard from "./pages/admin/dashboard/dashboardAdmin";
import AdminPage from "./pages/admin/adminPage/adminPage";
import Category from "./pages/admin/category/category";
import SubCategory from "./pages/admin/subcategory/subCategory";
import ContactDash from "./pages/admin/contactus/contact.js";
import RequireAuth from "./components/context/RequireAuth";
import Profile from "./components/User/profiel";
import Review from "./pages/admin/ReviewAdmin/review";
import Products from "./pages/admin/products/product";
import Customers from "./pages/admin/customers/customers";
import Orders from "./pages/admin/orders/orders";
import Offers from "./pages/admin/offers/offers";
import Payment from "./pages/admin/Payment/payments";

import { CartProvider } from "./components/card/productContext";
import Checkout from "./pages/checkout/checkout";
import LoginUser from "./pages/logIn/loginUser";

// import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/dashboard/admin" element={<LoginAdmin />} />
          <Route path="/dashboard/admin" element={<Admin />}>
            <Route path="/dashboard/admin/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/admin/adminPage" element={<AdminPage />} />
            <Route path="/dashboard/admin/category" element={<Category />} />
            <Route
              path="/dashboard/admin/subcategory"
              element={<SubCategory />}
            />
            <Route path="/dashboard/admin/products" element={<Products />} />
            <Route path="/dashboard/admin/Orders" element={<Orders />} />
            <Route path="/dashboard/admin/Offers" element={<Offers />} />
            <Route path="/dashboard/admin/contact" element={<ContactDash />} />
            <Route path="/dashboard/admin/customers" element={<Customers />} />
            <Route path="/dashboard/admin/review" element={<Review />} />
            <Route path="/dashboard/admin/payment" element={<Payment />} />
          </Route>

          <Route path="/" element={<Visiter />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<RequireAuth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/user" element={<LoginUser/>}>
          <Route path="/user/signIn" element={<SignIn />} />
          <Route path="/user/signUp" element={<SignUp />} />
          <Route path="/user/profile" element={<Profile/>} />

          </Route>
        
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
