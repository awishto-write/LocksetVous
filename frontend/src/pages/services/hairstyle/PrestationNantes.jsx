// src/pages/hairstyle/PrestationNantes.jsx

import { PageTemplate } from '../../../components/PageTemplate';
import { useTheme } from '../../../contexts/ThemeContext';

export function PrestationNantes() {
  const { theme } = useTheme();

  const pageData = {
    label: 'Prestation - Nantes',
    description: 'Nos départs locks, retwist, entretien, coiffure.',
    path: '/services/hairstyle/prestation-nantes',
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '4px',
    },
    itemPrice: {
      fontSize: '16px',
      fontWeight: '700',
      color: theme.primary,
      whiteSpace: 'nowrap',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '4px',
    },
    labelNote: {
      fontSize: '12px',
      color: theme.secondary,
      fontWeight: 'normal',
    },
    priceNote: {
      fontSize: '12px',
      color: theme.secondary,
      fontWeight: 'normal',
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
        { label: 'Départ en braid/twist', price: '65€' },
        { label: 'Départ au crochet', price: '80€' },
        { label: 'Départ de micro locks', price: 'à partir de 80€', labelNote: '(micro twist, micro braid, interlocking)', priceNote: '(prix variable selon le nombre souhaité)' },
      ],
    },
    {
      title: 'RETWIST',
      items: [
        { label: 'Retwist au crochet', price: '40€' },
        { label: 'Retwist au gel', price: '40€' },
      ],
    },
    {
      title: 'ENTRETIEN',
      items: [
        { label: 'Réparation', price: '3€/locks' },
      ],
    },
    {
      title: 'COIFFURE',
      items: [
        { label: 'Coiffure sans retwist', price: '20€', note: 'Barrel twist, Bantu knot ...' },
        { label: 'Coiffure après reprise', price: '10€' },
        { label: 'Teinture', price: '20€' },
        { label: 'Décapage', price: '30€' },
      ],
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
                    <span style={boxStyles.itemLabel}>
                      <span>{item.label}</span>
                      {item.labelNote && <span style={boxStyles.labelNote}>{item.labelNote}</span>}
                    </span>
                    <span style={boxStyles.itemPrice}>
                      <span>{item.price}</span>
                      {item.priceNote && <span style={boxStyles.priceNote}>{item.priceNote}</span>}
                    </span>
                  </div>
                  {item.note && <span style={boxStyles.itemNote}>{item.note}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}