
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Consumer.css';

function Consumer({ items, addItem, toggleInProgress, username, setUserRequests }) {
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (request) {
      addItem(`Request: ${request}`);
      setRequest('');
    }
  };

  return (
    <div className="consumer">
      <button onClick={() => navigate('/')}>Back</button>
      <h2>Consumer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Enter your request"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="common-screen">
        <h2>Common Screen</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ color: item.inProgress ? 'orange' : 'black' }}>
              {item.text} <br />
              <small>by {item.username} at {item.timestamp}</small>
              {!item.inProgress && item.text.startsWith('Service:') && item.username !== username && (
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

export default Consumer;
