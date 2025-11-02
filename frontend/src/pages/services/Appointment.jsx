// src/pages/services/Appointment.jsx

import { PageTemplate } from '../../components/PageTemplate';
import { PAGES } from '../../data/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export function Appointment() {
  const pageData = PAGES.Services.subItems.find(item => item.id === 'appointment');
  const { theme } = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.background,
      color: theme.text,
      padding: '48px 24px',
      transition: theme.transition,
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.8',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: theme.accent,
      marginBottom: '16px',
      textAlign: 'center',
    },
    list: {
      marginBottom: '32px',
      color: theme.secondary,
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
    divider: {
      height: '2px',
      width: '80px',
      backgroundColor: theme.accent,
      margin: '32px auto',
      borderRadius: '2px',
    },
    note: {
      fontSize: '15px',
      color: theme.secondary,
      fontStyle: 'italic',
      marginTop: '8px',
      textAlign: 'center',
    },
  };

  return (
    <PageTemplate pageData={pageData}>
      <div style={styles.section}>
        <div style={styles.content}>
          {/* <h2 style={styles.title}>ÉTAPES à SUIVRE</h2> */}
           <h2 style={{...styles.title, marginTop: '-44px'}}>ÉTAPES à SUIVRE</h2>

          <ol style={styles.list}>
            <li style={styles.listItem}> Nous contacter via nos réseaux sociaux.</li>
            <li style={styles.listItem}>Préciser le type de prestation que vous souhaitez.</li>
            <li style={styles.listItem}>
              Consultez la grille tarifaire (le prix peut être adapté selon vos besoins).
            </li>
            <li style={styles.listItem}>Présenter une photo de vos cheveux ou locks.</li>
            <li style={styles.listItem}>Verser un acompte de 50%.
              <ul style={styles.list}>
                <li style={styles.listItem}>Calendrier interactif pour choisir la date/heure.</li>
                <li style={styles.listItem}>Formulaire de contact (nom, téléphone, email, objet du RDV).</li>
                <li style={styles.listItem}>Confirmation automatique (mail ou SMS).</li>
                <li style={styles.listItem}>Infos pratiques (adresse, plan d’accès, horaires).</li>
              </ul>
            </li>
          </ol>

          <div style={styles.divider}></div>

          <h2 style={styles.title}>À SAVOIR AVANT VOTRE VISITE</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Prendre RDV minimum 48h avant la date prévue.</li>
            <li style={styles.listItem}> Annulation obligatoire 24h avant le rendez-vous.</li>
            <li style={styles.listItem}>
               Possibilité de majoration ou annulation du RDV après 30 min de retard (sauf cas de force majeure).
            </li>
            <li style={styles.listItem}>Pas d’accompagnateur sans accord préalable.</li>
            <li style={styles.listItem}>
              Cheveux / locks propres, correctement lavés si cela ne fait pas partie de la prestation.
            </li>
            <li style={styles.listItem}>Déplacement de la coiffeuse aux frais du client.</li>
          </ul>

          <div style={styles.divider}></div>

          <h2 style={styles.title}>VOS AVIS COMPTENT</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Possibilité que le rendu de la prestation ou votre image apparaisse, sauf en cas de désaccord.
            </li>
            <li style={styles.listItem}>
              Vos retours sur la prestation réalisée sont les bienvenus — positifs, négatifs ou recommandations.
            </li>
          </ul>

          <p style={styles.note}>
            Merci pour votre confiance — chaque retour nous aide à grandir et à mieux vous servir.
          </p>

        </div>

      </div>
    </PageTemplate>
  );
}





// src/pages/services/Appointment.jsx

// import { PageTemplate } from '../../components/PageTemplate';
// import { PAGES } from '../../data/navigation';

// export function Appointment() {
//   const pageData = PAGES.Services.subItems.find(item => item.id === 'appointment');
//   return <PageTemplate pageData={pageData} />;
// }





// import { PageTemplate } from '../../components/PageTemplate';
// import { PAGES } from '../../data/navigation';
// import { useTheme } from '../../contexts/ThemeContext';

// export function Appointment() {
//   //const pageData = PAGES.Produits.subItems.find((item) => item.id === 'offers-products');
//   const pageData = PAGES.Services.subItems.find(item => item.id === 'appointment');
//   const { theme } = useTheme();

//   // ---- Theme-based card styles outside return ----
//   const cardStyles = {
//     cardGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '24px',
//       marginTop: '32px',
//     },
//     card: {
//       backgroundColor: theme.cardBackground,
//       padding: '24px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       textAlign: 'center',
//     },
//     cardImage: {
//       width: '100%',
//       height: '200px',
//       backgroundColor: theme.secondary,
//       borderRadius: '8px',
//       marginBottom: '16px',
//     },
//     cardTitle: { fontSize: '20px', fontWeight: 'bold', color: theme.primary },
//     cardDescription: { marginTop: '8px', color: theme.secondary },
//   };

//   return (
//     <PageTemplate pageData={pageData}>
//       <div style={cardStyles.cardGrid}>
//         <div style={cardStyles.card}>
//           <div style={cardStyles.cardImage}></div>
//           <h3 style={cardStyles.cardTitle}>Bloc 1</h3>
//           <p style={cardStyles.cardDescription}>Description spécifique du Bloc 1.</p>
//         </div>
//         <div style={cardStyles.card}>
//           <div style={cardStyles.cardImage}></div>
//           <h3 style={cardStyles.cardTitle}>Bloc 2</h3>
//           <p style={cardStyles.cardDescription}>Description spécifique du Bloc 2.</p>
//         </div>
//         <div style={cardStyles.card}>
//           <div style={cardStyles.cardImage}></div>
//           <h3 style={cardStyles.cardTitle}>Bloc 3</h3>
//           <p style={cardStyles.cardDescription}>Description spécifique du Bloc 3.</p>
//         </div>
//       </div>
//     </PageTemplate>
//   );
// }



