import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>  
      <h2>Lit • Latinas</h2>
      <h3>with Loerit &amp; Karen </h3>
      <h4>Welcome to Lit Latinas, a social action podcast that researches, reviews, &amp; critiques marginalized communities, mental health, social work, access to education, continued learning, and community.</h4>
      <Nav className={styles.nav} />
      <button> SUPPORT US</button>
    </header>
  );
}
