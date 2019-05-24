import React, { Component } from 'react';
import styles from './MailingList.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

library.add(faEnvelope);

const Form = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className={styles.mailingList}>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <FontAwesomeIcon className={styles.envelope} icon="envelope" size="7x" />
      <div className={styles.mailingListForm}>
        <input type="email" placeholder="email" ref={node => (email = node)} />
        <input type="text" placeholder="name" ref={node => (name = node)} />
        <button onClick={submit}>
          JOIN OUR MAILING LIST
        </button>
      </div>
    </div >
  );
};

class MailingList extends Component {
  render() {
    const url = 'https://yahoo.us20.list-manage.com/subscribe/post?u=9acafd8fd1065105772d48d18&amp;id=57bf91db14';
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
