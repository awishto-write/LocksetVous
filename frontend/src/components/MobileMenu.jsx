// ===================================
// src/components/MobileMenu.jsx
// ===================================
import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PAGES } from '../data/navigation';

export function MobileMenu(props) {
  const { onNavigate, onClose, currentPage } = props;
  const { theme } = useTheme();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const styles = {
    mobileMenu: {
      position: 'fixed',
      top: '60px',
      right: '0',
      width: '100%',
      height: 'calc(100vh - 60px)',
      backgroundColor: theme.background,
      color: theme.text,
      padding: '24px',
      zIndex: 90,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'transform 0.3s ease-in-out',
    },
    menuItem: {
      padding: '12px 0',
      borderBottom: `1px solid ${theme.secondary}`,
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      fontWeight: 'normal',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuItemHover: {
      color: theme.primary,
    },
    menuItemActive: {
      color: theme.primary,
      fontWeight: 'bold',
    },
    submenu: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      paddingLeft: '16px',
      marginTop: '8px',
      transition: 'height 0.3s ease',
      overflow: 'hidden',
    },
    submenuItem: {
      padding: '8px 0',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    chevronIcon: {
      transition: 'transform 0.3s ease',
    },
  };

  const getActiveState = (path) => {
    if (path === '/') {
      return currentPage === path;
    }
    return currentPage.startsWith(path);
  };

  return (
    <div style={styles.mobileMenu}>
      {Object.values(PAGES).map(item => (
        <React.Fragment key={item.id}>
          <div
            style={{
              ...styles.menuItem,
              color: getActiveState(item.path) || hoveredItem === item.id ? theme.primary : theme.secondary
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => {
              if (item.subItems) {
                setOpenSubmenu(openSubmenu === item.id ? null : item.id);
              } else {
                onNavigate(item.path);
                onClose();
              }
            }}
          >
            {item.label}
            {item.subItems && <ChevronDown style={{ transform: openSubmenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }} size={16} />}
          </div>
          {item.subItems && openSubmenu === item.id && (
            <div style={styles.submenu}>
              {item.subItems.map(subItem => (
                <div
                  key={subItem.id}
                  style={{
                    ...styles.submenuItem,
                    color: currentPage === subItem.path || hoveredItem === subItem.id ? theme.primary : theme.secondary,
                    fontWeight: currentPage === subItem.path ? 'bold' : 'normal'
                  }}
                  onMouseEnter={() => setHoveredItem(subItem.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => {
                    onNavigate(subItem.path);
                    onClose();
                  }}
                >
                  {subItem.label}
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}