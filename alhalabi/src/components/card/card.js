import * as React from "react";
import Card from "@mui/material/Card";
import './card.css'
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import addtocart from './addtocart.png'
import product from './product.avif'
export default function CardProduct() {
  return (
    <Card sx={{ maxWidth: 270 ,maxHeight:380 }}>
      <section className="imageCard">
      <img src={product} alt="product_image" width={150} className="card-image"/>
      </section>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      <h1>Nescafe Coffee Original 3 In 1 19GR X32</h1>
        </Typography>
      </CardContent>
      <section className="cardAction">
      <CardActions >
        <img src={addtocart} alt="Addtocart" className="addtocart"/>
      </CardActions>
      </section>
    </Card>
  );
}
