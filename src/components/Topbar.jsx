// ===================================
// src/components/Topbar.jsx
// ===================================
// import { useState, useEffect } from 'react';
// import { Menu, X, ShoppingCart, User, Moon, Sun, ChevronDown } from 'lucide-react';
// //import { useTheme } from '../contexts/ThemeContext';
// import { useTheme } from '../contexts/ThemeContext';
// import { PAGES } from '../data/navigation';

// export function Topbar(props) {
//   const { onNavigate, onToggleMenu, isMobileMenuOpen, currentPage } = props;
//   //const { theme, toggleTheme } = useTheme();
//   const { theme, toggleTheme, isDark } = useTheme();
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 950);
//   const [hoveredMenuId, setHoveredMenuId] = useState(null);
//   const [hoveredSubItemId, setHoveredSubItemId] = useState(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 950);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const styles = {
//     topbar: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '16px 24px',
//       backgroundColor: theme.background,
//       color: theme.text,
//       borderBottom: `1px solid ${theme.secondary}`,
//       position: 'sticky',
//       top: 0,
//       zIndex: 100,
//     },
//     logo: {
//       fontWeight: 'bold',
//       fontSize: '24px',
//       cursor: 'pointer',
//       color: theme.primary,
//     },
//     menuDesktop: {
//       display: isLargeScreen ? 'flex' : 'none',
//       gap: '32px',
//       alignItems: 'center',
//     },
//     menuItemBase: {
//       position: 'relative',
//       padding: '8px 0',
//       paddingBottom: '16px',
//       cursor: 'pointer',
//       textDecoration: 'none',
//       transition: 'color 0.3s ease',
//       ...(!isLargeScreen && { display: 'none' }),
//     },
//     menuItemText: {
//       fontWeight: 'normal',
//       transition: 'color 0.3s ease',
//     },
//     menuItemTextHover: {
//       color: theme.primary,
//     },
//     menuItemActive: {
//       color: theme.primary,
//       fontWeight: 'bold',
//       position: 'relative',
//     },
//     menuItemActiveLine: {
//       content: "''",
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       width: '100%',
//       height: '2px',
//       backgroundColor: theme.primary,
//     },
//     menuItemWithIcon: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '4px',
//     },
//     menuItemSub: {
//       position: 'absolute',
//       top: '100%',
//       left: '0',
//       backgroundColor: theme.cardBackground,
//       color: theme.text,
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//       borderRadius: '4px',
//       minWidth: '200px',
//       display: 'flex',
//       flexDirection: 'column',
//       zIndex: 10,
//     },
//     mobileMenuButton: {
//       display: isLargeScreen ? 'none' : 'block',
//       border: 'none',
//       backgroundColor: 'transparent',
//       cursor: 'pointer',
//       padding: '8px',
//       color: theme.text,
//       transition: 'color 0.3s ease',
//     },
//     iconGroup: {
//       display: 'flex',
//       gap: '16px',
//       alignItems: 'center',
//     },
//     iconButton: {
//       backgroundColor: 'transparent',
//       border: 'none',
//       cursor: 'pointer',
//       padding: '8px',
//       color: theme.text,
//       transition: 'color 0.3s ease',
//       '&:hover': {
//         color: theme.primary,
//       },
//     },
//     chevronIcon: {
//       transition: 'transform 0.3s ease',
//     },
//   };

//   const getActiveState = (path) => {
//     if (path === '/') {
//       return currentPage === path;
//     }
//     return currentPage.startsWith(path);
//   };

