
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './container/mainLayout';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import Careers from './pages/careersPage';
import Market from './pages/marketPage';

function App() {
  return (
    <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/market" element={<Market />} />
          </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;