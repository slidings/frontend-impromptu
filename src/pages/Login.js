import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import apiLogin from "../services/LoginService.js";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Prevent refresh of page
    event.preventDefault();
    apiLogin(user, navigate, setErrors);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <strong style={{ fontSize: "1.2rem", margin: "10px" }}>
          Welcome To Impromptu
        </strong>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
            sx={{ marginBottom: "1rem", width: "300px" }}
            size="large"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            sx={{ marginBottom: "1rem", width: "300px" }}
            size="large"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            sx={{ marginBottom: "1rem", width: "300px" }}
            size="large"
          />
          {errors && (
            <div
              style={{ color: "red", margin: "10px 0", whiteSpace: "pre-line" }}
            >
              {errors}
            </div>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
