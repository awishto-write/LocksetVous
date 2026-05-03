// src/pages/hairstyle/PrestationAbidjan.jsx

import { PageTemplate } from '../../../components/PageTemplate';
import { useTheme } from '../../../contexts/ThemeContext';

export function PrestationAbidjan() {
  const { theme } = useTheme();

  const pageData = {
    label: 'Prestation - Abidjan',
    description: 'Nos départs locks, retwist, entretien, coiffure.',
    path: '/services/hairstyle/prestation-abidjan',
  };

  const boxStyles = {
    pageContent: {
      maxWidth: '720px',
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
      title: 'DÉPART LOCKS',
      items: [
        { label: 'Départ en vanille', price: '10.000 FCFA' },
        { label: 'Départ en braid', price: '10.000 FCFA' },
        { label: 'Départ en twist', price: '10.000 FCFA' },
        { label: 'Départ de micro locks', price: 'à partir de 20.000 FCFA' },
      ],
      note: '(micro twist, micro braid, interlocking)',
    },
    {
      title: 'RETWIST',
      items: [
        { label: 'Retwist au crochet', price: '10.000 FCFA/ 15.000 FCFA' },
        { label: 'Retwist au gel', price: '10.000 FCFA' },
      ]
    },
    {
      title: 'ENTRETIEN',
      items: [
        { label: 'Réparation', price: '1000 FCFA / locks' },
      ],
    },
    {
      title: 'COIFFURE',
      items: [
        { label: 'Coiffure sans retwist', price: '5.000 FCFA' },
      ],
      note: '(Barrel twist, Bantu knot ...)',
    },
  ];

  return (
    <PageTemplate pageData={pageData}>
      <div style={boxStyles.pageContent}>
        {sections.map((section) => (
          <div key={section.title}>
            <h2 style={boxStyles.sectionTitle}>{section.title}</h2>
            <div style={boxStyles.boxGrid}>
              {section.items.map((item, index) => (
                <div key={item.label} style={boxStyles.itemBox}>
                  <div style={boxStyles.itemRow}>
                    <span style={boxStyles.itemLabel}>{item.label}</span>
                    <span style={boxStyles.itemPrice}>{item.price}</span>
                  </div>
                  {index === section.items.length - 1 && section.note && (
                    <span style={boxStyles.itemNote}>{section.note}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}