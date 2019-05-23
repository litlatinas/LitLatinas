import React from 'react';
import style from './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li><Link to='/' style={{ textDecoration: 'none'}}>PODCASTS</Link></li>
          <li><Link to='/resources' style={{ textDecoration: 'none' }}>RESOURCES</Link></li>
          <li><a href="#">TEAM</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </>
  );
}
