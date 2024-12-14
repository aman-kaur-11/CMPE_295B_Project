import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Logs from "./components/LogTable"; 
import Support from "./components/Support"; 

import "./App.css";

function App() {
  return (
    <Router> 
      <div className="app">
        <Sidebar /> 
        <div className="main-content">
          <Header />
          <Routes>
            
            <Route path="/" element={<Dashboard />} />
            <Route path="/logs" element={<Logs />} /> 
            <Route path="/support" element={<Support />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
