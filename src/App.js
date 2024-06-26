import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";
import CommonScreen from "./Components/CommonScreen";
import Login from "./Components/Login";
import apiReadPosts from "./services/ReadAllPosts";
import apiSaveTasks from "./services/SaveAllPosts";

// Update tasks from the API
function getStoredTasks(setTasks) {
  apiReadPosts(setTasks);
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    if (isLoggedIn) {
      getStoredTasks(setTasks);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      apiSaveTasks(tasks);
    }
  }, [tasks, isLoggedIn]);

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <WelcomeBanner
              numTasks={tasks.length}
              username={username}
              onLogout={handleLogout}
            />
            <TaskManager tasks={tasks} setTasks={setTasks} />
            <CommonScreen />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
