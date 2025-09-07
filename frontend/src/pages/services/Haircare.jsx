// src/pages/services/Haircare.jsx

// import { PageTemplate } from '../../components/PageTemplate';
// import { PAGES } from '../../data/navigation';

// export function Haircare() {
//   const pageData = PAGES.Services.subItems.find(item => item.id === 'haircare');
//   return <PageTemplate pageData={pageData} />;
// }



import { PageTemplate } from '../../components/PageTemplate';
import { PAGES } from '../../data/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export function  Haircare() {
// const pageData = PAGES.Produits.subItems.find((item) => item.id === 'offers-products');
  const pageData = PAGES.Services.subItems.find(item => item.id === 'haircare');
  const { theme } = useTheme();

  // ---- Theme-based card styles outside return ----
  const cardStyles = {
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
    cardTitle: { fontSize: '20px', fontWeight: 'bold', color: theme.primary },
    cardDescription: { marginTop: '8px', color: theme.secondary },
  };

  return (
    <PageTemplate pageData={pageData}>
      <div style={cardStyles.cardGrid}>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Bloc 1</h3>
          <p style={cardStyles.cardDescription}>Description spécifique du Bloc 1.</p>
        </div>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Bloc 2</h3>
          <p style={cardStyles.cardDescription}>Description spécifique du Bloc 2.</p>
        </div>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Bloc 3</h3>
          <p style={cardStyles.cardDescription}>Description spécifique du Bloc 3.</p>
        </div>
      </div>
    </PageTemplate>
  );
}