import React from 'react';
import PropTypes from 'prop-types';

function Resource({ resource }) {
  console.log('resourcewebs', resource.website);
  return (
    <>
      <h2>{resource.resourceTitle}</h2>
      <p>{resource.body}</p>
      <a href={resource.website} target="_blank" rel="noopener noreferrer">{resource.website}</a>
    </>
  );
}
Resource.propTypes = {
  resource: PropTypes.object
};

export default Resource;
