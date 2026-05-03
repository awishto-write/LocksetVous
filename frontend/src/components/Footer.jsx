// ===================================
// src/components/Footer.jsx
// ===================================

//import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
    const { theme, isDark } = useTheme();

    const styles = {
    footer: {
      backgroundColor: theme.cardBackground,
      color: theme.text,
      //borderTop: `1px solid ${theme.cardBackground}`,
      borderTop: `1px solid ${theme.secondary}`, // thicker top border
      boxShadow: isDark ?
      //  '0 -4px 10px rgba(0, 0, 0, 0.25)' :
      //  '0 -4px 10px rgba(0, 0, 0, 0.08)',
      '0 -4px 10px rgba(121, 118, 118, 0.46)' : // subtle light shadow for dark mode
      '0 -4px 10px rgba(0, 0, 0, 0.40)', // dark shadow for light mode
      marginTop: 'auto', // Keepts footer at bottom of page
      padding: '12px 0', // Reduced padding to make it shorter
      textAlign: 'center',
      fontSize: '14px',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center'
    },
    copyright: {
      opacity: 0.8,
     // fontWeight: '500',
      fontSize: '0.85rem', // optional: make text slightly smaller
      margin: 0             // remove default paragraph margin
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.copyright}>
          {/* &copy; 2025 Locks&Vous. All rights reserved. */}
          © {new Date().getFullYear()} Locks&Vous. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}



// export function Footer() {
//   const { theme } = useTheme();
//   const styles = {
//     footer: {
//       padding: '24px',
//       textAlign: 'center',
//       fontSize: '14px',
//       color: theme.secondary,
//       marginTop: 'auto',
//       backgroundColor: theme.cardBackground,
//       borderTop: `1px solid ${theme.secondary}`,
//     },
//   };
//   return (
//     <footer style={styles.footer}>
//       © {new Date().getFullYear()} Locks & Vous. Tous droits réservés.
//     </footer>
//   );
// }