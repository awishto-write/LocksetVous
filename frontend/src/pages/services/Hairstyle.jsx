// src/pages/services/Hairstyle.jsx

// import { PageTemplate } from '../../components/PageTemplate';
// import { PAGES } from '../../data/navigation';

// export function Hairstyle() {
//   const pageData = PAGES.Services.subItems.find(item => item.id === 'hairstyle');
//   return <PageTemplate pageData={pageData} />;
// }



import { PageTemplate } from '../../components/PageTemplate';
import { PAGES } from '../../data/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

export function Hairstyle() {
  const pageData = PAGES.Services.subItems.find(item => item.id === 'hairstyle');
  const { theme } = useTheme();
  const navigate = useNavigate();

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
    cardButton: {
      width: '100%',
      padding: '8px 16px',
      fontSize: '14px',
      backgroundColor: 'transparent',
      // color: theme.text,
      // border: `1px solid ${theme.border}`,
      color: theme.primary,
      border: `1px solid ${theme.primary}`,
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      // New
      marginTop: '16px',
    },
  };

  return (
    <PageTemplate pageData={pageData}>
      <div style={cardStyles.cardGrid}>
        <div style={cardStyles.card}>
          {/* <div style={cardStyles.cardImage}></div> */}
          <div style={{ ...cardStyles.cardImage, backgroundImage: 'url(/expertiseLocks.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h3 style={cardStyles.cardTitle}>Départ de Locks</h3>
          <p style={cardStyles.cardDescription}>Nos départs crochet, micro twist, vanille twist.</p>
          <button 
                style={cardStyles.cardButton}
                onClick={() => navigate('/services/hairstyle/depart-locks')}
                onMouseEnter={(e) => {
                  // e.target.style.borderColor = '#2563eb';
                  // e.target.style.color = '#2563eb';
                  e.target.style.borderColor = '#1d4ed8';
                  e.target.style.color = '#1d4ed8';
                }}
                onMouseLeave={(e) => {
                  // e.target.style.borderColor = theme.border;
                  // e.target.style.color = theme.text;
                  e.target.style.borderColor = theme.primary;
                  e.target.style.color = theme.primary;
                }}
              >
                En savoir plus
          </button>
        </div>

        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Bloc 2</h3>
          <p style={cardStyles.cardDescription}>Nos extensions naturels humains.</p>
        </div>
        <div style={cardStyles.card}>
          <div style={cardStyles.cardImage}></div>
          <h3 style={cardStyles.cardTitle}>Bloc 3</h3>
          <p style={cardStyles.cardDescription}>Coiffure sur locks, bantu locks, vanille barrels twist.</p>
        </div>
      </div>
    </PageTemplate>
  );
}