import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import TodoWrapper  from "./pages/TodoWrapper";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="todoWrapper" element={<TodoWrapper />}/>
          <Route path="contact" element={<Contact />} />
       
      </Routes>
    </div>
    
    </>
  );
}
export default App;
