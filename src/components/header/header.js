import React from 'react';

import Nav from '../nav/nav';
import styles from './header.css';

export default function Header() {
  return (
    <header className={styles.header}>  
      <h2>Lit • Latinas</h2>
      <button> SUPPORT US</button>
      <h4>Listen to the Voices of the Xicanx Experience </h4>
      <Nav className={styles.nav} />
    </header>
  );
}
