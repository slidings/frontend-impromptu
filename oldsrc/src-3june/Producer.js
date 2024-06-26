import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Producer.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Producer({ items, addItem, toggleInProgress, username, setUserRequests }) {
  const [service, setService] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (service) {
      addItem(`Service: ${service}`);
      setService('');
    }
  };

  return (
    <div className="producer">
		<AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Impromptu's Producer
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          	<Button 
          	  variant="contained" 
          	  color="warning" 
          	  size="medium" 
          	  onClick={() => navigate('/')}
          	  sx={{ ml: 2 }} // Optional margin-left to add some space between text and button
          	>
            Back
          	</Button>
        	</Box>
          </Toolbar>
        </AppBar>
     
		<Box sx={{ pt: 8 }}> {/* Adjust the padding-top as needed */}
        <strong>What service would you like to provide?</strong>
     	</Box>
      <form onSubmit={handleSubmit}>

	<input
	  type="text"
	  value={service}
	  onChange={(e) => setService(e.target.value)}
	  placeholder="Enter your service"
	  required
	/>
	<br></br>
	<Button type="submit" color = "success">Submit
	</Button>
    </form>



    <div className="common-screen">
	<h2>Common Screen</h2>
	<ul>
	  {items.map((item, index) => (
	    <li key={index} style={{ color: item.inProgress ? 'orange' : 'black' }}>
	      {item.text} <br />
	      <small>by {item.username} at {item.timestamp}</small>
	      {!item.inProgress && item.text.startsWith('Request:') && item.username !== username && (
		<button onClick={() => toggleInProgress(index)}>Accept</button>
	      )}
	      {item.inProgress && <span> - In Progress</span>}
	    </li>
	  ))}
	</ul>
      </div>
    </div>
  );
}

export default Producer;

