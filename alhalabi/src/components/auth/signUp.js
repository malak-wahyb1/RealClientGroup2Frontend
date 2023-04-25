import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { toast,ToastContainer,} from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./layout.png"
import "./auth.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/customer", {
        name,
        phoneNum,
        email,
        address,
        password,
      });
      console.log(response.data);
      toast.success("SignUp successful!", { position: toast.POSITION.BOTTOM_LEFT });
     navigate("/signIn");
    } catch (error) {
      console.error(error);
      toast.error("Error SignUp. Please try again.");
    }
  };

  return (
    <section className="center">
           <image className="signIn-img">
      <img src={img} alt="" />
      </image>
      <section>
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
     
     
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginleft: 5,
              float:"right"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#0097B2", width: 75, height: 75 }}>
              <LockOutlinedIcon sx={{ width: 50, height: 50 }} />
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label=" Full Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Phone Number"
                    label="Phone number"
                    name="PhoneNumber"
                    autoComplete="phone number"
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Address"
                    label="Your Address"
                    name="address"
                    autoComplete="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#0097B2" }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Link
                    href="/signIn"
                    sx={{
                      color: "#0097B2",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
    <ToastContainer/>
          <Copyright sx={{ mt: 8, mb: 0 }} />
        </Container>
      </ThemeProvider>
      </section>
    </section>
  );
}
