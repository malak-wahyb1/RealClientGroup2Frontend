import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./auth.css";
import img from "./login.png";
import axios from "axios";
import userContext from ".././context/userContext";
import { ToastContainer, toast } from "react-toastify";
import { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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

const theme = createTheme();

export default function SignIn() {
  const { addToken } = useContext(userContext);
  const {goSignUp}=useContext(userContext)

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}customer/login`,
        {
          email,
          password,
        }
      );
      console.log(response.data.token);
      addToken(response.data.token);
      toast.success("logIn successful");
      navigate(from);

      localStorage.setItem("token", "true");
    } catch (error) {
      console.log(error);
      toast.error("Error SignIn, Please Try Again ");
    }
  };

  return (
    <section className="signIn">
      <section className="signIn-img">
        <img src={img} alt="" />
      </section>
      <section className="signIn-form">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
              noValidate
              onSubmit={handleSubmit}
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginleft: 5,
                float: "right",
              }}
            >
              <Avatar sx={{ m: 3, bgcolor: "#0097B2", width: 75, height: 75 }}>
                <LockOutlinedIcon sx={{ width: 50, height: 50 }} />
              </Avatar>
              <Typography component="h1" variant="h4">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ alignItems: "center" }}>
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2, background: "#0097B2" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link onClick={goSignUp} >
                    Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 0 }} />
          </Container>
          <ToastContainer />
        </ThemeProvider>
      </section>
    </section>
  );
}
