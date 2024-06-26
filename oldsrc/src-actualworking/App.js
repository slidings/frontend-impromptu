import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";
import CommonScreen from "./Components/CommonScreen";
import Login from "./Components/Login";
//import Home from './Components/Home'; // Assuming Home is another component you might use

function getStoredTasks() {
  const rawTasks = window.localStorage.getItem("tasks");
  if (rawTasks != null) {
    return JSON.parse(rawTasks);
  } else {
    return [];
  }
}


function setStoredTasks(newTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(newTasks));
}

function App() {
  const [tasks, setTasks] = useState(getStoredTasks());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState('');
  const [userRequests, setUserRequests] = useState({});

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

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  // Function to update the common screen
  const updateCommonScreen = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <WelcomeBanner numTasks={tasks.length} username={username} onLogout={handleLogout}/>
          <TaskManager username={username} tasks={tasks} setTasks={setTasks} />
          <CommonScreen />
        </>
      ) : (
        <Login onLogin={handleLogin}/>
      )
      }
    </div>
  );
}

export default App;
