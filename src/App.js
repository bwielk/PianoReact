import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Key from './Components/Key.js';

class App extends Component {

  render() {
    let keys = []

    for(let i=0; i<10; i++){
      keys.push(<Key/>)
    }
    return (
      <div>
        {keys}
      </div>
    );
  }
}

export default App;
