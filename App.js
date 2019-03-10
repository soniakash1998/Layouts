import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrivatChat from './Components/PrivateChat/PrivateChat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrivatChat />
      </div>
    );
  }
}

export default App;