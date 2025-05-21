import React from 'react';
import contactData from '../data/contact.json';
import styles from '../styles/Footer.module.scss';

export const Footer = () => {
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
      <a className={styles.returnToTop} href='#'>
        Return to Top
      </a>
      <small className={styles.small}>
        &copy; 2025 Sabrina Ira. All Rights Reserved.
      </small>
    </footer>
  );
};