//   return (
//     <div style={styles.topbar}>
//       <div style={styles.logo} onClick={() => onNavigate('/')}>
//         Locks & Vous
//       </div>
//       <div style={styles.menuDesktop}>
//         {Object.values(PAGES).map(item => {
//           const isHighlighted = getActiveState(item.path) || hoveredMenuId === item.id;
//           return (
//             <div
//               key={item.id}
//               style={{ ...styles.menuItemBase }}
//               onMouseEnter={() => setHoveredMenuId(item.id)}
//               onMouseLeave={() => { setHoveredMenuId(null); setHoveredSubItemId(null); }}
//             >
//               <div
//                 onClick={() => {
//                   if (!item.subItems) {
//                     onNavigate(item.path);
//                   }
//                 }}
//                 style={{
//                   color: isHighlighted ? theme.primary : theme.secondary
//                 }}
//               >
//                 <span style={styles.menuItemWithIcon}>
//                   {item.label}
//                   {item.subItems && <ChevronDown style={{ transform: hoveredMenuId === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }} size={16} />}
//                 </span>
//               </div>
//               {item.subItems && hoveredMenuId === item.id && (
//                 <ul style={styles.menuItemSub}>
//                   {item.subItems.map(subItem => (
//                     <li
//                       key={subItem.id}
//                       style={{
//                         padding: '12px 16px',
//                         color: currentPage === subItem.path || hoveredSubItemId === subItem.id ? theme.primary : theme.text,
//                         fontWeight: currentPage === subItem.path ? 'bold' : 'normal',
//                         transition: 'color 0.3s ease',
//                         borderBottom: currentPage === subItem.path ? `2px solid ${theme.primary}` : 'none'
//                       }}
//                       onMouseEnter={() => setHoveredSubItemId(subItem.id)}
//                       onMouseLeave={() => setHoveredSubItemId(null)}
//                       onClick={(e) => { e.stopPropagation(); onNavigate(subItem.path); }}
//                     >
//                       {subItem.label}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           );
//         })}
//       </div>
//       <div style={styles.iconGroup}>
//         <button style={styles.iconButton}>
//           {/* <ShoppingCart /> */}
//           <ShoppingCart size={20} />
//         </button>
//         <button style={styles.iconButton}>
//           {/* <User /> */}
//           <User size={20} />
//         </button>
//         <button style={styles.iconButton} onClick={toggleTheme}>
//           {/* {theme.background === lightTheme.background ? <Moon /> : <Sun />} */}
//           {isDark ? <Sun /> : <Moon />}
//         </button>
//         <button
//           style={styles.mobileMenuButton}
//           onClick={onToggleMenu}
//         >
//           {/* {isMobileMenuOpen ? <X /> : <Menu />} */}
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>}
//         </button>
//       </div>
//     </div>
//   );
// }









// Second - Really amazing

// import { useState, useEffect } from 'react';
// import { Menu, X, ShoppingCart, User, Moon, Sun, ChevronDown } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';
// import { PAGES } from '../data/navigation';

// export function Topbar(props) {
//   const { onNavigate, onToggleMenu, isMobileMenuOpen, currentPage } = props;
//   const { theme, toggleTheme, isDark } = useTheme();
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 950);
//   const [hoveredMenuId, setHoveredMenuId] = useState(null);
//   const [hoveredSubItemId, setHoveredSubItemId] = useState(null);
//   const [cartCount] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 950);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const styles = {
//     topbar: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "0 16px",
//       height: "64px", // ✅ same height as old header
//       backgroundColor: theme.background,
//       color: theme.text,
//       borderBottom: `1px solid ${theme.secondary}`,
//       boxShadow: `0 1px 3px ${theme.secondary}`,
//       position: "sticky",
//       top: 0,
//       zIndex: 100,
//       // boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//       //backgroundColor: theme.surface,
//       // borderBottom: `1px solid ${theme.border}`,
//       //boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
//     },
//     logoContainer: {
//       display: "flex",
//       alignItems: "center",
//       gap: "16px", // ✅ same spacing as old header
//       cursor: "pointer",
//     },
//     logoImage: {
//       width: 32, // ✅ same as old logo
//       height: 32,
//     },
//     logoText: {
//       fontSize: "20px", // ✅ old font size
//       fontWeight: "bold",
//       color: theme.text,
//     },
//     menuDesktop: {
//       display: isLargeScreen ? "flex" : "none",
//       gap: "32px",
//       //alignItems: "center",
//       alignItems: 'center', // aligns menu items with logo + icons
//       flex: 1,
//       justifyContent: 'center', // centers menu items
//     },
//     menuItemBase: {
//       position: "relative",
//       padding: "8px 0",
//       paddingBottom: "16px",
//       cursor: "pointer",
//       textDecoration: "none",
//       transition: "color 0.3s ease",
//       ...(!isLargeScreen && { display: "none" }),
//     },
//     menuItemWithIcon: {
//       display: "flex",
//       alignItems: "center",
//       gap: "4px",
//     },
//     menuItemSub: {
//       position: "absolute",
//       top: "100%",
//       left: "0",
//       backgroundColor: theme.cardBackground,
//       color: theme.text,
//       boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//       borderRadius: "4px",
//       minWidth: "200px",
//       display: "flex",
//       flexDirection: "column",
//       zIndex: 10,
//       listStyle: "none", // 🔥 removes bullet points
//       margin: 0, // reset spacing
//       padding: 0, // reset spacing
//     },
//     mobileMenuButton: {
//       display: isLargeScreen ? "none" : "block",
//       border: "none",
//       backgroundColor: "transparent",
//       cursor: "pointer",
//       padding: "8px",
//       color: theme.text,
//       transition: "color 0.2s ease",
//     },
//     iconGroup: {
//       display: "flex",
//       gap: "16px",
//       alignItems: "center",
//     },
//     iconButton: {
//       backgroundColor: "transparent",
//       border: "none",
//       cursor: "pointer",
//       padding: "8px",
//       color: theme.text,
//       transition: "color 0.2s ease",
//     },
//     chevronIcon: {
//       transition: "transform 0.3s ease",
//     },
//     cartBadge: {
//       position: "absolute",
//       top: "4px",
//       right: "4px",
//      // backgroundColor: "red",
//       backgroundColor: '#ef4444',
//       color: "white",
//       borderRadius: "50%",
//       fontSize: "12px",
//       padding: "2px 6px",
//       fontWeight: "bold",
//       lineHeight: 1,
//     },
//   };

