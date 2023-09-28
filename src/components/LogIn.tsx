import React, { useState } from "react";
import "./LogIn.css";
import logo from "../Images/logo2.png";
import CloudSidelogo from "../Images/Cloudside Logo.png";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  IconButton, // Import IconButton
  InputAdornment,
  Card, // Import InputAdornment
} from "@mui/material"; // Import necessary components from Material-UI
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="container back-imag">
      <div className="loginLeft">
        <div className="well">
          <p>Welcome Back</p>
        </div>
        <div className="quote">
          <p>
            Login to continue your journey.
            <br />
            Glad to have you back! Let's get started!
          </p>
        </div>

        <div className="left-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="card-div">
        {/* login form card */}
        <Card className="login-card" sx={{ borderRadius: "20px" }}>
          <form className="login-form">
            <div className="cloud-logo">
              <img src={CloudSidelogo} alt="logo" width={200} />
            </div>
            <div className="login-title">
              <p>Login</p>
            </div>
            <div className="form-input">
              <TextField
                id="username"
                label={<span className="user-label">Email id / User Name</span>}
                variant="standard"
                InputProps={{ style: { color: "black", fontWeight: "500" } }}
                sx={{
                  width: "400px",
                  color: "black",
                  fontWeight: "800px",
                  borderStyle: "none",
                }}
              />
              <br />
              <br />
              <TextField
                id="password"
                label={<span className="user-label">Password</span>}
                type={showPassword ? "text" : "password"}
                variant="standard"
                sx={{ width: "400px" }}
                InputProps={{
                  style: {
                    color: "black",
                    fontWeight: "500",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon style={{ fontSize: "20px" }} />
                        ) : (
                          <VisibilityOffIcon style={{ fontSize: "20px" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <br />
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <span
                      style={{
                        fontWeight: "400",
                        color: "gray",
                        fontSize: "13px",
                      }}
                    >
                      Remember Me
                    </span>
                  }
                />
                <Link
                  href="#"
                  variant="body2"
                  style={{
                    textDecoration: "none",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "13px",
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <br />
              <Button
                variant="contained"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#E4672D",
                  width: "400px",
                  height: "40px",
                  flexShrink: 0,
                  textTransform: "capitalize", // Add this line for lowercase text
                  fontWeight: "550 ",
                  fontSize: "17px",
                }}
                className="form-btn"
              >
                Log In
              </Button>
            </div>

            <br />
            <br />
          </form>
        </Card>
      </div>
    </div>
  );
}

export default LogIn;
