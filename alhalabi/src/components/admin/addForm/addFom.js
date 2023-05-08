import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import "./addForm.css";
import { Sheet } from "@mui/joy";
import axios from "axios";
import {  toast } from "react-toastify";
import CategorySelect from "../categorySelect/categorySelect";
import { useState } from "react";

export default function FormComponent(props) {
  const [open, setOpen] = React.useState(false);
  const [inputValues, setInputValues] = React.useState({});

  const handleInputChange = (e) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if(selectedCategoryId){
    setInputValues((prev) => ({ ...prev, category: selectedCategoryId }));

    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}${props.url}`, inputValues);
      console.log(inputValues);
      toast.success("logIn successful");
      console.log(response);
    } catch (err) {
      console.log(err);
      console.log(inputValues);

      toast.error("Error add Admin ,please try again");
    }
  };
 
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
  
    const handleCategorySelect = (categoryId) => {
      setSelectedCategoryId(categoryId);
    };

  return (
    <section className="addForm">
      <Sheet
        sx={{
          borderRadius: "50px",
          bgcolor: "#0097B2",
          padding: "15px",
          boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.5)",
        }}
      >
        <AddIcon
          sx={{
            color: "white",
            width: "30px",
            zIndex:"10000",
            ":hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleClickOpen}
        />
      </Sheet>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "white",backgroundColor:"#0097b2" }}>
          Add New {props.title}
        </DialogTitle>
       
      <DialogContent >
        <form onSubmit={handleSubmit}>
        {props.inputFields.map((input, index) => (
           <TextField
           key={index}
         
           margin="dense"
           id={input.id}
           label={input.label}
           type={input.type}
           fullWidth
          name={input.name}
           onChange={handleInputChange}
           sx={{ color: "#06023b", backgroundColor: "#0097b2" }}
         />
          ))}
          {props.title==="subCategory"?(<CategorySelect categories={props.categories} onSelect={handleCategorySelect} selectedCategoryId={selectedCategoryId} />
):("")}
        
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button   type="submit">Save</Button>
          </DialogActions>
        </form>
      </DialogContent>
     
     
      </Dialog>
    </section>
  );
}
