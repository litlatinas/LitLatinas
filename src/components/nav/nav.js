import React from 'react';

import style from './nav.css';

export default function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li><a href="#podcasts">PODCASTS</a></li>
          <li><a href="#resources">RESOURCES</a></li>
          <li><a href="#books">BOOKS</a></li>
          <li><a href="#team-bios">TEAM</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </>
  );
}
