// ===================================
// src/pages/About.jsx
// ===================================

import { useTheme } from '../contexts/ThemeContext';

export function About(props) {
  const { theme } = useTheme();
  const styles = {
    container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
    title: { fontSize: '32px', fontWeight: 'bold' },
    content: { marginTop: '32px' },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <div style={styles.content}>
        <p>Learn more about our mission and our team here.</p>
      </div>
    </div>
  );
}