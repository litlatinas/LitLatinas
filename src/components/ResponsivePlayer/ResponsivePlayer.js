import React, { Component } from 'react';
import styles from './ResponsivePlayer.css';
import ReactPlayer from 'react-player';


class ResponsivePlayer extends Component {
  render() {
    return (
      <div className={styles.playerContents}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={podcast}
          width='100%'
          height='100%'
        />
      </div>  
    );
  }
}
export default ResponsivePlayer;
