import React from 'react';

import PropTypes from 'prop-types';
// import RssFeed from './podcastList';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import moment from 'moment';

import styles from './podcast.css';

library.add(faPlayCircle);

function Podcast({ item }) {
  return (
    <>
      <li>{item?.title}</li>
      <li><img src={item?.itunes?.image} width="25%"/></li>
      <li>{item?.enclosure?.url}</li>
      <li>{item?.itunes?.duration}</li>
      <li>{item?.pubDate}</li>
      <li>{item?.contentSnippet}</li>
      </>
  );
}
Podcast.propTypes = {
  item: PropTypes.object
};

export default Podcast;
