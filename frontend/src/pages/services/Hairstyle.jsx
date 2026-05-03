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
      //gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 500px))', // 250 + 250 + gap ≈ 524px, so it helps columns to stay on the same line for lightly larger windows
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
          <div style={{ ...cardStyles.cardImage, backgroundImage: 'url(/prestationIconCut.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h3 style={cardStyles.cardTitle}>Prestation - Abidjan</h3>
          <p style={cardStyles.cardDescription}>Nos départs locks, retwist, entretien, coiffure.</p>
          <button 
                style={cardStyles.cardButton}
                onClick={() => navigate('/services/hairstyle/prestation-abidjan')}
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

        <div style={cardStyles.card}>
          {/* <div style={cardStyles.cardImage}></div> */}
          <div style={{ ...cardStyles.cardImage, backgroundImage: 'url(/prestationIconCut.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h3 style={cardStyles.cardTitle}>Prestation - Nantes</h3>
          <p style={cardStyles.cardDescription}>Nos départs locks, retwist, entretien, coiffure.</p>
          <button
            style={cardStyles.cardButton}
            onClick={() => navigate('/services/hairstyle/prestation-nantes')}
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

      </div>
    </PageTemplate>
  );
}