import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Podcast.css';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

library.add(faPlayCircle)

function Podcast({ podcast }) {
  return (
    <article className={styles.article}>
      <h3 className={styles.episodeTitle}></h3>
        <Link to={`/podcasts/${podcast.slug}`}> 
          <h3>{podcast.title}</h3>
       </Link> 
       <div className={styles.articleCover}>
       <Link to={`/podcasts/${podcast.slug}`}>
       <img className={styles.episodeImage} src= {podcast.image} alt="podcast-art"/> 
       </Link> 
       <button className={styles.playButton} onClick={podcast.podcast}><FontAwesomeIcon className={styles.playCircle} icon="play-circle"/> LISTEN</button>
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
