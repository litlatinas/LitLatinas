import React from 'react';
import PropTypes from 'prop-types';

function Resource({ resource }) {
  console.log('file', resource.file);
  return (
    <>
      <h2>{resource.resourceTitle}</h2>
      <p>{resource.body}</p>
      <a href={resource.website} target="_blank" rel="noopener noreferrer">{resource.website}</a>
      <a href={resource.file} rel="noopener noreferrer">Click here to download</a>
    </>
  );
}
Resource.propTypes = {
  resource: PropTypes.object
};

export default Resource;
