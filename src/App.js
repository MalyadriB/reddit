// src/App.js
import React from "react";
import Navbar from "./Navbar";
import LeftNavbar from "./LeftNavbar";
import Card from "./Card";
import './App.css'; // Import CSS for layout

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <LeftNavbar />
        <div className="card-container">
          <Card />
        
        </div>
      </div>
    </div>
  );
};

export default App;
