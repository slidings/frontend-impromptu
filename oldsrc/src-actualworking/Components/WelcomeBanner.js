import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function getStoredName() {
  return window.localStorage.getItem("name") ?? "";
}

function setStoredName(newName) {
  window.localStorage.setItem("name", newName);
}

function WelcomeBanner({ numTasks, username, onLogout }) {
  const [name, setName] = useState(getStoredName());
  const hasName = name.length > 0;
  function handleNameChangeEvent(e) {
    e.preventDefault();
    const newName = prompt("Change name");

    if (newName.length == 0) {
      setName("");
    } else {
      setName(newName);
      setStoredName(newName);
    }
  }

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
        {hasName ? (
          <>
            <h2>Welcome back! {username}</h2>
          </>
        ) : (
          <h2>Hi there, how may I address you?</h2>
        )}
        {numTasks > 0 ? (
          <p>
            You have <strong>{numTasks}</strong>{" "}
            {numTasks == 1 ? "task" : "tasks"}!
          </p>
        ) : (
          <p>You are all done</p>
        )}
      </center>
    </>
  );
}

export default WelcomeBanner;
