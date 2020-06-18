import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getPodcasts } from '../../services/contentfulApi';
import Podcast from './podcast';
import styles from './allPodcasts.css';

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
        console.error(error);
      });
  
  }
  render() {
    const podcasts = this.state.podcasts    
      .sort(
        (first, second) =>
          new Date(first.datePublished).getTime() <
          new Date(second.datePublished).getTime()
      )
      .map((podcast)=> {
      //key={podcast.slug}
      //it throws an error if using
      
        // console.log('podcast', podcast);
        return <li key={podcast.slug} ><Podcast podcast={podcast}/></li>;
      });
    // console.log('podcasts', podcasts);
    return (
      <ul className={styles.podcastList}>
        {podcasts}
      </ul>
    );
  }
}

export default PodcastsList;
