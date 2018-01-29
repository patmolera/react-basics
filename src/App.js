import React, { PureComponent } from 'react';
import Header from './Main/Navbar.js';
import logo from './logo.svg';
import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
