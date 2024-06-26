import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("");
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Impromptu
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {localStorage.getItem("username") ? (
            <Button
              variant="contained"
              color="error" // Changed to indicate a different action
              size="large"
              onClick={handleLogout}
              sx={{ ml: 2 }}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => navigate("/login")} // Changed to handleLogin for demonstration
              sx={{ ml: 2 }}
            >
              Log In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
