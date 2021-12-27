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
        <div className="header-container">
          <h1 className="header-title">Code.DEV</h1>
          <this.SearchPanel/>
          <this.NavContainer />
        </div>
        <div className="space1"></div>
      </header>
    );
  }

  MenuToggle = () => {
    return this.state.sideBarActive ? (
      <MenuOpen className="menu-btn" onClick={this.onClickMenuButton} />
    ) : (
      <Menu className="menu-btn" onClick={this.onClickMenuButton} />
    );
  };

  SearchPanel = () => {
    return (
      <div className="search-bar-panel">
        <input type="text" placeholder="Code.DEV search..." className="search-input"></input>
      </div>
    )
  }

  NavContainer = () => {
    return (
      
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
      
    );
  };

  onClickMenuButton = () => {
    this.setState({ sideBarActive: !this.state.sideBarActive });
    this.props.rootSideBar(this.state.sideBarActive);
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
}
