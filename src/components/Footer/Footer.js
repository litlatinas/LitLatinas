import React from 'react';
import styles from './Footer.css';
import MailingList from '../MailingList/MailingList';
import Nav from '../header/Nav';

export default function Footer() {
  return (
    <footer className={styles.footer}>  
      <MailingList />
      <Nav className={styles.nav} />
      
    </footer>
  );
}
