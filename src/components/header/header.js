import React from 'react';

import Nav from '../nav/nav';
import styles from './header.css';

export default function Header() {
  return (
    <header className={styles.header}>  
      <h2>Lit • Latinas</h2>
      <button> SUPPORT US</button>
      <h3>with your hosts Loerit &amp; Karen </h3>
      <h4>Welcome to Lit Latinas, a social action podcast that researches, reviews, &amp; critiques marginalized communities, mental health, social work, access to education, continued learning, and community.</h4>
      {/* <Nav className={styles.nav} /> */}
    </header>
  );
}
