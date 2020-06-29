import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import ResponsivePlayer from '../responsivePlayer/responsivePlayer';

import styles from './podcast.css';

library.add(faPlayCircle);

function Podcast({ item }) {
  return (
    <article className={styles.article}>
      <h3 className={styles.episodeTitle}>{item?.title}</h3>
      <div className={styles.articleCover}>
        <img className={styles.episodeImage} src={item?.itunes?.image} alt="podcast-art"/>
        <button className={styles.playButton}
          onClick= {ResponsivePlayer}
        >
          <FontAwesomeIcon className={styles.playCircle} icon="play-circle" /> LISTEN</button>
      </div>
      <h4>{item?.itunes?.duration}</h4>
      <h4>{moment(item?.pubDate).format('MMMM D, YYYY')}</h4>
      <p>{item?.contentSnippet}</p>
    </article>
  );
}
Podcast.propTypes = {
  item: PropTypes.object
};

export default Podcast;
