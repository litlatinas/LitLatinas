import React from 'react';
import styles from './Player.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faFastBackward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faFastBackward, faVolumeUp);

(function(){

  var Player = document.querySelectorAll('.player');
  var speeds = [1, 1.5, 2, 2.5, 3];    
  
  for(i = 0; i < Player.length; i++) {
    var player = Player[i];
    var audio = player.querySelector('audio');
    var play = player.querySelector('.play');
    var pause = player.querySelector('.pause');
    var rewind = player.querySelector('.rewind');
    var progress = player.querySelector('.progress');
    var speed = player.querySelector('.speed');
    var mute = player.querySelector('.mute');
    var currentTime = player.querySelector('.currenttime');
    var duration = player.querySelector('.duration');
    
    var currentSpeedIdx = 0;

    pause.style.display = 'none';
    
    var toHHMMSS = function(totalsecs) {
      var sec_num = parseInt(totalsecs, 10); // don't forget the second param
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);

      if(hours   < 10) {hours   = '0' + hours; }
      if(minutes < 10) {minutes = '0' + minutes;}
      if(seconds < 10) {seconds = '0' + seconds;}
        
      var time = hours + ':' + minutes + ':' + seconds;
      return time;
    };
    
    audio.addEventListener('loadedmetadata', function(){
      progress.setAttribute('max', Math.floor(audio.duration));
      duration.textContent  = toHHMMSS(audio.duration);
    });
    
    audio.addEventListener('timeupdate', function(){
      progress.setAttribute('value', audio.currentTime);
      currentTime.textContent  = toHHMMSS(audio.currentTime);
    });
    
    play.addEventListener('click', function(){
      this.style.display = 'none';
      pause.style.display = 'inline-block';
      pause.focus();
      audio.play();
    }, false);

    pause.addEventListener('click', function(){
      this.style.display = 'none';
      play.style.display = 'inline-block';
      play.focus();
      audio.pause();
    }, false);
 
    rewind.addEventListener('click', function(){
      audio.currentTime -= 30;
    }, false);
    
    progress.addEventListener('click', function(e){
      audio.currentTime = Math.floor(audio.duration) * (e.offsetX / e.target.offsetWidth);
    }, false);

    speed.addEventListener('click', function(){
      currentSpeedIdx = currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0;
      audio.playbackRate = speeds[currentSpeedIdx];
      this.textContent  = speeds[currentSpeedIdx] + 'x';
      return true;
    }, false);

    mute.addEventListener('click', function() {
      if(audio.muted) {
        audio.muted = false;
        this.querySelector('.fa').classList.remove('fa-volume-off');
        this.querySelector('.fa').classList.add('fa-volume-up');
      } else {
        audio.muted = true;
        this.querySelector('.fa').classList.remove('fa-volume-up');
        this.querySelector('.fa').classList.add('fa-volume-off');
      }
    }, false);
  }
})(this);


export default function Player() {
  return (
    <>
    <div className={styles.player} />
      <div className={styles.controls}>
        <button className={styles.play}><i className="fa fa-play"></i><span>Play</span></button>
        <button className={styles.pause}><i className="fa fa-pause"></i><span>Pause</span></button>
        <button className={styles.rewind}><i className="fa fa-fast-backward"></i><span>Rewind</span></button>
        <span className={styles.currenttime}>00:00</span>
        <progress className={styles.progress} value="0"></progress>
        <span className={styles.duration}>00:00</span>
        <button className={styles.speed}>1x</button>
        <button className={styles.mute}><i className="fa fa-volume-up"></i><span>Mute/Unmute</span></button>
      </div>
      <audio src="https://s3.amazonaws.com/ShopTalk/080_rapidfire_19.mp3"></audio><a className="download" href="https://s3.amazonaws.com/ShopTalk/080_rapidfire_19.mp3" download>Download Podcast</a>
    </>
  );
}
