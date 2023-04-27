import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import './addForm.css'
import { Sheet } from '@mui/joy';
export default function FormComponent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className='addForm' >
      <Sheet sx={{ borderRadius: "50px", bgcolor: "#0097B2",padding:"15px",boxShadow:"0px 1px 7px rgba(0, 0, 0, 0.5)" ,}}>

        <AddIcon sx={{color:"white",width:"30px",':hover':{
            cursor:"pointer",
        }}} onClick={handleClickOpen}/>
     </Sheet>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{color:"#06023B"}}>Add New {props.title}</DialogTitle>
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
              sx={{color:"#06023B"}}
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