import React, { Component } from 'react';
import propTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './mailingList.css';


library.add(faEnvelope);

const Form = ({ status, message, onValidated }) => {
  let email, name;
  

  const submit = (e) => {
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });
    e.preventDefault();
    document.getElementById('mailchimpForm').reset();
    
  };
    
  

  return (
    <form id='mailchimpForm' className={styles.mcSignup}>
      <FontAwesomeIcon className={styles.envelope} icon="envelope" size="7x" />
      <div className={styles.mailingListForm}>
        <input type="email" placeholder="email" ref={node => (email = node)} />
        <input type="text" placeholder="name" ref={node => (name = node)} />
        <button type="submit" onClick={submit}>
          JOIN OUR MAILING LIST
        </button>
        <div id='response'>
          <div className={styles.mailingList}>
            {status === 'sending' && 
              <div className={styles.mcResponse} 
                style={{ color: 'blue' }}>SENDING...</div>}
            {status === 'error' && (
              <div className={styles.mcResponse}
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === 'success' && (
              <div className={styles.mcResponse}
                style={{ color: 'green' }}
              >THANK YOU FOR SUBSCRIBING TO THE LIT LATINAS MAILING LIST! </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  status: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  onValidated: propTypes.object.isRequired,
};
class MailingList extends Component {
  
  render() {
    const url = 'https://gmail.us20.list-manage.com/subscribe/post?u=e8e2a5bc28b9a9cee48f6d372&amp;id=e37f71128d';

    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <Form 
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}

            />
          )}
        />
      </div>
    );
  }
}

export default MailingList;


