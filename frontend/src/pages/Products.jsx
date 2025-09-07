// ===================================
// src/pages/Products.jsx
// ===================================

import { useTheme } from '../contexts/ThemeContext';

export function Products(props) {
  const { theme } = useTheme();
  const styles = {
    container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
    title: { fontSize: '32px', fontWeight: 'bold' },
    subtitle: { fontSize: '18px', color: theme.secondary, marginTop: '8px' },
    content: { marginTop: '32px' },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Produits</h1>
      <p style={styles.subtitle}>Découvrez tous nos produits de soin et d'extension.</p>
      <div style={styles.content}>
        <p>This is the main products page. Please select a sub-category from the menu.</p>
      </div>
    </div>
  );
}