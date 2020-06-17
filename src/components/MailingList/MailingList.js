import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import styles from './mailingList.css';

library.add(faEnvelope);

//TODO add validation

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


