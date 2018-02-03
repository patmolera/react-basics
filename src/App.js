import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/header";
import {Home} from "./components/home";

class App extends PureComponent {
  render() {

    var user = {
      name: "pat",
      hobbies: ["running", "biking"]
    };

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
              age={22}
              user={user}
            >
              <p>This is a paragraph! </p>
            </Home>
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
