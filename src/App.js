import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/header";
import {Home} from "./components/home";

class App extends PureComponent {
  constructor () {
    super();
    this.state = {
      homeLink:"Home"
    };
  }
  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink:newName
    });
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <Header
              homeLink={this.state.homeLink}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <Home
              name={"Patrick"}
              initialAge={22}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homeLink}
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
