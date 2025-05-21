import React from 'react';
import contactData from '../data/contact.json';
import styles from '../styles/Footer.module.scss';

export const Footer = () => {
  const handleReturnToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.navContainer}>
        {contactData.map((contact, index) => (
          <a
            href={contact.link}
            target='_blank'
            className={styles.contactLink}
            key={index}
          >
            {contact.platform}
          </a>
        ))}
      </nav>
      <a onClick={handleReturnToTop} className={styles.returnToTop} href='#'>
        Return to Top
      </a>
      <small className={styles.small}>
        &copy; 2025 Sabrina Ira. All Rights Reserved.
      </small>
    </footer>
  );
};
