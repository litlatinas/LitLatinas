import React from 'react';
import PropTypes from 'prop-types';

function Resource({ resource }) {
  return (
    <>
      <h2>{resource.resourceTitle}</h2>
      <p>{resource.body}</p>
      <p>{resource.website}</p>
    </>
  );
}
Resource.propTypes = {
  resource: PropTypes.object
};

export default Resource;
