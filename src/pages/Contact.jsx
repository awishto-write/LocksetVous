// ===================================
// src/pages/Contact.jsx
// ===================================

import { useTheme } from '../contexts/ThemeContext';

export function Contact(props) {
  const { theme } = useTheme();
  const styles = {
    container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
    title: { fontSize: '32px', fontWeight: 'bold' },
    content: { marginTop: '32px' },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <div style={styles.content}>
        <p>Get in touch with us for any inquiries.</p>
      </div>
    </div>
  );
}