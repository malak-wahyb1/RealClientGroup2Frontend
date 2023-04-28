import * as React from "react";
import Card from "@mui/material/Card";
import "./card.css";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import addtocart from "./addtocart.png";
import product from "./product.avif";
import { useState } from "react";

export default function CardProduct() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem("localTasks")){
          const storedList = JSON.parse(localStorage.getItem("localTasks"));
          setTasks(storedList);
      }
  },[])

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task)=>{
      const deleted = tasks.filter((t)=>t.id !== task.id);
      setTasks(deleted);
      localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  const handleClear=()=>{
      setTasks([]);
      localStorage.removeItem("localTasks");
  }
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
            <button
            onChange={(e)=>setTask(e.target.value)}>
            <img src={some.icon} alt="Addtocart" className="addtocart"
            
            /></button>
            
          </CardActions>
        </section>
      </Card>
      ))}
      

     
    </div>
    
  );
}
