import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Producer.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField, Grid, List, ListItem, ListItemText } from '@mui/material';

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
  		<strong style={{ margin: '20px', display: 'block' }}>What service would you like to provide?</strong>
		</Box>
      <form onSubmit={handleSubmit}>

	  <TextField
        type="text"
        value={service}
        onChange={(e) => setService(e.target.value)}
        placeholder="Enter your service"
        required
        fullWidth  // To make the TextField take full width of its container
      />
	<br></br>
	<br></br>
	<Grid item>
	<Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: '150px', padding: '10px' }} // Adjust width and padding as needed
          >
            Submit
          </Button>
        </Grid>
    </form>



    <Box className="common-screen">
      <Typography variant="h2" gutterBottom>
        Common Screen
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} style={{ color: item.inProgress ? 'orange' : 'black' }}>
            <ListItemText>
              {item.text} <br />
              <Typography variant="body2">
                by {item.username} at {item.timestamp}
              </Typography>
            </ListItemText>
            {!item.inProgress && item.text.startsWith('Request:') && item.username !== username && (
              <Button onClick={() => toggleInProgress(index)} variant="contained" color="primary">
                Accept
              </Button>
            )}
            {item.inProgress && <Typography variant="body2"> - In Progress</Typography>}
          </ListItem>
        ))}
      </List>
    </Box>
    </div>
  );
}

export default Producer;

