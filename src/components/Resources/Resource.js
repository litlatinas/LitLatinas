import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resource.css';

function Resource({ resource }) {
  return (
    <>
      <section className={styles.section}>
        <h2>{resource.resourceTitle}</h2>
        <p>{resource.body}</p>
        <a href={resource.website} target="_blank" rel="noopener noreferrer">{resource.website}</a>
        <a href={resource.file} rel="noopener noreferrer">Click here to download</a>
      </section>
    </>
  );
}
Resource.propTypes = {
  resource: PropTypes.object
};

export default Resource;
