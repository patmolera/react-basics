import React, { PureComponent } from "react";
import AppBar from 'material-ui/AppBar';

class Header extends PureComponent {
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

export default Header;
