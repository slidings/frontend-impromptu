import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <strong 
      style={{ fontSize: '1.2rem', margin : "10px" }}>
        Welcome To Impromptu
      </strong>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          sx={{ marginBottom: '1rem', width: '300px' }}
          size="large" // Make the TextField larger
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ marginBottom: '1rem', width: '300px' }}
          size="large" // Make the TextField larger
        />
        <Button type="submit" variant="contained" color="primary" size="large"> {/* Make the Button larger */}
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;