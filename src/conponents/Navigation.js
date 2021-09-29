import React, { Component } from "react";

/**icons */
import Menu from "@material-ui/icons/Menu";
import MenuOpen from "@material-ui/icons/MenuOpen";
import Notifications from "@material-ui/icons/Notifications";
import Account_circle from "@material-ui/icons/AccountCircle";
import Exit_to_app from "@material-ui/icons/ExitToApp";

export class Navigation extends Component {
  static displayName = Navigation.name;
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      sideBarActive: false,
    };
  }

  render() {
    return (
      <header>
        <this.MenuToggle />
        <h1>Code.DEV</h1>
        <this.Container />
      </header>
    );
  }

  MenuToggle = () => {
    return this.state.sideBarActive ? (
      <MenuOpen className="menu" onClick={this.onClickMenuButton} />
    ) : (
      <Menu className="menu" onClick={this.onClickMenuButton} />
    );
  };

  Container = () => {
    return (
      <div className="header-container">
        <nav className="navigation">
          <ul>
            <li>
              <a>
                <Notifications className="icon" />
              </a>
            </li>
            <li>
              <a>
                <Account_circle className="icon" />
              </a>
            </li>
            <li>
              <a>
                <Exit_to_app className="icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  onClickMenuButton = () => {
    this.setState({ sideBarActive: !this.state.sideBarActive });
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
}
