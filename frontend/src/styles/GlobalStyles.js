// ========================
// src/styles/GlobalStyles.js
// ========================
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function GlobalStyles() {
  const { theme } = useTheme();

  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.background};
        color: ${theme.text};
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      
      #root {
        min-height: 100vh;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  return null;
}