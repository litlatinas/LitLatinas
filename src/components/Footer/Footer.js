import React from 'react';
import styles from './Footer.css';
import MailingList from '../MailingList/MailingList';
import Nav from '../Nav/Nav';

export default function Footer() {
  return (
    <footer className={styles.footer}>  
      <Nav />
      <MailingList />
      
    </footer>
  );
}
