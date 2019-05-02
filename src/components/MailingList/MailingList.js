import React from 'react';
import styles from './MailingList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MailingList() {
  return (
    <div className={styles.mailingList}>
      <FontAwesomeIcon className={styles.envelope}icon="envelope" size="10x" color="white"/> 
      <form className={styles.mailingListForm}>  
        <input type="text" placeholder="email" value=""></input>
        <button> JOIN OUR MAILING LIST</button>
      </form> 
    </div>
  );
}
