import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Key from './Components/Key.js';

class App extends Component {
  state = {
    combinationsOfKeys: [
      {'A': [0,7]},
      {'Ab' : [1,7]},
      {'B': [0,7]},
      {'Bb': [0.7]},
      {'C': [1,8]},
      {'D': [1,7]},
      {'Db': [1,8]},
      {'E': [1,7]},
      {'Eb': [1,7]},
      {'F': [1,7]},
      {'G': [1,7]},
      {'Gb': [1,7]}
    ]
  }

  render() {
    const keys = []
    const namesOfKeys = []

    for(let i=0; i<this.state.combinationsOfKeys.length; i++){
      let nameOfMp3File = ''
      let currentObject = this.state.combinationsOfKeys[i];
      let keyOfTheObject = Object.keys(currentObject)
      let valueOfTheObjectArrayWithKeyLimits = currentObject[keyOfTheObject[0]]
      for(let n = valueOfTheObjectArrayWithKeyLimits[0];
        n < valueOfTheObjectArrayWithKeyLimits[1]+1; n++){
          nameOfMp3File = keyOfTheObject + n + '.mp3'
          namesOfKeys.push(nameOfMp3File)
        }
    };

    console.log(this.state.combinationsOfKeys.length)
    for(let i=0; i<namesOfKeys.length; i++){
      let nameOfAnMP3File = namesOfKeys[i];
      keys.push(<Key
        key={i}
        keyName={nameOfAnMP3File.replace('.mp3', '')}
        fileName={nameOfAnMP3File}/>)
    }
    console.log({keys})
    console.log({namesOfKeys})

    return (
      <div>
        {keys}
      </div>
    );
  }
}

export default App;
