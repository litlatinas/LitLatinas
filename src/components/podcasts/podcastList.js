import React, { useState, useEffect } from 'react';
import RSSParser from 'rss-parser';
import Podcast from './podcast';
import styles from './podcastList.css';

const PodcastList = () => {
  const [feed, setFeed] = useState({ 
    title:'',
    items:[]
  });
  const rssData = async() => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    let parser = new RSSParser();

    try {
      const feed = await parser.parseURL(`${CORS_PROXY}https://feeds.soundcloud.com/users/soundcloud:users:484400916/sounds.rss`);
      setFeed(feed);
    } catch(error) {
      console.log(error);
    }
  };
  useEffect(() => {
    rssData();
  }, []);

  const rssPodcasts = feed.items.map((item, i) => <div key={i}> <Podcast item={item} /></div>);
  
  return (
    <>
      <section id="podcasts">
        <ul className={styles.podcastList}>
          {rssPodcasts}
        </ul>
      </section>
    </>
  );
};
export default PodcastList;
