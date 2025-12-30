// src/pages/hairstyle/DepartLocks.jsx

import { PageTemplate } from '../../components/PageTemplate';
import { useTheme } from '../../contexts/ThemeContext';

export function DepartLocks() {
  const { theme } = useTheme();

  const pageData = {
    label: 'Départ de Locks',
    description: 'Découvrez nos options de départ de locks.',
    path: '/services/hairstyle/depart-locks',
  };

  const boxStyles = {
    boxGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      marginTop: '32px',
    },
    box: {
      backgroundColor: theme.cardBackground,
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    boxTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: theme.primary,
      marginBottom: '8px',
    },
    boxPrice: {
      fontSize: '16px',
      color: theme.text,
    },
  };

  const services = [
    { title: 'Départ en vanille', price: '65€' },
    { title: 'Départ au crochet', price: '80€' },
    { title: 'Micro twist', price: '100€' },
    { title: 'Départ e braids', price: 'À partir de 90€' },
    { title: 'Pose d\'extension', price: 'Selon le nombre à partir de 60€ si départ' },
    { title: 'Rajout d\'extension', price: '50€ tête entière / 20€ si entre (5 et 15 tiges)' },
  ];

  return (
    <PageTemplate pageData={pageData}>
      <div style={boxStyles.boxGrid}>
        {services.map((service, index) => (
          <div key={index} style={boxStyles.box}>
            <h4 style={boxStyles.boxTitle}>{service.title}</h4>
            <p style={boxStyles.boxPrice}>{service.price}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}