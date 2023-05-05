import { useContext } from "react";
import cartContext from "../../components/card/productContext";
import {
  Add,
  Email,
  Home,
  LocationCity,
  Person,
  Phone,
  Remove,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./checkout.css";
function Checkout() {
  const { items } = useContext(cartContext);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };


  if (items.length > 0){


    return (
      <div className="global-container">
        <header className="principal">
          <h1>Checkout</h1>
        </header>
        <main className="principal">
          <div className="cart-preview">
            {items.map((item) => (
              <div className="cart-item">
                <img src={item.image} alt="product" />
                <div>
                  <div>
                    <div className="name">{item.name}</div>
                    <div className="price">
                      <span className="discounted">{item.price}</span>
                    </div>
                  </div>
                  <div className="qty-selector">
                    <span className="material-icons">
                      <Remove />
                    </span>
                    <span className="qty">{item.quantity}</span>
                    <span className="material-icons">
                      <Add />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="shipping">
              <span>Shipping</span>
              <span>$19</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>$148.98</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} id="checkout-form">
            <section>
              <h3>Contact information</h3>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div>
                  <span className="material-icons">
                    <Email />
                  </span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <div>
                  <span className="material-icons">
                    <Phone />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number..."
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
            </section>
            <section>
              <h3>Shipping address</h3>
              <div className="form-group">
                <label htmlFor="full-name">Full name</label>
                <div>
                  <span className="material-icons">
                    <Person />
                  </span>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Enter your full name..."
                    value={fullName}
                    onChange={handleFullNameChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <div>
                  <span className="material-icons">
                    <Home />
                  </span>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your address..."
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div>
                  <span className="material-icons">
                    <LocationCity />
                  </span>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your city..."
                    value={city}
                    onChange={handleCityChange}
                  />
                </div>
              </div>
            </section>
            <button type="submit">Place order</button>
          </form>
        </main>
      </div>
    );
  }
}
export default Checkout;