//   const getActiveState = (path) => {
//     if (path === '/') return currentPage === path;
//     return currentPage.startsWith(path);
//   };

//   return (
//     <div style={styles.topbar}>
//       {/* ✅ Logo + Text clickable unit */}
//       <div
//         style={styles.logoContainer}
//         onClick={() => onNavigate('/')}
//         onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
//         onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
//       >
//         <img src="/locksHeader.svg" alt="Locks&Vous logo" style={styles.logoImage} />
//         <span style={styles.logoText}>Locks&Vous</span>
//       </div>

//       <div style={styles.menuDesktop}>
//         {Object.values(PAGES).map(item => {
//           const isHighlighted = getActiveState(item.path) || hoveredMenuId === item.id;
//           return (
//             <div
//               key={item.id}
//               style={{ ...styles.menuItemBase }}
//               onMouseEnter={() => setHoveredMenuId(item.id)}
//               onMouseLeave={() => { setHoveredMenuId(null); setHoveredSubItemId(null); }}
//             >
//               <div
//                 onClick={() => {
//                   if (!item.subItems) onNavigate(item.path);
//                 }}
//                 style={{
//                   color: isHighlighted ? theme.primary : theme.secondary
//                 }}
//               >
//                 <span style={styles.menuItemWithIcon}>
//                   {item.label}
//                   {item.subItems && (
//                     <ChevronDown
//                       style={{
//                         transform: hoveredMenuId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
//                       }}
//                       size={16}
//                     />
//                   )}
//                 </span>
//               </div>
//               {item.subItems && hoveredMenuId === item.id && (
//                 <ul style={styles.menuItemSub}>
//                   {item.subItems.map(subItem => (
//                     <li
//                       key={subItem.id}
//                       style={{
//                         padding: '12px 16px',
//                         color: currentPage === subItem.path || hoveredSubItemId === subItem.id ? theme.primary : theme.text,
//                         fontWeight: currentPage === subItem.path ? 'bold' : 'normal',
//                         transition: 'color 0.3s ease',
//                         borderBottom: currentPage === subItem.path ? `2px solid ${theme.primary}` : 'none'
//                       }}
//                       onMouseEnter={() => setHoveredSubItemId(subItem.id)}
//                       onMouseLeave={() => setHoveredSubItemId(null)}
//                       onClick={(e) => { e.stopPropagation(); onNavigate(subItem.path); }}
//                     >
//                       {subItem.label}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div style={styles.iconGroup}>
//         <button style={styles.iconButton}>
//           <ShoppingCart size={20} /> {/* ✅ same size as old */}
//           {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
//         </button>
//         <button style={styles.iconButton}>
//           <User size={20} /> {/* ✅ same size as old */}
//         </button>
//         <button style={styles.iconButton} onClick={toggleTheme}>
//           {isDark ? <Sun size={20} /> : <Moon size={20} />} {/* ✅ same size */}
//         </button>
//         <button style={styles.mobileMenuButton} onClick={onToggleMenu}>
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//     </div>
//   );
// }








