import React, {Component} from 'react'
import Sound from 'react-sound';

const key = (props) => {
  return (
    <button onClick={props.playMusic}>{props.keyName}</button>
  )
}

export default key;
