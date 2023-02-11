import React from "react";
import "./App.css";
import HomePage from "./component/HomePage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginScreen from "./component/login/LoginScreen";
function App() {
  const user = false;

  return (
    <div className="app">
      <Router>
        {/* {!user ? (
          <LoginScreen />
        ) : ( */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
