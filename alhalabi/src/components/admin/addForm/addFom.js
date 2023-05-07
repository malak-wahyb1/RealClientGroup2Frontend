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
import { ToastContainer, toast } from "react-toastify";

export default function FormComponent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [first_name, setFirstName] = React.useState();
  const [last_name, setLastName] = React.useState();

  const handleSubmit = async (e) => {
    e.preventdefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}auth/register`, {
        email,
        username,
        password,
        first_name,
        last_name,
      });
      toast.success("logIn successful");
      console.log(response);
    } catch (err) {
      console.log(err);
      toast.error("Error add Admin ,please try again")
      
    }
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
            ":hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleClickOpen}
        />
      </Sheet>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "#06023B" }}>
          Add New {props.title}
        </DialogTitle>
       
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            autoFocus
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />
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
