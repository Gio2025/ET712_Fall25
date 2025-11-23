import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/home";
import Cities from "./components/cities";
import Mountains from "./components/mountains";
import Islands from "./components/islands";
import Navbar from "./components/navbar";
import NotFound from "./components/notfound";

function App() {
  return (
    <>
      <h1 className='title'>Travel Explorer</h1>

      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/islands" element={<Islands />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
