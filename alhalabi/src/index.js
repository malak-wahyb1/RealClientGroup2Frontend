import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/context";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       <Toaster
  position="bottom-right"
  reverseOrder={false}
/>       
    <BrowserRouter>
    

    <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    
    </BrowserRouter>
 
  </React.StrictMode>
);


