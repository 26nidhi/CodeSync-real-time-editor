// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage"; // Example component
import Dashboard from "./components/Dashboard"; // Example component
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
