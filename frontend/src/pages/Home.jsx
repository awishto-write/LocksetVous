// ===================================
// src/pages/Home.jsx
// ===================================

import { useTheme } from '../contexts/ThemeContext';

export function Home(props) {
  const { theme, isDark } = useTheme();
  const { onNavigate } = props; // ✅ we get the navigation function from App.jsx

  const styles = {
    container: {
      padding: '48px 24px',
      textAlign: 'center',
      color: theme.text,
      backgroundColor: theme.background,
    },
    heroSection: {
      padding: '64px 0',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      lineHeight: '1.2',
    },
    heroTitleHighlight: {
      color: theme.primary,
      fontStyle: 'italic',
    },
    heroSubtitle: {
      marginTop: '16px',
      fontSize: '20px',
      maxWidth: '800px',
      margin: '16px auto 0',
      color: theme.secondary,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '32px',
    },
    button: {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '9999px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    primaryButton: {
      backgroundColor: theme.primary,
      color: theme.background,
    },
    secondaryButton: {
      backgroundColor: theme.secondary,
      color: theme.background,
    },
    cardSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginTop: '64px',
    },
    card: {
      backgroundColor: theme.cardBackground,
      color: theme.text,
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    cardIcon: {
      width: '48px',
      height: '48px',
      margin: '0 auto 16px',
     // backgroundColor: theme.primary, // First
      backgroundColor: isDark ? 
       '#ffffff' : // white in dark mode
       '#2d2d2d', // black in light mode
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.cardBackground, // First
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: theme.primary,
    },
    cardText: {
      marginTop: '8px',
      color: theme.secondary,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Sublimez vos <span style={styles.heroTitleHighlight}>cheveux naturels</span> avec expertise
        </h1>
        <p style={styles.heroSubtitle}>
          Découvrez nos soins capillaires authentiques, nos extensions premium et nos services personnalisés pour révéler la beauté naturelle de vos cheveux texturés.
        </p>
        <div style={styles.buttonContainer}>
          <button style={{ ...styles.button, ...styles.primaryButton }}
            onClick={() => onNavigate('/services/appointment')}
            >
            Découvrir nos services
          </button>
          <button style={{ ...styles.button, ...styles.secondaryButton }}
            onClick={() => onNavigate('/products/accessories')}
            >
            Nos produits
          </button>
        </div>
      </div>
      <div style={styles.cardSection}>
        <div style={styles.card}>
          <div style={styles.cardIcon}>🌿</div>
          <h3 style={styles.cardTitle}>Produits Naturels</h3>
          <p style={styles.cardText}>
            Formules authentiques aux ingrédients naturels pour nourrir en profondeur.
          </p>
        </div>
        <div style={styles.card}>
          <div style={styles.cardImage}></div>
          <div style={styles.cardIcon}>✂️</div>
          <h3 style={styles.cardTitle}>Expertise Locks</h3>
          <p style={styles.cardText}>
            Spécialistes des locks, tresses et coiffures afro avec 10+ ans d'expérience.
          </p>
        </div> 
        <div style={styles.card}>
          <div style={styles.cardImage}></div>
          {/* <div style={styles.cardIcon}>💎</div> */}
          <div style={styles.cardIcon}>✨</div>
          <h3 style={styles.cardTitle}>Extensions Premium</h3>
          <p style={styles.cardText}>
            Extensions de qualité supérieure, 100% cheveux humains pour un rendu naturel.
          </p>
        </div>
      </div>
    </div>
  );
}





// src/pages/Home.jsx
// import { useTheme } from '../contexts/ThemeContext';

// export function Home(props) {
//   const { theme, isDark } = useTheme();

//   const handleNavigate = (path) => {
//     window.dispatchEvent(new CustomEvent('navigate', { detail: path }));
//   };

//   const styles = { /* keep your styles as before */ };

//   return (
//     <div style={styles.container}>
//       <div style={styles.heroSection}>
//         <h1 style={styles.heroTitle}>
//           Sublimez vos <span style={styles.heroTitleHighlight}>cheveux naturels</span> avec expertise
//         </h1>
//         <p style={styles.heroSubtitle}>
//           Découvrez nos soins capillaires authentiques, nos extensions premium et nos services personnalisés pour révéler la beauté naturelle de vos cheveux texturés.
//         </p>
//         <div style={styles.buttonContainer}>
//           <button
//             style={{ ...styles.button, ...styles.primaryButton }}
//             onClick={() => handleNavigate('/services/appointment')}
//           >
//             Découvrir nos services
//           </button>
//           <button
//             style={{ ...styles.button, ...styles.secondaryButton }}
//             onClick={() => handleNavigate('/products/accessories')}
//           >
//             Nos produits
//           </button>
//         </div>
//       </div>
//       {/* rest stays the same */}
//     </div>
//   );
// }