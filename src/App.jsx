// ===================================
// src/App.jsx
// ===================================

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Topbar } from './components/Topbar';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { SubPage } from './pages/SubPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PAGES } from './data/navigation';
import { GlobalStyles } from './styles/GlobalStyles';

function MainApp(props) {
  const [currentPage, setCurrentPage] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const handleNavigate = (path) => {
    setCurrentPage(path);
    setIsMobileMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    }
  };

  const renderPage = (pagePath) => {
    const allPaths = [
      PAGES.Accueil.path,
      ...PAGES.Produits.subItems.map(item => item.path),
      ...PAGES.Services.subItems.map(item => item.path),
      PAGES.About.path,
      PAGES.Contact.path,
    ];

    let pageData = null;
    for (const key in PAGES) {
      if (PAGES[key].path === pagePath) {
        pageData = PAGES[key];
        break;
      }
      if (PAGES[key].subItems) {
        const subItem = PAGES[key].subItems.find(sub => sub.path === pagePath);
        if (subItem) {
          pageData = subItem;
          break;
        }
      }
    }

    if (pageData) {
      if (pageData.path.startsWith('/products/') || pageData.path.startsWith('/services/')) {
        return <SubPage pageData={pageData} />;
      }
      switch (pageData.id) {
        case 'home':
          return <Home />;
        case 'about':
          return <About />;
        case 'contact':
          return <Contact />;
        default:
          return <Home />;
      }
    }

    return <Home />;
  };

  return (
    <div style={styles.app}>
      <Topbar
        onNavigate={handleNavigate}
        onToggleMenu={handleToggleMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        currentPage={currentPage}
      />
      {isMobileMenuOpen && (
        <MobileMenu
          onNavigate={handleNavigate}
          onClose={handleToggleMenu}
          currentPage={currentPage}
        />
      )}
      <div style={styles.mainContent}>
        {renderPage(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

//export default function App(props) {
export function App(props) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <MainApp />
    </ThemeProvider>
  );
}