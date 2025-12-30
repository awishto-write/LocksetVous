// src/pages/products/ProductOffers.jsx

// import { PageTemplate } from '../../components/PageTemplate';
// import { PAGES } from '../../data/navigation';

// export function ProductOffers() {
//   const pageData = PAGES.Produits.subItems.find(item => item.id === 'offers-products');
//   return <PageTemplate pageData={pageData} />;
// }



import { PageTemplate } from '../../components/PageTemplate';
import { PAGES } from '../../data/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export function ProductOffers() {
  const pageData = PAGES.Produits.subItems.find((item) => item.id === 'offers-products');
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
    subtitle: { fontSize: '18px', color: theme.secondary, marginTop: '8px' },
  };

  return (
    <PageTemplate pageData={pageData}>
      <div style={cardStyles.cardGrid}>
        <div style={cardStyles.card}>
          {/* <p style={cardStyles.subtitle}>Description détaillée du contenu disponible dans cette section.</p> */}
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Pack Locks</h3>
          <p style={cardStyles.cardDescription}>Chaque étape de vos locks, du départ à la pousse, sublimée par nos soins.</p>
        </div>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Pack Afro</h3>
          <p style={cardStyles.cardDescription}>De la racine à la longueur, suivez la croissance naturelle de vos cheveux afro.</p>
        </div>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Pack Mix</h3>
          <p style={cardStyles.cardDescription}>Quand locks riment avec beauté afro.</p>
        </div>
      </div>
    </PageTemplate>
  );
}