import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resource.css';

const  Resource = ({ resource }) => {
  return (
    <>
      <section className={styles.section}>
        <h2>{resource.data.resource_name[0].text}</h2>
        <p>{resource.data.resource_info[0].text}</p>
        <a href={resource.data.resource_link.url} target="_blank" rel="noopener noreferrer">{resource.data.resource_link.url}</a>
      </section>
    </>
  );
};

Resource.propTypes = {
  resource: PropTypes.object
};

export default Resource;
