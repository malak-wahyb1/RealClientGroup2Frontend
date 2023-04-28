import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Delete from "@mui/icons-material/Delete";
import axios from "axios";

function DeleteComponent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    console.log(props);
    setOpen(false);

    axios
      .delete(`${process.env.REACT_APP_URL}/${props.url}/${props.Id}`)
      .then((response) => {
        console.log(props.Id);
        props.onDeleteAdmin(props.Id);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Button
        name="delete team"
       
        onClick={handleClickOpen}
        sx={{
      
          color: "#0097B2",
        }}
      >
        {<Delete  sx={{color:"white"}} />}
       Delete
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            color: "#f4f4f9",
            backgroundColor: "#0097B2",
            
          }}
        >
          {`Are you sure do you want to delete this ${props.text}?`}
        </DialogTitle>
        <DialogActions
          sx={{
            backgroundColor: "#0097B2",
          }}
        >
          <Button onClick={handleClose} sx={{ color: "#f4f4f9" }}>
            Cancle
          </Button>
          <Button
            onClick={handleCloseDelete}
            variant="contained"
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteComponent;
