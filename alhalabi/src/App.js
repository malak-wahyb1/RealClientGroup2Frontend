import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about";
import Order from "./pages/order";
import Visiter from "./routes/visiter";
import Admin from "./routes/admin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<Visiter />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
