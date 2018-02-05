import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/header";
import {Home} from "./components/home";

class App extends PureComponent {
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <Home
              name={"Patrick"}
              initialAge={22}
            />
          </div>
        </div>
      </div>
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
    );
  }
}

export default App;
