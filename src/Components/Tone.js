import React, { Component } from 'react';
import tune from '../piano-keys-sounds/A0.mp3';
import Sound from 'react-sound'

export default class Tone extends Component {

render() {
 return (
   <Sound
   src={tune}
   playStatus={Sound.status.PLAYING}
   />
  );
 }
}
