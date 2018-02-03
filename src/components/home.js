import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Home extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>New component!</p>
        <p>Your name is {this.props.name}!</p>
        <p>Your age is {this.props.age}!</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <div>
          <h4>hobbies</h4>
          <ul>
            {/* <li></li> */}
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li> )}
          </ul>
        </div>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};
