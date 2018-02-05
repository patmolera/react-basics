import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Home extends PureComponent {
  constructor (props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
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

  onChangeLink () {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
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
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Greet Me</button>
        <hr/>
        <input type="text"
          value={this.state.homeLink}
          onChange={(event) => this.onHandleChange(event)}
        />
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link Header</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  initialLinkName: PropTypes.string
};
