import React, { Component } from 'react';
import Sound from 'react-sound'

class Tone extends Component {

constructor(props){
  super(props);
}

render() {
 return (
   <Sound
   url='/piano-keys-sounds/A1.mp3'
   playStatus={Sound.status.PLAYING}
   />
  );
 }
}

export default Tone;
