
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Consumer from './Consumer';
import Producer from './Producer';

// to check if there are personal tasks stored 
function getStoredItems() {
  const rawItems = window.localStorage.getItem("tasks");
  if (rawItems != null) {
    return JSON.parse(rawItems);
  } else {
    return [];
  }
}

function setStoredTasks(newItems) {
  window.localStorage.setItem("tasks", JSON.stringify(newItems));
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [items, setItems] = useState([]);
  const [userRequests, setUserRequests] = useState({});

  

  // Function to update the common screen
  const updateCommonScreen = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    setUserRequests((prevRequests) => ({
      ...prevRequests,
      [username]: {
        outgoingRequest: { consumer: [], producer: [] },
        inProgress: [],
      },
    }));
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  const addItem = (itemText) => {
    const newItem = {
      text: itemText,
      inProgress: false,
      username,
      timestamp: new Date().toLocaleString(),
    };

    updateCommonScreen(newItem); // Update common screen

    if (itemText.startsWith('Request:')) {
      setUserRequests((prevRequests) => ({
        ...prevRequests,
        [username]: {
          ...prevRequests[username],
          outgoingRequest: {
            ...prevRequests[username].outgoingRequest,
            consumer: [...prevRequests[username].outgoingRequest.consumer, newItem],
          },
        },
      }));
    } else if (itemText.startsWith('Service:')) {
      setUserRequests((prevRequests) => ({
        ...prevRequests,
        [username]: {
          ...prevRequests[username],
          outgoingRequest: {
            ...prevRequests[username].outgoingRequest,
            producer: [...prevRequests[username].outgoingRequest.producer, newItem],
          },
        },
      }));
    }
  };

  const toggleInProgress = (index) => {
    const item = items[index];
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, inProgress: !item.inProgress } : item
      )
    );
    if (!item.inProgress) {
      setUserRequests((prevRequests) => ({
        ...prevRequests,
        [username]: {
          ...prevRequests[username],
          inProgress: [...prevRequests[username].inProgress, item],
        },
      }));
    }
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/consumer"
              element={
                <Consumer
                  items={items}
                  addItem={addItem}
                  toggleInProgress={toggleInProgress}
                  username={username}
                  setUserRequests={setUserRequests}
                />
              }
            />
            <Route
              path="/producer"
              element={
                <Producer
                  items={items}
                  addItem={addItem}
                  toggleInProgress={toggleInProgress}
                  username={username}
                  setUserRequests={setUserRequests}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home
                  username= {username}
                  onLogout={handleLogout}
                  userRequests={userRequests[username]}
                />
              }
            />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
