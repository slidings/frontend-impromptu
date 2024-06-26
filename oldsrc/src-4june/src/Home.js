
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Home({username, onLogout, userRequests }) {
  return (
    <div className="home">
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
      <h2>Select an Option</h2>
      <div className="options">
        <Link to="/consumer" className="option">
          Consumer
        </Link>
        <Link to="/producer" className="option">
          Producer
        </Link>
      </div>

      // remake request table 
      <div className="request-table">
        <table>
          <thead>
            <tr>
              <th>Outgoing Requests</th>
              <th>In Progress Requests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3>Outgoing Requests</h3>
                <ul>
                  {userRequests &&
                    userRequests.outgoingRequest &&
                    [...userRequests.outgoingRequest.consumer, ...userRequests.outgoingRequest.producer].map(
                      (request, index) => (
                        <li key={index}>{request.text}</li>
                      )
                    )}
                </ul>
              </td>
              <td>
                <h3>In Progress Requests</h3>
                <ul>
                  {userRequests &&
                    userRequests.inProgress &&
                    userRequests.inProgress.map((request, index) => (
                      <li key={index}>{request.text}</li>
                    ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Home;
