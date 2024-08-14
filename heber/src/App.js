
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop, {ScrollProvider} from './components/scrollToTop';
import MainLayout from './container/mainLayout';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import MarketPage from './pages/marketPage';

function App() {
  return (
    <ScrollProvider>
      <BrowserRouter>
        <ScrollToTop/>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/market" element={<MarketPage />} />
            </Routes>
          </MainLayout>
      </BrowserRouter>
    </ScrollProvider>
  );
}

export default App;