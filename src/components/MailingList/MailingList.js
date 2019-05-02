import React from 'react';
import styles from './MailingList.css';

export default function MailingList() {
  return (
    <form className={styles.mailingList}>  
      <label>Join our Mailing List</label>
      <input type="text"  placeholder="name" value=""></input>
      <input type="text" placeholder="email" value=""></input>
      <button> SIGN UP</button>
    </form>
  );
}
