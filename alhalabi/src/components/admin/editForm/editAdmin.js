import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import "./editForm.css";
import { Sheet } from "@mui/joy";
export default function EditAdmin(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section >
      <Button
          sx={{
      
            color: "#06023",
          }}
      >
        <EditIcon
          sx={{

            color: "#0097b2",
            width: "30px",
            ":hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleClickOpen}
        />
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "#06023B" }}>Edit {props.title}</DialogTitle>
        <DialogContent>
          {props.inputFields.map((input, index) => (
            <TextField
              key={index}
              autoFocus={index === 0}
              margin="dense"
              id={input.id}
              label={input.label}
              type={input.type}
              fullWidth
              variant="standard"
              sx={{ color: "#06023B" }}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </section>

  );
}
