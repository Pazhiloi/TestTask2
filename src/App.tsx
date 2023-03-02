import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NewsPage from "./pages/NewsPage";
function App() {
  return (
    <div className="page-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
