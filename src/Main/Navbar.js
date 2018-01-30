import React, { PureComponent } from "react";
import AppBar from 'material-ui/AppBar';

class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <AppBar
          title="Reakt App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default Navbar;
