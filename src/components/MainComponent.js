import React, { Component } from 'react';
import '../App.css';
import Trips from './TripsComponent';
import TripDetails from './DetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TRIPSDATA } from '../shared/tripsData';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: TRIPSDATA
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          // campsite={
          //   this.state.campsites.filter(campsite => campsite.featured)[0]
          // }
          // promotion={
          //   this.state.promotions.filter(promotion => promotion.featured)[0]
          // }
          // partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
    };

    const TripWithId = ({match}) => {
      return (
          <TripDetails 
              trip={this.state.trips.filter(trip => trip.id === +match.params.TripId)[0]}
              // description={this.state.comments.filter(comment => comment.TripId === +match.params.TripId)}
          />
      );
  };    

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/trips" render={() => <Trips trips={this.state.trips} />} />
          <Route exact path="/trips/:tripId" component={TripWithId} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
	
export default Main;