// third one 


import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PAGES } from '../data/navigation';

export function Topbar(props) {
  const { onNavigate, onToggleMenu, isMobileMenuOpen, currentPage } = props;
  const { theme, toggleTheme, isDark } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 950);
  const [hoveredMenuId, setHoveredMenuId] = useState(null);
  const [hoveredSubItemId, setHoveredSubItemId] = useState(null);
  const [cartCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 950);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    topbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
      height: "64px", // ✅ same height as old header
      //  backgroundColor: theme.cardBackground, 
      backgroundColor: theme.background,
      color: theme.text,
      //borderBottom: `1px solid ${theme.secondary}`,
      borderBottom: `1px solid ${theme.cardBackground}`,
      boxShadow: `0 1px 3px ${theme.secondary}`,
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      cursor: 'pointer',
    },
    logoImage: {
      width: 32,
      height: 32,
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.text,
    },
    menuDesktop: {
      display: isLargeScreen ? 'flex' : 'none',
      gap: '32px',
      alignItems: 'center', // ✅ aligns menu with logo + icons
      flex: 1,
      justifyContent: 'center', // ✅ centers items nicely
    },
    menuItemBase: {
      position: 'relative',
      padding: '8px 0',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    menuItemWithIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    menuItemSub: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: theme.cardBackground,
      color: theme.text,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '4px',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 10,
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    mobileMenuButton: {
      display: isLargeScreen ? 'none' : 'block',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      padding: '8px',
      color: theme.text,
      transition: 'color 0.2s ease',
    },
    iconGroup: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    iconButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      color: theme.text,
      position: 'relative', // ✅ needed for badge positioning
    },
    cartBadge: {
      position: 'absolute',
      top: '-4px',
      right: '-4px',
      backgroundColor: '#ef4444',
      color: 'white',
      fontSize: '12px',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    chevronIcon: {
      transition: 'transform 0.3s ease',
    }
  };

  const getActiveState = (path) => {
    if (path === '/') return currentPage === path;
    return currentPage.startsWith(path);
  };

  return (
    <div style={styles.topbar}>
      {/* ✅ Logo + Text clickable */}
      <div
        style={styles.logoContainer}
        onClick={() => onNavigate('/')}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <img src="/locksHeader.svg" alt="Locks&Vous logo" style={styles.logoImage} />
        <span style={styles.logoText}>Locks&Vous</span>
      </div>

      {/* ✅ Menu items */}
      <div style={styles.menuDesktop}>
        {Object.values(PAGES).map((item) => {
          const isHighlighted = getActiveState(item.path) || hoveredMenuId === item.id;
          return (
            <div
              key={item.id}
              style={{ ...styles.menuItemBase }}
              onMouseEnter={() => setHoveredMenuId(item.id)}
              onMouseLeave={() => {
                setHoveredMenuId(null);
                setHoveredSubItemId(null);
              }}
            >
              <div
                onClick={() => {
                  if (!item.subItems) onNavigate(item.path);
                }}
                style={{
                  color: isHighlighted ? theme.primary : theme.secondary,
                }}
              >
                <span style={styles.menuItemWithIcon}>
                  {item.label}
                  {item.subItems && (
                    <ChevronDown
                      style={{
                        transform: hoveredMenuId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      size={16}
                    />
                  )}
                </span>
              </div>
              {item.subItems && hoveredMenuId === item.id && (
                <ul style={styles.menuItemSub}>
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.id}
                      style={{
                        padding: '12px 16px',
                        color:
                          currentPage === subItem.path || hoveredSubItemId === subItem.id
                            ? theme.primary
                            : theme.text,
                        fontWeight: currentPage === subItem.path ? 'bold' : 'normal',
                        transition: 'color 0.3s ease',
                        borderBottom:
                          currentPage === subItem.path ? `2px solid ${theme.primary}` : 'none',
                      }}
                      onMouseEnter={() => setHoveredSubItemId(subItem.id)}
                      onMouseLeave={() => setHoveredSubItemId(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(subItem.path);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* ✅ Icons group */}
      <div style={styles.iconGroup}>
        <button style={styles.iconButton}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
        </button>
        <button style={styles.iconButton}>
          <User size={20} />
        </button>
        <button style={styles.iconButton} onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button style={styles.mobileMenuButton} onClick={onToggleMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
}
