// ===================================
// src/data/navigation.js
// ===================================
// This file would not have any external imports
export const PAGES = {
  'Accueil': { id: 'home', label: 'Accueil', path: '/' },
  'Produits': {
    id: 'products',
    label: 'Produits',
    path: '/products',
    subItems: [
      { id: 'moisturizers', label: 'Crème, Huile & Autre', path: '/products/moisturizers' },
      { id: 'accessories', label: 'Accessoires', path: '/products/accessories' },
      { id: 'extensions', label: 'Extensions', path: '/products/extensions' },
      { id: 'offers-products', label: 'Offres', path: '/products/offers' },
    ],
  },
  'Services': {
    id: 'services',
    label: 'Services',
    path: '/services',
    subItems: [
      { id: 'hairstyle', label: 'Locks & Extensions', path: '/services/hairstyle' },
      { id: 'haircare', label: 'Soins Capillaires', path: '/services/haircare' },
      { id: 'kid', label: 'Enfants', path: '/services/kid' },
      { id: 'appointment', label: 'Prendre Rendez-Vous', path: '/services/appointment' },
      { id: 'offers-services', label: 'Offres', path: '/services/offers' },
    ],
  },
  'About': { id: 'about', label: 'About', path: '/about' },
  'Contact': { id: 'contact', label: 'Contact', path: '/contact' },
};