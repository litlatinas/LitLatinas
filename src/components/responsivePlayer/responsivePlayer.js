import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import styles from './responsivePlayer.css';


const ResponsivePlayer = ({ item }) =>  {
  return (
    <div className={styles.playerContents}>
      <ReactPlayer
        className={styles.reactPlayer}
        url={item?.enclosure?.url}
        width='100%'
        height='100%' 
        controls={true}
      />
    </div>  
  );
  
};
ResponsivePlayer.propTypes = {
  item: PropTypes.object
};
export default ResponsivePlayer;
