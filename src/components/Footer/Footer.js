import React from 'react';

import MailingList from '../mailingList/mailingList';
import Credits from '../credits/credits';
import Nav from '../nav/nav';
import styles from './footer.css';

export default function Footer() {
  return (
    <>
      <Nav />
      <footer className={styles.footer}>
        <MailingList />
        <Credits />
      </footer>
    </>
  );
}
