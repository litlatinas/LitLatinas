import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AllPodcasts.css';
import PropTypes from 'prop-types';
// import { getPodcastBySlug } from '../../services/contentfulApi';

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
      <h1 className={styles.episodeTitle}>
        <Link to={`/podcasts/${podcast.slug}`}>
          {podcast.title}
        </Link>
      </h1>
        
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
