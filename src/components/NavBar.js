import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Impromptu
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            //onClick={onLogout}
            sx={{ ml: 2 }} // Optional margin-left to add some space between text and button
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
