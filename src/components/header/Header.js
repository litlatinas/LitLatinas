import React from 'react';
import Nav from './Nav';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Lit Latinas</h2>
      <Nav />
    </header>
  );
}
