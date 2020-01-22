import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container">
            <NavbarBrand className="navbar-brand pl-3" href="/"
              >ROBBER'S ROOST OUTFITTERS
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <nav navbar className="navbar-nav ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/trips">
                    TRIPS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/courses">
                    COURSES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    ABOUT US
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    CONTACT US
                  </NavLink>
                </NavItem>
              </nav>
            </Collapse>
          </div>
        </Navbar>

        {/* <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Welcome To Robber's Roost</h1>
                <h2>Your Next Adventure Starts Here</h2>
              </div>
            </div>
          </div>
        </Jumbotron> */}

        {/* <Navbar className="navcolordc" dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">Robbers Roost</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>

              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/trips">
                    <i className="fa fa-list fa-lg" /> Trips
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-home fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <i className="fa fa-home fa-lg" /> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar> */}
      </React.Fragment>
    );
  }
}

export default NavbarComp;