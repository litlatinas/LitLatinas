import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AllPodcasts.css';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



library.add(faPlayCircle, faEnvelope, faKey);

function Podcast({ podcast }) {
   
  return (
    <article className={styles.article}>
      <div className={styles.articleCover}>
        <img className={styles.episodeImage} src={podcast.image} />
        <button className={styles.playButton}><FontAwesomeIcon className={styles.playIcon} icon="play-circle"/>             LISTEN</button>
      </div>
      <span><h1 className={styles.episodeTitle}>
        <Link to={`/podcasts/${podcast.slug}`}>
          {podcast.title}
        </Link>
      </h1></span>
      <h3 className={styles.episodeDate}>{podcast.datePublished}</h3>
      <p className={styles.episodeDescription}>{podcast.description}</p> 
    </article>
  );
}
Podcast.propTypes = {
  podcast: PropTypes.object
};

export default Podcast;
