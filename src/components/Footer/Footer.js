import React from 'react';
import styles from './Footer.css';
// import MailingList from '../MailingList/MailingList';
import Subscribe from '../MailingList/Subscribe';
import Nav from '../Nav/Nav';
import Credits from '../credits/Credits';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <>
    <Nav />
    <footer className={styles.footer}>  
      <Subscribe />
      <Credits />
    </footer>
    </>
  );
}
