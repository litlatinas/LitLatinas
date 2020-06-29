import React from 'react';
import ReactPlayer from 'react-player';
import styles from './responsivePlayer.css';


const ResponsivePlayer = () =>  {
  return (
    <div className={styles.playerContents}>
      <ReactPlayer
        className={styles.reactPlayer}
        url="https://feeds.soundcloud.com/stream/692140882-user-766878646-challenging-the-academy-research-poetry-w-shannon-kearns.m4a"
        width='100%'
        height='100%'
        controls={true}
      />
    </div>  
  );
  
};
export default ResponsivePlayer;
