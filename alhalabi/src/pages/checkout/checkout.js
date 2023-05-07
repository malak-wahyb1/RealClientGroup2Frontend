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
import TruckAnimation from "../../components/orderAnimation/orderAnimation";
import userContext from ".././../components/context/userContext";
import NotUser from "../../components/notUser/notUser";
import { useEffect } from "react";

function Checkout() {
  const { token } = useContext(userContext);

  const { items, updateQuantity } = useContext(cartContext);
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
    items.forEach((item) => updateQuantity(item.id, 0));
    localStorage.removeItem("item");
  };

  const handleAdd = (id) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + 1;
      updateQuantity(id, newQuantity);
    }
  };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    var tempTotal = 0;
    items.forEach((item) => {
      tempTotal += parseInt(item.quantity) * parseFloat(item.price);
    });
    setTotal(tempTotal);
  }, [items]);

  if (token) {
    if (items.length > 0) {
      return (
        <div className="global-container">
          <header className="principal">
            <h1>Checkout</h1>
          </header>
          <main className="principal">
            <div className="cart-preview">
              {items.map((item) => {
                return (
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
                          <Remove
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          />
                        </span>
                        <span className="qty">{item.quantity}</span>
                        <span className="material-icons">
                          <Add onClick={() => handleAdd(item.id)} />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="shipping">
                <span>Shipping</span>
                <span>$19</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>${total}</span>
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
              </section>
              <button type="submit">Place order</button>
            </form>
          </main>
        </div>
      );
    } else if (items.length === 0 || items.length < 0) {
      return (
        <section className="no-order">
          <h1>No Order Yet</h1>
          <h2>We Are Ready To Packge Your Order </h2>

          <TruckAnimation />
        </section>
      );
    }
  } else {
    return <NotUser />;
  }
}
export default Checkout;
