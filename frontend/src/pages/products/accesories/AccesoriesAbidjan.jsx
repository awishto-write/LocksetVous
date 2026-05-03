// src/pages/products/accesories/AccesoriesAbidjan.jsx

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageTemplate } from '../../../components/PageTemplate';
import { useTheme } from '../../../contexts/ThemeContext';

export function AccesoriesAbidjan() {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/accessories1.jpg',
    '/accessories2.jpg',
    '/accessories3.jpg',
    '/accessories4.jpg',
    '/accessories5.jpg',
    '/accessories6.jpg',
    '/accessories7.jpg',
    '/accessories8.jpg',
  ];

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const pageData = {
    label: 'Accessoires - Abidjan',
    description: 'Liste de prix pour les accessoires locks disponibles à Abidjan.',
    path: '/products/accessories/accesories-abidjan',
  };

  const boxStyles = {
    pageContent: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 16px',
    },
    sectionTitle: {
      textAlign: 'center',
      color: theme.primary,
      fontSize: '24px',
      fontWeight: '700',
      margin: '48px 0 24px',
    },
    gallerySection: {
      marginTop: '48px',
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
      paddingTop: '62.5%',
      backgroundColor: theme.cardBackground,
    },
    galleryImage: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)',
      objectFit: 'contain',
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
    boxGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '14px',
      marginBottom: '24px',
    },
    itemBox: {
      backgroundColor: theme.cardBackground,
      padding: '14px 18px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.07)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    itemRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap',
    },
    itemLabel: {
      fontSize: '16px',
      fontWeight: '600',
      color: theme.text,
      flex: '1 1 auto',
      minWidth: '0',
    },
    itemPrice: {
      fontSize: '16px',
      fontWeight: '700',
      color: theme.primary,
      whiteSpace: 'nowrap',
    },
    itemNote: {
      fontSize: '14px',
      color: theme.secondary,
      marginTop: '0',
      textAlign: 'left',
      lineHeight: '1.4',
      wordBreak: 'break-word',
    },
  };

  const sections = [
    {
      items: [
        { label: 'Bonnet en satin', price: '1 à 3000 FCFA (2 à 5000)' },
        { label: 'Chouchou en satin', price: '10.000 FCFA' },
        { label: 'Applicateur huile', price: '100 FCFA' },
        { label: 'Vaporisateur', price: '1500 FCFA' },
        { label: 'Peigne massant en bois', price: '1500 FCFA' },
        { label: 'Brosse massante', price: '1000 FCFA' },
        { label: 'Bonnet chauffant', price: '500 FCFA' },
        { label: 'Perles et accessoires', price: '500 FCFA' },
      ]
    },
  ];

  return (
    <PageTemplate pageData={pageData}>
      <div style={boxStyles.pageContent}>
        {sections.map((section) => (
          <div key={section.title || 'main'}>
            {section.title && <h2 style={boxStyles.sectionTitle}>{section.title}</h2>}
            <div style={boxStyles.boxGrid}>
              {section.items.map((item) => (
                <div key={item.label} style={boxStyles.itemBox}>
                  <div style={boxStyles.itemRow}>
                    <span style={boxStyles.itemLabel}>{item.label}</span>
                    <span style={boxStyles.itemPrice}>{item.price}</span>
                  </div>
                  {item.note && <span style={boxStyles.itemNote}>{item.note}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={boxStyles.gallerySection}>
          <h2 style={boxStyles.galleryTitle}>Découvrez notre galerie d'accessoires</h2>
          <div style={boxStyles.galleryImageContainer}>
            <img
              src={images[currentImageIndex]}
              alt={`Galerie accessoires ${currentImageIndex + 1}`}
              style={boxStyles.galleryImage}
            />
            <button style={boxStyles.prevButton} onClick={handlePreviousImage}>
              <ChevronLeft size={24} />
            </button>
            <button style={boxStyles.nextButton} onClick={handleNextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div style={boxStyles.galleryCounter}>
            Photo {currentImageIndex + 1} de {images.length}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}