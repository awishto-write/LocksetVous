// ===================================
// src/pages/About.jsx
// ===================================
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function About(props) {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://placehold.co/1000x600/7B3F00/FFFFFF?text=Locks+%26+Vous+Story+1',
    'https://placehold.co/1000x600/CED4DA/1A1A1A?text=Locks+%26+Vous+Story+2',
    'https://placehold.co/1000x600/2d2d2d/f8f4f2?text=Locks+%26+Vous+Story+3',
  ];

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const styles = {
    container: { 
      padding: '48px 24px', 
      color: theme.text, 
      backgroundColor: theme.background,
      transition: theme.transition, // Added
    },
    title: { 
      fontSize: '32px', 
      fontWeight: 'bold', 
     // marginBottom: '16px',
      marginBottom: "24px", // Modified
      color: theme.accent, // Added
      letterSpacing: "1px", // Added
    },
    content: { 
      marginTop: '32px' 
    },
    textSection: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      lineHeight: "1.8",  // Added
    },
    storyParagraph: {
      //marginBottom: '16px',
      //lineHeight: '1.6',
      color: theme.secondary,
      marginBottom: "20px", // Modified
      fontSize: "18px", // Added
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
    prevButton: {
      position: 'absolute',
      top: '50%',
      left: '16px',
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

    // Added
    highlight: {
      color: theme.accent,
      fontWeight: "600",
    },
    divider: {
      height: "2px",
      width: "60px",
      backgroundColor: theme.accent,
      margin: "32px auto",
      borderRadius: "2px",
    },
  };


  return (
    <div style={styles.container}>

      <div style={styles.textSection}>
         {/* <h1 style={styles.title}>Notre Histoire</h1> */}
        <h1 style={styles.title}>À Propos</h1>

        <p style={styles.storyParagraph}>
          <span style={styles.highlight}>
            Nos cheveux racontent notre histoire.
          </span>
          <br />
          Ils portent la mémoire de nos racines, la puissance de notre culture
          et la richesse de notre identité. Qu’ils soient crépus, bouclés,
          libres ou lockés, ils méritent d’être aimés, compris et magnifiés.
        </p>

        <p style={styles.storyParagraph}>
          Chez <span style={styles.highlight}>Locksetvous</span>, nous croyons
          que chaque chevelure afro est une couronne.
          <br />
          Nous accompagnons celles et ceux qui choisissent d’embrasser leur
          authenticité — qu’il s’agisse de cultiver la beauté des locks ou de
          révéler l’éclat et <span style={styles.highlight}>la force du cheveu naturel</span>.
          <br />
          <span style={styles.highlight}>Notre mission</span>: redonner
          confiance, fierté et amour à notre communauté à travers des soins
          adaptés, un savoir-faire respectueux et une célébration de la
          diversité de nos textures.
        </p>

        <div style={styles.divider}></div>

        <p style={styles.storyParagraph}>
          <span style={styles.highlight}>Les locks sont notre art.</span>
          <br />
          Les cheveux afro sont notre essence.
          <br />
          Et ensemble, ils sont notre héritage.
        </p>

        <p style={{ ...styles.storyParagraph, fontWeight: "600" }}>
          Locksetvous, là où la fierté rencontre la beauté naturelle.
        </p>
      </div>


      {/* <div style={styles.textSection}>
        {/* <h1 style={styles.title}>Notre Histoire</h1> */}
      {/* <h1 style={styles.title}>À Propos</h1>

        <p style={styles.storyParagraph}>
          Nos cheveux racontent notre histoire. <br />
         Ils portent la mémoire de nos racines, la puissance de notre culture et la richesse de notre identité. Qu’ils soient crépus, bouclés, libres ou lockés, ils méritent d’être aimés, compris et magnifiés.
        </p>

        <p style={styles.storyParagraph}>
          Chez Locksetvous, nous croyons que chaque chevelure afro est une couronne. <br />
          Nous accompagnons celles et ceux qui choisissent d’embrasser leur authenticité — qu’il s’agisse de cultiver la beauté des locks ou de révéler l’éclat et la force du cheveu naturel. <br />
          Notre mission : redonner confiance, fierté et amour à notre communauté à travers des soins adaptés, un savoir-faire respectueux et une célébration de la diversité de nos textures.
        </p>

        <p style={styles.storyParagraph}>
          Les locks sont notre art. <br />
          Les cheveux afro sont notre essence. <br />
          Et ensemble, ils sont notre héritage. <br />
        </p>
        <p style={styles.storyParagraph}>
          Locksetvous, là où la fierté r
          encontre la beauté naturelle.
        </p>


      </div> */}
      {/* */}

      <div style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>Découvrez notre galerie de photos</h2>
        <div style={styles.galleryImageContainer}>
          <img
            src={images[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            style={styles.galleryImage}
          />
          <button style={styles.prevButton} onClick={handlePreviousImage}>
            <ChevronLeft size={24} />
          </button>
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




// First version:
// import { useState } from 'react';
// import { ChevronRight } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';

// export function About(props) {
//   const { theme } = useTheme();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [
//     'https://placehold.co/1000x600/58A4FF/FFFFFF?text=Locks+%26+Vous+Story+1',
//     'https://placehold.co/1000x600/CED4DA/1A1A1A?text=Locks+%26+Vous+Story+2',
//     'https://placehold.co/1000x600/2d2d2d/f8f4f2?text=Locks+%26+Vous+Story+3',
//   ];

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const styles = {
//     container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
//     title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' },
//     content: { marginTop: '32px' },
//     textSection: {
//       maxWidth: '800px',
//       margin: '0 auto',
//       textAlign: 'center',
//     },
//     storyParagraph: {
//       marginBottom: '16px',
//       lineHeight: '1.6',
//       color: theme.secondary,
//     },
//     gallerySection: {
//       marginTop: '64px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     galleryTitle: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       marginBottom: '24px',
//       textAlign: 'center',
//       color: theme.primary,
//     },
//     galleryImageContainer: {
//       position: 'relative',
//       width: '100%',
//       maxWidth: '900px',
//       borderRadius: '8px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//     },
//     galleryImage: {
//       width: '100%',
//       height: 'auto',
//       display: 'block',
//       transition: 'opacity 0.5s ease',
//       opacity: 1,
//     },
//     nextButton: {
//       position: 'absolute',
//       top: '50%',
//       right: '16px',
//       transform: 'translateY(-50%)',
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '50%',
//       width: '40px',
//       height: '40px',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//       transition: 'background-color 0.2s ease',
//     },
//     galleryCounter: {
//       marginTop: '16px',
//       fontSize: '14px',
//       color: theme.secondary,
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.textSection}>
//         {/* <h1 style={styles.title}>Notre Histoire</h1> */}
//         <h1 style={styles.title}>À Propos</h1>

//         <p style={styles.storyParagraph}>
//           Nos cheveux racontent notre histoire. <br />
//          Ils portent la mémoire de nos racines, la puissance de notre culture et la richesse de notre identité. Qu’ils soient crépus, bouclés, libres ou lockés, ils méritent d’être aimés, compris et magnifiés.
//         </p>

//         <p style={styles.storyParagraph}>
//           Chez Locksetvous, nous croyons que chaque chevelure afro est une couronne. <br />
//           Nous accompagnons celles et ceux qui choisissent d’embrasser leur authenticité — qu’il s’agisse de cultiver la beauté des locks ou de révéler l’éclat et la force du cheveu naturel. <br />
//           Notre mission : redonner confiance, fierté et amour à notre communauté à travers des soins adaptés, un savoir-faire respectueux et une célébration de la diversité de nos textures.
//         </p>

//         <p style={styles.storyParagraph}>
//           Les locks sont notre art. <br />
//           Les cheveux afro sont notre essence. <br />
//           Et ensemble, ils sont notre héritage. <br />
//         </p>
//         <p style={styles.storyParagraph}>
//           Locksetvous, là où la fierté rencontre la beauté naturelle.
//         </p>

//       </div>

//       <div style={styles.gallerySection}>
//         <h2 style={styles.galleryTitle}>Take a Peek At the Picture Gallery</h2>
//         <div style={styles.galleryImageContainer}>
//           <img
//             src={images[currentImageIndex]}
//             alt={`Gallery image ${currentImageIndex + 1}`}
//             style={styles.galleryImage}
//           />
//           <button style={styles.nextButton} onClick={handleNextImage}>
//             <ChevronRight size={24} />
//           </button>
//         </div>
//         <div style={styles.galleryCounter}>
//           Photo {currentImageIndex + 1} de {images.length}
//         </div>
//       </div>
//     </div>
//   );
// }




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