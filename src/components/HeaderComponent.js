import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron
} from "reactstrap";
import { NavLink } from "react-router-dom";
// { NavLink } will add an a tag to that link, and automatically add the active if the URL matches.

class Header extends Component {
  //store state information from below Collapse
  constructor(props) {
    super(props);
    this.state = {
      inNavOpen: false
    };

    // In react, making this method available for using within JSX, that needs to "bind" this in code.
    this.toggleNav = this.toggleNav.bind(this);
  }

  // implement toggleNav method, when {this.toggleNav} is onclick.
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  // render method
  render() {
    return (
      // React fragment
      // <Navbar dark expand="md"> => for medium to extra large screen sizes.
      // <Collapse navbar> => for extra small to small screen sizes
      // <Nav navbar> => that list four links in nav bar, and that will link to different pages.
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg" /> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg" /> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
