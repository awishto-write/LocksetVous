// ===================================
// src/pages/SubPage.jsx
// ===================================

import { useTheme } from '../contexts/ThemeContext';

export function SubPage(props) {
  const { pageData } = props;
  const { theme } = useTheme();
  const styles = {
    container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
    title: { fontSize: '32px', fontWeight: 'bold' },
    subtitle: { fontSize: '18px', color: theme.secondary, marginTop: '8px' },
    content: { marginTop: '32px' },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginTop: '32px',
    },
    card: {
      backgroundColor: theme.cardBackground,
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      backgroundColor: theme.secondary,
      borderRadius: '8px',
      marginBottom: '16px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.primary,
    },
    cardDescription: {
      marginTop: '8px',
      color: theme.secondary,
    },
  };

  const getBreadcrumbs = (path) => {
    const parts = path.split('/').filter(p => p !== '');
    let currentPath = '';
    return parts.map((part, index) => {
      currentPath += `/${part}`;
      let label = part.charAt(0).toUpperCase() + part.slice(1);
      if (part === 'products') label = 'Produits';
      if (part === 'services') label = 'Services';

      return (
        <span key={index} style={{ color: index === parts.length - 1 ? theme.primary : theme.secondary }}>
          {label} {index < parts.length - 1 && ' / '}
        </span>
      );
    });
  };

  return (
    <div style={styles.container}>
      <div style={{ color: theme.secondary, fontSize: '14px', marginBottom: '16px' }}>
        {getBreadcrumbs(pageData.path)}
      </div>
      <h1 style={styles.title}>{pageData.label}</h1>
      <p style={styles.subtitle}>Description détaillée du contenu disponible dans cette section.</p>
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <div style={styles.cardImage}></div>
          <h3 style={styles.cardTitle}>Service 1</h3>
          <p style={styles.cardDescription}>Description détaillée du contenu disponible dans cette section.</p>
        </div>
        <div style={styles.card}>
          <div style={styles.cardImage}></div>
          <h3 style={styles.cardTitle}>Service 2</h3>
          <p style={styles.cardDescription}>Description détaillée du contenu disponible dans cette section.</p>
        </div>
        <div style={styles.card}>
          <div style={styles.cardImage}></div>
          <h3 style={styles.cardTitle}>Service 3</h3>
          <p style={styles.cardDescription}>Description détaillée du contenu disponible dans cette section.</p>
        </div>
      </div>
    </div>
  );
}