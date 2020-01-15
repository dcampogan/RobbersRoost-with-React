import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Trips from './components/TripsComponent'
import { TRIPSDATA } from './shared/tripsData';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          trips: TRIPSDATA
      };
  }

  render() {
    return (
      <div>
        <Navbar className="navcolordc">
          <div className="container">
            <NavbarBrand href="/">Robbers Roost</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <div className="row">
            <Trips trips={this.state.trips}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
