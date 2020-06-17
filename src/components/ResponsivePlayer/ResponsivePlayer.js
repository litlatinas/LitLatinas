import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import styles from './responsivePlayer.css';

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
