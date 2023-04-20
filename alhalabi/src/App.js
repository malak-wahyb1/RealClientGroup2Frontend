import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Order from "./pages/order";
import Visiter from "./routes/visiter";
import Admin from "./routes/admin";

import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/sign in ";
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/admin" element={<Admin />}>
            
        </Route> 
        <Route path="/" element={<Visiter />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/order" element={<Order/>}/>

        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<Visiter />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />

        </Route>
          <Route path="/signIn" element ={<SignIn/>}/>
          <Route path="/signUp"element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
