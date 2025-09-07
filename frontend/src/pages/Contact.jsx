// ===================================
// src/pages/Contact.jsx
// ===================================

import { useState, useEffect } from 'react';
//import { Mail, Phone, MapPin, Instagram, MessageSquare, ChevronDown, ChevronUp, Whatsapp, Globe } from 'lucide-react';
import { Mail, Phone, MapPin, Instagram, MessageSquare, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

export function Contact(props) {
  const { theme, isDark } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const faqs = [
    {
      question: 'Quels sont vos horaires d\'ouverture ?',
      answer: 'Nous sommes ouverts du mardi au samedi, de 9h à 18h. Sur rendez-vous uniquement.',
    },
    {
      question: 'Puis-je commander vos produits en ligne ?',
      answer: 'Oui, tous nos produits sont disponibles sur notre boutique en ligne. La livraison est possible partout au Canada.',
    },
    {
      question: 'Offrez-vous des consultations gratuites ?',
      answer: 'Nous proposons une consultation de 15 minutes sans frais pour évaluer vos besoins capillaires.',
    },
    {
      question: 'Acceptez-vous les paiements par carte de crédit ?',
      answer: 'Oui, nous acceptons toutes les principales cartes de crédit, ainsi que les paiements mobiles.',
    },
    {
      question: 'Comment prendre rendez-vous ?',
      answer: 'Vous pouvez prendre rendez-vous directement en ligne via notre page "Services" ou nous appeler.',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      padding: "48px 24px",
      color: theme.text,
      backgroundColor: theme.background,
    },
    headerSection: { textAlign: "center", marginBottom: "48px" },
    title: { fontSize: "32px", fontWeight: "bold" },
    subtitle: { fontSize: "18px", color: theme.secondary, marginTop: "8px" },
    contentGrid: {
      display: "grid",
      gridTemplateColumns: isLargeScreen ? "1fr 1fr" : "1fr",
      gap: "48px",
    },
    formSection: {
      backgroundColor: theme.cardBackground,
      padding: "32px",
      borderRadius: theme.borderRadius,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    formTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
      color: theme.primary,
    },
    formGroup: { marginBottom: "16px" },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      color: theme.text,
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: theme.borderRadius,
      border: `1px solid ${theme.secondary}`,
      backgroundColor: theme.background,
      color: theme.text,
    },
    textarea: {
      width: "100%",
      padding: "12px",
      borderRadius: theme.borderRadius,
      border: `1px solid ${theme.secondary}`,
      backgroundColor: theme.background,
      color: theme.text,
      minHeight: "150px",
    },
    submitButton: {
      padding: "12px 24px",
      borderRadius: "9999px",
      backgroundColor: theme.primary,
      color: theme.cardBackground,
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginTop: "16px",
      width: "100%",
    },
    infoSection: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      backgroundColor: theme.cardBackground,
      padding: "32px",
      borderRadius: theme.borderRadius,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    infoItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    infoTitle: {
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "8px",
      color: theme.primary,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    infoText: {
      color: theme.text,
      fontSize: "16px",
    },
    socialLinks: {
      display: "flex",
      gap: "16px",
      marginTop: "8px",
    },
    socialLink: {
      textDecoration: "none",
      fontSize: "24px",
      transition: "transform 0.2s ease",
      cursor: "pointer",
      color: theme.text,
    },
    clickableLink: {
      color: theme.text,
      textDecoration: "none",
      transition: "color 0.2s ease",
    },
    faqSection: {
      marginTop: "64px",
    },
    faqTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
      textAlign: "center",
    },
    faqItem: {
      borderBottom: `1px solid ${theme.secondary}`,
      marginBottom: "16px",
      paddingBottom: "16px",
    },
    faqQuestion: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      fontWeight: "bold",
      color: theme.text,
    },
    faqAnswer: {
      marginTop: "12px",
      color: theme.secondary,
      lineHeight: "1.6",
    },
    // New: loading & success overlay styles
    overlayLoading: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
     // backgroundColor: "rgba(255,255,255,0.8)",
      backgroundColor: isDark ?
        'rgba(0,0,0,0.7)' : 
        'rgba(255,255,255,0.8)',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
      fontSize: "20px",
      fontWeight: "bold",
    },
    overlaySuccess: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      //backgroundColor: "rgba(255,255,255,0.8)",
      backgroundColor: isDark ?
        'rgba(0,0,0,0.7)' : 
        'rgba(255,255,255,0.8)',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      zIndex: 10,
      fontSize: "20px",
      fontWeight: "bold",
      color: theme.primary,
    },
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Buffer data
    //const formActionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdrUD-KPmCrbfCmZd5qau1EgFFrsLAFiFN7ITeOTA-YcQDRhA/formResponse';

    // Actual form
    const formActionURL ="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqW61R_XLSazT7cI0FieQGtJuRl_ZsfVYrudNUn4cpHB3xLA/formResponse" 
    
    const data = new FormData();

    // Buffer data
    // data.append('entry.1653249143', event.target.name.value);   // Name
    // data.append('entry.345674368', event.target.email.value);   // Email
    // data.append('entry.1203962156', event.target.phone.value);  // Phone
    // data.append('entry.1274324805', event.target.message.value);// Message

    // Real Data - I think
    data.append('entry.1067131892', event.target.name.value);   // Name
    data.append('entry.276608425', event.target.email.value);   // Email
    data.append('entry.1926011619', event.target.phone.value);  // Phone
    data.append('entry.534808294', event.target.message.value);// Message

    fetch(formActionURL, {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          event.target.reset();
        }, 5000);
      })
      .catch(() => {
        setLoading(false);
        alert('Le service de formulaire est temporairement indisponible.');
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Contactez-nous</h1>
        <p style={styles.subtitle}>
          Remplissez le formulaire ci-dessous ou utilisez les informations de
          contact pour nous joindre.
        </p>
      </div>

      <div style={styles.contentGrid}>
        <div style={styles.formSection}>
          <h2 style={styles.formTitle}>Envoyez-nous un message</h2>
          <form>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Nom complet
              </label>
              <input type="text" id="name" name="name" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="phone" style={styles.label}>
                Numéro de téléphone
              </label>
              <input type="tel" id="phone" name="phone" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                style={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" style={styles.submitButton}>
              Envoyer le message
            </button>
          </form>
        </div>

        <div style={styles.infoSection}>
          <div style={styles.infoItem}>
            <h3 style={styles.infoTitle}>
              <Globe size={24} /> Réseaux Sociaux
            </h3>
            <div style={styles.socialLinks}>
              <a
                href="https://www.instagram.com/lockset_vous?igsh=MWZ6eGUyZ2x4MTB4dQ%3D%3D&utm_source=qr"
                style={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Instagram size={24} /> */}
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@lockset_vous?_t=ZM-8zUCwbKwB6L&_r=1"
                style={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok size={24} />
              </a>
              <a
                href="https://wa.me/1234567890"
                style={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
                {/* <MessageSquare size={24} /> */}
              </a>
              <a
                href="https://wa.me/0987654321"
                style={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <MessageSquare size={24} /> */}
                <FaWhatsapp size={24} />
                {/* <Whatsapp size={24} /> */}
              </a>
            </div>
          </div>
          <div style={styles.infoItem}>
            <h3 style={styles.infoTitle}>
              <Mail size={24} /> E-mail
            </h3>
            <a
              href="mailto:Locksetvous@gmail.com"
              style={{
                ...styles.clickableLink,
                "text-decoration": "underline",
              }}
            >
              Locksetvous@gmail.com
            </a>

            {/* <a href="mailto:Locksetvous@gmail.com" style={styles.clickableLink}>Locksetvous@gmail.com</a> */}
            {/* <a href="mailto:support@locksetvous.com" style={styles.clickableLink}>support@locksetvous.com</a> */}
          </div>
          <div style={styles.infoItem}>
            <h3 style={styles.infoTitle}>
              <Phone size={24} /> Téléphone
            </h3>
            <a
              href="tel:+33759571981"
              style={{ ...styles.clickableLink, marginBottom: "12px" }}
            >
              +33 7 59 57 19 81
            </a>
            <a href="tel:+2250757655900" style={styles.clickableLink}>
              +225 07 57 655 900
            </a>
          </div>
          {/* <div style={styles.infoItem}>
            <h3 style={styles.infoTitle}>
              <MapPin size={24} /> Adresse
            </h3>
            <span style={styles.infoText}>123 rue de l'Exemple, Montréal, Canada</span>
            <span style={styles.infoText}>456 avenue de la Mode, Paris, France</span>
          </div> */}
        </div>
      </div>

      {loading && <div style={styles.overlayLoading}>Envoi en cours...</div>}

      {success && (
        <div style={styles.overlaySuccess}>
          <h2>Merci pour votre message !</h2>
          <p>Nous reviendrons vers vous très bientôt.</p>
        </div>
      )}

      <div style={styles.faqSection}>
        <h2 style={styles.faqTitle}>Questions Fréquemment Posées</h2>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
              {faq.question}
              {openFaq === index ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </div>
            {openFaq === index && (
              <div style={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}