import React, { PureComponent } from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Drawers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({open: !this.state.open});
  return () {
    <Drawer open={ this.state.open }>
      <MenuItem>Link 1</MenuItem>
      <MenuItem>Link 2</MenuItem>
    </Drawer>
  }
}
export default Drawers;
