import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./Home";
import Project from "./Project";
import Form from "./Form";
import Error from "./Error";
// navbar
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/portfolio/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/form" element={<Form />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}
