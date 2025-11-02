
// ===================================
// src/App.jsx
// ===================================

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Topbar } from './components/Topbar';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PAGES } from './data/navigation';
import { GlobalStyles } from './styles/GlobalStyles';
// ✅ Product Pages
import { Accessories } from './pages/products/Accessories';
import { Extensions } from './pages/products/Extensions';
import { Moisturizers } from './pages/products/Moisturizers';
import { ProductOffers } from './pages/products/ProductOffers';
// ✅ Service Pages
import { Appointment } from './pages/services/Appointment';
import { Hairstyle } from './pages/services/Hairstyle';
import { Haircare } from './pages/services/Haircare';
import { Kid } from './pages/services/Kid';
import { ProductServices } from './pages/services/ProductServices';

function MainApp() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate(); // ✅ React Router navigation

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path); // changes URL
    setIsMobileMenuOpen(false);
  };

  const styles = {
    app: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.background,
      color: theme.text,
      transition: 'background-color 0.3s ease',
    },
    mainContent: {
      flex: 1,
    },
  };

  return (
    <div style={styles.app}>
      <Topbar
        onNavigate={handleNavigate}
        onToggleMenu={handleToggleMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      {isMobileMenuOpen && (
        <MobileMenu
          onNavigate={handleNavigate}
          onClose={handleToggleMenu}
        />
      )}
      <div style={styles.mainContent}>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Products */}
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/extensions" element={<Extensions />} />
          <Route path="/products/moisturizers" element={<Moisturizers />} />
          <Route path="/products/offers" element={<ProductOffers />} />

          {/* Services */}
          <Route path="/services/appointment" element={<Appointment />} />
          <Route path="/services/hairstyle" element={<Hairstyle />} />
          <Route path="/services/haircare" element={<Haircare />} />
          <Route path="/services/kid" element={<Kid />} />
          <Route path="/services/offers" element={<ProductServices />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <MainApp />
      </Router>
    </ThemeProvider>
  );
}