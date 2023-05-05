import * as React from "react";
import "./card.css";
import { useContext } from "react";
import CartContext from "./productContext";
import addtocart from "./addtocart.png";
import product from "./product.png";
import { useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-hot-toast";


export default function CardProduct() {
  const { addToCart } = useContext(CartContext);

  const cards = [
    {
      id: "1",
      name: "nescafe",
      price: "200.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "2",
      name: "batata",
      price: "600.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "3",
      name: "capp",
      price: "900.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "4",
      name: "nescafe",
      price: "200.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "5",
      name: "batata",
      price: "600.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "6",
      name: "capp",
      price: "900.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "7",
      name: "nescafe",
      price: "200.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "8",
      name: "batata",
      price: "600.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "9",
      name: "capp",
      price: "900.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "10",
      name: "nescafe",
      price: "200.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "11",
      name: "batata",
      price: "600.000LL",
      image: product,
      icon: addtocart,
    },
    {
      id: "12",
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
    toast('Successfully Added!', {
      icon: '👏',
    });
  };

  return (
    <div className="card-contain">

      {cards.map((some, index) => (
        <div className="containerProduct" key={some.id}>
          <div className="cardProduct">
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
                  addToCart(
                    some.id,
                    some.name,
                    some.price,
                    some.image,
                    cart[some.id] || 1
                  );
                  handleAddToCart(some.id);
               
                }}
                sx={{
                  backgroundColor:"#0097b2",
                  color:"white"
                  ,'&:hover':{
                    color:"#0097b2"
                  }
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
