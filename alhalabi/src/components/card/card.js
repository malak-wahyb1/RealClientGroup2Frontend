import * as React from "react";
import Card from "@mui/material/Card";
import "./card.css";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import addtocart from "./addtocart.png";
import product from "./product.avif";
// import faker from "faker";
import { useState } from "react";

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
  ];
  // const productsArray= [...Array(20)].map(()=>({
  //   id:faker.datatype.uuid(),
  //   name:faker.commerce.productName(),
  //   price:faker.commerce.price(),
  //   image:faker.random.image(),
  // })
  // )

  return (
    <div className="card-contain">
      {cards.map((some,index)=>(
        <Card sx={{ maxWidth: 270, maxHeight: 380 }}>
        <section className="imageCard" key={index}>
          <img
            src={some.image}
            alt="product_image"
            width={150}
            className="card-image"
          />
        </section>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h1>{some.name}</h1>
            <p>{some.price}</p>
          </Typography>
        </CardContent>
        <section className="cardAction">
          <CardActions>
            <button>
            <img src={some.icon} alt="Addtocart" className="addtocart"
            /></button>
            
          </CardActions>
        </section>
      </Card>
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
