import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Home extends PureComponent {
  constructor (props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 2000);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>New component!</p>
        <p>Your name is {this.props.name}!</p>
        <p>Your age is {this.state.age}!</p>
        <p>Your Status: {this.state.status}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older.</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
};
