
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './container/mainLayout';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
// import { RouterProvider } from './components/router'; // might not need since we using react-router-dom to manage routing

function App() {
  return (
    <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;