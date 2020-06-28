import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import styles from './podcast.css';

library.add(faPlayCircle);

function Podcast({ podcast }) {
  return (
    <article className={styles.article}>
      <h3 className={styles.episodeTitle}></h3>
      <h3>{podcast.title}</h3>
      <div className={styles.articleCover}>
        <img className={styles.episodeImage} src={podcast.image} alt="podcast-art" />
        <button className={styles.playButton}
        >
          <FontAwesomeIcon className={styles.playCircle} icon="play-circle" /> LISTEN</button>
      </div>
      <h4>{moment(podcast.datePublished).format('MMMM D, YYYY')}</h4>
      <p>{podcast.description}</p>
    </article>
  );
}
Podcast.propTypes = {
  podcast: PropTypes.object
};

export default Podcast;
