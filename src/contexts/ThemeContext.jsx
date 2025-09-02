
// ===================================
// src/contexts/ThemeContext.js
// ===================================

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  background: '#f8f4f2',
  text: '#1a1a1a',
  primary: '#007BFF',
  secondary: '#495057',
  cardBackground: '#ffffff',
  accent: '#007BFF',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  borderRadius: '8px',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#f8f4f2',
  primary: '#58A4FF',
  secondary: '#CED4DA',
  cardBackground: '#2d2d2d',
  accent: '#58A4FF',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  borderRadius: '8px',
};

export function ThemeProvider(props) {
  const { children } = props;
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}





// const ThemeContext = createContext();

// const lightTheme = {
//   background: '#ffffff',
//   surface: '#ffffff',
//   text: '#111827',
//   border: '#e5e7eb',
//   hover: '#f3f4f6',
//   activeBackground: '#dbeafe'
// };

// const darkTheme = {
//   background: '#111827',
//   surface: '#1f2937',
//   text: '#f9fafb',
//   border: '#374151',
//   hover: '#374151',
//   activeBackground: '#1e40af33'
// };

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(false);

//   const theme = isDark ? darkTheme : lightTheme;

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }

// Try to make it as a jsx file instead of js