import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './team.css';

export default function Team() {
  return (
    <section id='team-bios'>
      <ul className={styles.teamList}>
        <li>
          <article className={styles.article}>
            <div className={styles.teamBio}>
              <img className={styles.authorPic} src="https://xvp.akamaized.net/assets/education/biographies/sidebar-laura-poitras-fe85dac3c22aebb3040f79a385308f1d.jpg" />
            </div>
            <span><h3 className={styles.teamName}>Name</h3></span>
            <p className={styles.bioDescription}>Chivearse rifar. piruja ardido. troque mero mero. apretado mariposón. naranjas cateado. presumido diste al clavo. chinga troca. 
            buenota mariachi. vieja armarla. se me prendio el foco yonque. cabrón al brinco. pollero eres junior. alebrestarse jalas parejo. híjole burra. 
            el otro lado despapaye. talacha julia. padre valemadrista. calote charolastra. reventón fumigado. chilango pinche. cerote livais.</p>
          </article>
        </li>
        <li>
          <article className={styles.article}>
            <div className={styles.teamBio}>
              <img className={styles.authorPic} src="https://www.latimes.com/resizer/8PIhFC_dso6ooWq1k0g9j_mlRDk=/448x336/www.trbimg.com/img-5baab3e5/turbine/la-bio-carolina-a-miranda" />
            </div>
            <span><h3 className={styles.teamName}>Name</h3></span>
            <p className={styles.bioDescription}>bato chupar. cachirul se me prendio el foco. guácala sacate de onda. chiflársela friega. gato volador al brinco. churro cachirul. cheve changuitos.</p>
          </article>
        </li>
        <li>
          <article className={styles.article}>
            <div cclassName={styles.teamBio}>
              <img className={styles.authorPic} src="https://www.mediamoves.com/wp-content/uploads/2014/08/Eva_Rodriguez1.jpg" />
            </div>  
            <span><h3 className={styles.teamName}>Name</h3></span>
            <p className={styles.bioDescription}>This is just your average description that explains alot</p>
          </article>
        </li>
       
      </ul>
    </section>
  );
}

