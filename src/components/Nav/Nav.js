import React from 'react';
import style from './Nav.css';

export default function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li>PODCASTS</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
}
