import * as React from "react";
import "./card.css";
import { useContext } from "react";
import CartContext from "./productContext";
import addtocart from "./addtocart.png";
import product from "./product.png";
// import faker from "faker";
import { useState } from "react";
import { Button } from "@mui/material";

export default function CardProduct() {
  const { addToCart } = useContext(CartContext);
  const cards = [
    {
      id: "nescafe",
      name: "nescafe",
      price: "200.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "batata",
      name: "batata",
      price: "600.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "capp",
      name: "capp",
      price: "900.000LL",
      image: product,
      icon: addtocart,
    },
  ];

  const [cart, setCart] = useState({});

  const handleAddToCart = (id, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  
  };

  return (
    <div className="card-contain">
      {cards.map((some, index) => (
        <div className="containerProduct" key={some.id}>
          <div className="cardProduct">
            {cart[some.id] && <span className="quantity">{cart[some.id]}</span>}
            <div className="imgBx">
              <img src={some.image} alt="" />
            </div>

            <div className="contentBx">
              <h2>{some.name}</h2>
              <div className="size">
                <h3>Weight :</h3>
                <span>7</span>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>{some.price}</span>
              </div>
              <Button
  onClick={() => {
    addToCart(some.id,some.name, some.price, some.image,cart[some.id] || 1);
    handleAddToCart(some.id);
  }}
>
  Add To Cart
</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
