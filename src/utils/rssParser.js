import React, { useState, useEffect } from 'react';
import RSSParser from 'rss-parser';
import styles from './allPodcasts.css';

const RssFeed = () => {
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
  return (
    <>
    <article>
      {feed.items.slice().map((item, i) => (
        <ul className={styles.podcastList} key={i}>
          <li>{item.title}</li>
          <li>{item.duration}</li>
          <li>{item.content}</li>
          <li>{item.pubDate}</li>
        </ul>
      ))}
    </article>
    </>
  );
};
export default RssFeed;

 

