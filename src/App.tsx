import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
