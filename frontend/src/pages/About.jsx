// ===================================
// src/pages/About.jsx
// ===================================
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function About(props) {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://placehold.co/1000x600/58A4FF/FFFFFF?text=Locks+%26+Vous+Story+1',
    'https://placehold.co/1000x600/CED4DA/1A1A1A?text=Locks+%26+Vous+Story+2',
    'https://placehold.co/1000x600/2d2d2d/f8f4f2?text=Locks+%26+Vous+Story+3',
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const styles = {
    container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
    title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' },
    content: { marginTop: '32px' },
    textSection: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    storyParagraph: {
      marginBottom: '16px',
      lineHeight: '1.6',
      color: theme.secondary,
    },
    gallerySection: {
      marginTop: '64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    galleryTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center',
      color: theme.primary,
    },
    galleryImageContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '900px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
    galleryImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'opacity 0.5s ease',
      opacity: 1,
    },
    nextButton: {
      position: 'absolute',
      top: '50%',
      right: '16px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    galleryCounter: {
      marginTop: '16px',
      fontSize: '14px',
      color: theme.secondary,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        {/* <h1 style={styles.title}>Notre Histoire</h1> */}
        <h1 style={styles.title}>À Propos</h1>
        <p style={styles.storyParagraph}>
          L'histoire de Locks & Vous a commencé avec une passion pour la beauté naturelle des cheveux texturés. Fatiguées par le manque de produits et de services adaptés, les fondatrices ont décidé de créer un espace où chaque mèche serait célébrée et soignée avec expertise. Nous avons commencé petit, dans un salon modeste, avec l'ambition de fournir des soins authentiques et de qualité.
        </p>
        <p style={styles.storyParagraph}>
          Au fil des années, notre communauté a grandi, et nous avons élargi notre offre pour inclure une gamme de produits naturels et des services spécialisés pour les locks et les extensions. Chaque client qui passe notre porte devient une partie de notre histoire, une histoire de célébration de l'identité, de l'artisanat et de la confiance en soi.
        </p>
      </div>
      <div style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>Take a Peek At the Picture Gallery</h2>
        <div style={styles.galleryImageContainer}>
          <img
            src={images[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            style={styles.galleryImage}
          />
          <button style={styles.nextButton} onClick={handleNextImage}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div style={styles.galleryCounter}>
          Photo {currentImageIndex + 1} de {images.length}
        </div>
      </div>
    </div>
  );
}



// import { useTheme } from '../contexts/ThemeContext';

// export function About(props) {
//   const { theme } = useTheme();
//   const styles = {
//     container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
//     title: { fontSize: '32px', fontWeight: 'bold' },
//     content: { marginTop: '32px' },
//   };
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>About Us</h1>
//       <div style={styles.content}>
//         <p>Learn more about our mission and our team here.</p>
//       </div>
//     </div>
//   );
// }