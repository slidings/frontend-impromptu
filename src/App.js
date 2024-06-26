import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <NavBar />
                <LogIn />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <NavBar />
                <SignUp />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
