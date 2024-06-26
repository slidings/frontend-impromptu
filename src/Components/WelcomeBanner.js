import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function WelcomeBanner({ numTasks, username, onLogout }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Welcome back, {username}!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            color="error" 
            size="medium" 
            onClick={onLogout}
            sx={{ ml: 2 }} // Optional margin-left to add some space between text and button
          >
            Logout
          </Button>
        </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <center>
        {
          <>
            <h2>Welcome back! {username}</h2>
          </>
        }
        {numTasks > 0 ? (
          <p>
            You have <strong>{numTasks}</strong>{" "}
            {numTasks == 1 ? "task" : "tasks"}!
          </p>
        ) : (
          <p>You have no pending Requests or Services</p>
        )}
      </center>
    </>
  );
}

export default WelcomeBanner;
