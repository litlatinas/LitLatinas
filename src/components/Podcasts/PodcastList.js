import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getPodcasts } from '../../services/contentfulApi';
import styles from './AllPodcasts.css';

class PodcastsList extends Component {
  constructor(props){
    super(props);

    this.state = { 
      podcasts: [] 
    };
  }
  componentDidMount() {
    getPodcasts()
      .then(response => {
        const podcasts = response.items.map(item => item.fields);

        this.setState({ podcasts });
        // console.log('podcasts', getPodcasts());
      })
      .catch(error => { 
        error.message;
      });
  
  }
  render() {
    const podcasts = this.state.podcasts;
    podcasts.sort(
      (first, second) =>
        new Date(first.datePublished).getTime() <
          new Date(second.datePublished).getTime()
    )
      .map(podcast=> {
      //key={podcast.slug}
      //it throws an error if using
        return <li key={podcast.slug} podcast={podcast} />;
      });

    return (
      <ul className={styles.podcastList}>
        {podcasts}
      </ul>
    );
  }
}

export default PodcastsList;
