import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Podcast.css';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

// import { getPodcastBySlug } from '../../services/contentfulApi';
library.add(faPlayCircle)
function Podcast({ podcast }) {
  
  
  
  // componentDidMount() {
  //   const { slug } = this.props.match.params;

  //   getPodcastBySlug(slug)
  //     .then(response => {
  //       const post = response.items[0].fields;
  //       this.setState({ ...post, isLoading: false });
  //     });
  // }
 

  return (
    <article className={styles.article}>
      <h3 className={styles.episodeTitle}></h3>
        <Link to={`/podcasts/${podcast.slug}`}> 
          <h3>{podcast.title}</h3>
       </Link> 
       <div className={styles.articleCover}>
       <a href={podcast.slug}><img className={styles.episodeImage} src= {podcast.image} /></a>
       <button className={styles.playButton} onclick={podcast.podcast}><FontAwesomeIcon className={styles.playCircle} icon="play-circle"/> LISTEN</button>
          </div>
          <h4>{podcast.datePublished}</h4>
          <p>{podcast.description}</p>
          
      
        
      {/* <span>
          {moment(datePublished).format('MMMM D, YYYY')}
        </span> */}
    </article>
  );
}
Podcast.propTypes = {
  podcast: PropTypes.object
};

export default Podcast;
