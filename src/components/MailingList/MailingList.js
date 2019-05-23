import React, { Component } from 'react';
import styles from './MailingList.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

<<<<<<< HEAD
library.add(faEnvelope);

class MailingList extends Component {
  onSubmit = (event) => [
    event.preventDefault()

  ]
  render() {
    return (
      <div className={styles.mailingList} >
        <FontAwesomeIcon className={styles.envelope} icon="envelope" size="7x" />
        <form className={styles.mailingListForm} onSubmit={this.onSubmit}>
          <input type="text" placeholder="email" value=""></input>
          <button> JOIN OUR MAILING LIST</button>
        </form>
      </div >
    );
  }
}
=======

library.add(faEnvelope);
>>>>>>> master

export default MailingList;

// export default function MailingList() {
//   return (
//     <div className={styles.mailingList}>
//       <FontAwesomeIcon className={styles.envelope} icon="envelope" size="7x"/> 
//       <form className={styles.mailingListForm}>  
//         <input type="text" placeholder="email" value=""></input>
//         <button> JOIN OUR MAILING LIST</button>
//       </form> 
//     </div>
//   );
// }
export default function MailingList() {
  return (
    <div className={styles.mailingList}>
      <FontAwesomeIcon className={styles.envelope} icon="envelope" size="7x" />
      <form className={styles.mailingListForm}>
        <input type="text" placeholder="email" value=""></input>
        <button> JOIN OUR MAILING LIST</button>
      </form>
    </div>
  );
}
