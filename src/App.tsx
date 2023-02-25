import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<div />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
