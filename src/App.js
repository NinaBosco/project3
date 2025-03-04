import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { TodoWrapper } from "./pages/TodoWrapper";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="todoWrapper" element={<TodoWrapper/>}/>
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </div>
    
    </>
  );
}
export default App;

/*<BrowserRouter>
      
    </BrowserRouter>*/