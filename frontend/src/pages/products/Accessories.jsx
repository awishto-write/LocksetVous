// src/pages/products/Accessories.jsx

// import { PageTemplate } from '../../components/PageTemplate';
// import { PAGES } from '../../data/navigation';

// export function Accessories() {
//   const pageData = PAGES.Produits.subItems.find(item => item.id === 'accessories');
//   return <PageTemplate pageData={pageData} />;
// }



import { useNavigate } from 'react-router-dom';
import { PageTemplate } from '../../components/PageTemplate';
import { PAGES } from '../../data/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export function Accessories() {
  const navigate = useNavigate();
  const pageData = PAGES.Produits.subItems.find((item) => item.id === 'accessories');
  const { theme } = useTheme();

  // ---- Theme-based card styles outside return ----
  const cardStyles = {
    cardGrid: {
      display: 'grid',
      //gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // 1fr means each card takes full width, minmax(300px, 1fr) means each card is at least 300px but can grow to fill available space
      gridTemplateColumns: '1fr',
      width: 'min(525px, 100%)',
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
    cardButton: {
      width: '100%',
      marginTop: '16px',
      padding: '8px 16px',
      fontSize: '14px',
      backgroundColor: 'transparent',
      color: theme.primary,
      border: `1px solid ${theme.primary}`,
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
  };

  return (
    <PageTemplate pageData={pageData}>
      <div style={cardStyles.cardGrid}>
        <div style={cardStyles.card}>
          {/* <div style={cardStyles.cardImage}></div> */}
          <div style={{ ...cardStyles.cardImage, backgroundImage: 'url(/accessories5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h3 style={cardStyles.cardTitle}>Accessoires - Abidjan</h3>
          <p style={cardStyles.cardDescription}>Le must-have des locksés et du cheveu afro</p>
          <button
            style={cardStyles.cardButton}
            onClick={() => navigate('/products/accessories/accesories-abidjan')}
            onMouseEnter={(e) => {
              // e.target.style.borderColor = theme.primary;
              // e.target.style.color = theme.primary;
              e.target.style.borderColor = '#1d4ed8';
              e.target.style.color = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = theme.primary;
              e.target.style.color = theme.primary;
            }}
          >
            En savoir plus
          </button>
        </div>
        {/* <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Accessoires Afro</h3>
          <p style={cardStyles.cardDescription}>Pensés pour le confort du cheveu afro et le respect de sa nature.</p>
        </div>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Divers</h3>
          <p style={cardStyles.cardDescription}>Univers capillaires.</p>
        </div> */}
      </div>
    </PageTemplate>
  );
}