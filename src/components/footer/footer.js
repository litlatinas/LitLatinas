import React from 'react';

import styles from './footer.css';
import MailingList from '../mailingList/mailingList';
import Nav from '../nav/nav';
import Credits from '../credits/credits';

export default function Footer() {
  return (
    <>
      <Nav />
      <footer className={styles.footer}>
        <MailingList />
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        <Credits />
      </footer>
    </>
  );
}
