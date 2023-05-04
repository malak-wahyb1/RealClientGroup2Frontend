import * as React from "react";
import "./card.css";

import addtocart from "./addtocart.png";
import product from "./product.png";
// import faker from "faker";
import { useState } from "react";
import { Button } from "@mui/material";

export default function CardProduct() {
  const cards = [
    {
      
      name: "nescafe",
      price: "200.000LL",
      image: product,
      icon:addtocart,
    },
    {
      
      name: "batata",
      price: "600.000LL",
      image: product,
      icon:addtocart,
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
    {
      
      name: "capp",
      price: "900.000LL",
      image: product,
      icon:addtocart
    },
  ];
 

  return (
    <div className="card-contain">
      {cards.map((some,index)=>(
       <div className="containerProduct">
       <div className="cardProduct">
         <div className="imgBx">
           <img src={product} alt=""/>
         </div>
         <div className="contentBx">
           <h2>Nike Shoes</h2>
           <div className="size">
             <h3>Weight :</h3>
             <span>7</span>
           
           </div>
           <div className="color">
             <h3>Price :</h3>
             <span></span>
           </div>
           <Button sx={{bgcolor:"hsl(244, 93%, 12%)",color:"white",'&:hover':{color:"hsl(244, 93%, 12%)"}}}>Add To Cart</Button>
         </div>
       </div>
     </div>
      ))}
      

      {/* <div className="aboutUs-card-container">
        {cards.map((member, index) => (
          <div className="aboutUs-card" key={index}>
            <img src={addtocart} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div> */}
      {/* Part 5: Team section */}
      {/* <div className="aboutUs-section aboutUs-team">
        <h2>Our Team</h2>
        <p>Meet the talented individuals behind our success:</p> */}

      {/* <div className="aboutUs-card-container">
          <div className="aboutUs-card">
            <img src={khaled} alt="Team member 1" />
            <h3>Team member 1</h3>
            <p>Description of team member 1</p>
          </div>
          <div className="aboutUs-card">
            <img src={khaled} alt="Team member 2" />
            <h3>Team member 2</h3>
            <p>Description of team member 2</p>
          </div>
          <div className="aboutUs-card">
            <img src={khaled} alt="Team member 3" />
            <h3>Team member 3</h3>
            <p>Description of team member 3</p>
          </div>
        </div> */}
    </div>
    // </div>
  );
}
