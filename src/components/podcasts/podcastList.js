import React, { useState, useEffect } from "react";
import RSSParser from "rss-parser";
import Podcast from "./podcast";
import styles from "./podcastList.css";
import ResponsivePlayer from "../responsivePlayer/responsivePlayer";

const PodcastList = () => {
  const [feed, setFeed] = useState({
    title: "",
    items: [],
  });
  const rssData = async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new RSSParser();

    try {
      const feed = await parser.parseURL(
        `${CORS_PROXY}https://feeds.soundcloud.com/users/soundcloud:users:484400916/sounds.rss`,
      );
      setFeed(feed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    rssData();
  }, []);

  let [url, setUrl] = useState({ url: '', setUrl: 'https://www.youtube.com/watch?v=KgBm7rhUMXU&list=RDKgBm7rhUMXU&start_radio=1' });

  const rssPodcasts = feed.items.map((item, i) => {
    const handleClick = () => {
      setUrl = item?.enclosure?.url;
    };

    return <div key={i}><Podcast item={item} onClick={handleClick} /></div>;
  });

  return (
    <>
      <ResponsivePlayer url={url}/>
      <section id="podcasts">
        <h4>EPISODES:</h4>
        <ul className={styles.podcastList}>
          {rssPodcasts}
        </ul>
      </section>
    </>
  );
};
export default PodcastList;
