import React from 'react';
import { Link } from 'react-router-dom';

import style from './Nav.css';

export default function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li><Link to='/'>PODCASTS</Link></li>
          <li><Link to='/resources'>RESOURCES</Link></li>
          <li><Link to='/library'>Library</Link></li>
          <li><a href="#">TEAM</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </>
  );
}
