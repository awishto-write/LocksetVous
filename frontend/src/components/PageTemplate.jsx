// src/components/PageTemplate.jsx


// import { useTheme } from '../contexts/ThemeContext';
// import { PAGES } from '../data/navigation';

// export function PageTemplate({ pageData }) {
//   const { theme } = useTheme();

//   const styles = {
//     container: { padding: '48px 24px', color: theme.text, backgroundColor: theme.background },
//     title: { fontSize: '32px', fontWeight: 'bold' },
//     subtitle: { fontSize: '18px', color: theme.secondary, marginTop: '8px' },
//     content: { marginTop: '32px' },
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

//   const getBreadcrumbs = (path) => {
//     const parts = path.split('/').filter(p => p !== '');
//     let currentPath = '';

//     const findLabel = (id, pages = PAGES) => {
//       for (const key in pages) {
//         const page = pages[key];
//         if (page.id === id) return page.label;
//         if (page.subItems) {
//           const sub = page.subItems.find(item => item.id === id);
//           if (sub) return sub.label;
//         }
//       }
//       return id.charAt(0).toUpperCase() + id.slice(1);
//     };

//     return parts.map((part, index) => {
//       currentPath += `/${part}`;
//       const label = findLabel(part);
//       return (
//         <span
//           key={index}
//           style={{ color: index === parts.length - 1 ? theme.primary : theme.secondary }}
//         >
//           {label} {index < parts.length - 1 && ' / '}
//         </span>
//       );
//     });
//   };

//   return (
//     <div style={styles.container}>
//       <div style={{ color: theme.secondary, fontSize: '14px', marginBottom: '16px' }}>
//         {getBreadcrumbs(pageData.path)}
//       </div>
//       <h1 style={styles.title}>{pageData.label}</h1>
//       <p style={styles.subtitle}>Description détaillée du contenu disponible dans cette section.</p>
//       <div style={styles.cardGrid}>
//         <div style={styles.card}>
//           <div style={styles.cardImage}></div>
//           <h3 style={styles.cardTitle}>Bloc 1</h3>
//           <p style={styles.cardDescription}>Description détaillée du contenu disponible dans cette section.</p>
//         </div>
//         <div style={styles.card}>
//           <div style={styles.cardImage}></div>
//           <h3 style={styles.cardTitle}>Bloc 2</h3>
//           <p style={styles.cardDescription}>Description détaillée du contenu disponible dans cette section.</p>
//         </div>
//         <div style={styles.card}>
//           <div style={styles.cardImage}></div>
//           <h3 style={styles.cardTitle}>Bloc 3</h3>
//           <p style={styles.cardDescription}>Description détaillée du contenu disponible dans cette section.</p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useTheme } from '../contexts/ThemeContext';
import { PAGES } from '../data/navigation';

export function PageTemplate({ pageData, children }) {
  const { theme } = useTheme();

  // ---- Styles defined outside the return ----
  const styles = {
    container: {
      padding: '48px 24px',
      color: theme.text,
      backgroundColor: theme.background,
    },
    breadcrumbs: {
      color: theme.secondary,
      fontSize: '14px',
      marginBottom: '16px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: '18px',
      color: theme.secondary,
      marginTop: '8px',
    },
    content: {
      marginTop: '32px',
    },
  };

  // ---- Breadcrumb generator ----
  const getBreadcrumbs = (path) => {
    const parts = path.split('/').filter(Boolean);

    const findLabel = (id, pages = PAGES) => {
      for (const key in pages) {
        const page = pages[key];
        if (page.id === id) return page.label;
        if (page.subItems) {
          const sub = page.subItems.find((item) => item.id === id);
          if (sub) return sub.label;
        }
      }
      return id.charAt(0).toUpperCase() + id.slice(1);
    };

    return parts.map((part, index) => (
      <span
        key={index}
        style={{ color: index === parts.length - 1 ? theme.primary : theme.secondary }}
      >
        {findLabel(part)}{index < parts.length - 1 ? ' / ' : ''}
      </span>
    ));
  };

  // ---- Return is clean, children renders page-specific content ----
  return (
    <div style={styles.container}>
      <div style={styles.breadcrumbs}>{getBreadcrumbs(pageData.path)}</div>
      <h1 style={styles.title}>{pageData.label}</h1>
      <p style={styles.subtitle}>Description détaillée du contenu disponible dans cette section.</p>
      <div style={styles.content}>{children}</div>
    </div>
  );
}