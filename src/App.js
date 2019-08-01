import React, { Component } from 'react';
import './App.css';

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
