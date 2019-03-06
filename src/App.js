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
    const words = []

    for(let i=0; i<this.state.combinationsOfKeys.length; i++){
      words.push(i)
    };

    console.log(this.state.combinationsOfKeys.length)
    for(let i=0; i<10; i++){
      keys.push(<Key key={i}/>)
    }
    console.log({keys})
    console.log({words})

    return (
      <div>
        {keys}
      </div>
    );
  }
}

export default App;
