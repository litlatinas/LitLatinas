import React from 'react';
import styles from './AllPodcasts.css';

export default function AllPodcasts() {
  return (
    <>
    <ul className={styles.episodeList}>
      <li>
        <article className={styles.article}>
          <div className={styles.articleCover}>
            <img className={styles.episodeImage} src="https://static.wixstatic.com/media/3929e2_6cf4da3eba6f46ea8eb18170328bd380~mv2_d_2048_1367_s_2.jpg/v1/fill/w_1960,h_1112,al_c,q_90,usm_0.66_1.00_0.01/3929e2_6cf4da3eba6f46ea8eb18170328bd380~mv2_d_2048_1367_s_2.webp" />
            <button className={styles.playButton}>LISTEN</button>
          </div>
          <span><h3 className={styles.episodeTitle}>Podcast Title</h3></span>
          <h3 className={styles.episodeDate}>Date</h3>
          <p className={styles.episodeDescription}>Chivearse rifar. piruja ardido. troque mero mero. apretado mariposón. naranjas cateado. presumido diste al clavo. chinga troca. 
          buenota mariachi. vieja armarla. se me prendio el foco yonque. cabrón al brinco. pollero eres junior. alebrestarse jalas parejo. híjole burra. 
          el otro lado despapaye. talacha julia. padre valemadrista. calote charolastra. reventón fumigado. chilango pinche. cerote livais. </p>
        </article>
      </li>
      <li>
        <article className={styles.article}>
          <div className={styles.articleCover}>
            <img className={styles.episodeImage} src="https://i1.sndcdn.com/artworks-000484441278-8ir3k6-t500x500.jpg" />
            <button className={styles.playButton}>LISTEN</button>
          </div>
          <span><h3 className={styles.episodeTitle}>Podcast Title</h3></span>
          <h3 className={styles.episodeDate}>Date</h3>
          <p className={styles.episodeDescription}>bato chupar. cachirul se me prendio el foco. guácala sacate de onda. chiflársela friega. gato volador al brinco. churro cachirul. cheve changuitos. </p>
        </article>
      </li>
      <li>
        <article className={styles.article}>
          <div className={styles.articleCover}>
            <img className={styles.episodeImage} src="https://i1.sndcdn.com/artworks-000416433828-efnrh2-t500x500.jpg" />
            <button className={styles.playButton}>LISTEN</button>
          </div>
          <span><h3 className={styles.episodeTitle}>Podcast Title</h3></span>
          <h3 className={styles.episodeDate}>Date</h3>
          <p className={styles.episodeDescription}>This is just your average description that explains alot</p>
        </article>
      </li>
      <li>
        <article className={styles.article}>
          <div className={styles.articleCover}>
            <img className={styles.episodeImage} src="https://static.wixstatic.com/media/3929e2_21a7b9e9569d425fbc187debde69e473~mv2.jpg/v1/fill/w_960,h_545,al_c,q_85/3929e2_21a7b9e9569d425fbc187debde69e473~mv2.webp" />
            <button className={styles.playButton}>LISTEN</button>
          </div>
          <span><h3 className={styles.episodeTitle}>Podcast Title</h3></span>
          <h3 className={styles.episodeDate}>Date</h3>
          <p className={styles.episodeDescription}>Description</p>
        </article>
      </li>
      <li>
        <article className={styles.article}>
          <div className={styles.articleCover}>
            <img className={styles.episodeImage} src="https://static.wixstatic.com/media/3929e2_6cf4da3eba6f46ea8eb18170328bd380~mv2_d_2048_1367_s_2.jpg/v1/fill/w_1960,h_1112,al_c,q_90,usm_0.66_1.00_0.01/3929e2_6cf4da3eba6f46ea8eb18170328bd380~mv2_d_2048_1367_s_2.webp" />
            <button className={styles.playButton}>LISTEN</button>
          </div>
          <span><h3 className={styles.episodeTitle}>Podcast Title</h3></span>
          <h3 className={styles.episodeDate}>Date</h3>
          <p className={styles.episodeDescription}>Chivearse rifar. piruja ardido. troque mero mero. apretado mariposón. naranjas cateado. presumido diste al clavo. chinga troca. 
          buenota mariachi. vieja armarla. se me prendio el foco yonque. cabrón al brinco. pollero eres junior. alebrestarse jalas parejo. híjole burra.
          el otro lado despapaye. talacha julia. padre valemadrista. calote charolastra. reventón fumigado. chilango pinche. cerote livais.
          bato chupar. cachirul se me prendio el foco. guácala sacate de onda. chiflársela friega. gato volador al brinco. churro cachirul. cheve changuitos. </p>
        </article>
      </li>
      <li>
        <article className={styles.article}>
          <div className={styles.articleCover}>
            <img className={styles.episodeImage} src="https://scontent-sea1-1.cdninstagram.com/vp/3e71b8e9750c24e8c8e4a18c3f547608/5D573D3C/t51.2885-15/e35/40268680_319556315485870_2604361007198288976_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com" />
            <button className={styles.playButton}>LISTEN</button>
          </div>
          <span><h3 className={styles.episodeTitle}>Podcast Title</h3></span>
          <h3 className={styles.episodeDate}>Date</h3>
          <p className={styles.episodeDescription}>Description</p>
        </article>
      </li>
    </ul>
    </>
      
      
    
  );
}
