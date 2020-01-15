import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrip: null
    };
  }
  onTripSelect(trip) {
    this.setState({ selectedTrip: trip });
  }

  renderSelectedTrip(trip) {
    if (trip) {
      return (
        <Card>
          <CardImg top src={trip.image} alt={trip.name} />
          <CardBody>
            <CardTitle>{trip.name}</CardTitle>
            <CardText>{trip.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const trips = this.props.trips.map(trip => {
      return (
        <div key={trip.id} className="col-md-5 mx-auto my-3">
          <Card onClick={() => this.onTripSelect(trip)}>
            <CardImg top max-width="50%" src={trip.image} alt={trip.name} />
            <CardBody>
              <CardTitle>{trip.name}</CardTitle>
              <CardSubtitle>Description</CardSubtitle>
              <CardText>
                {trip.description}
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{trips}</div>
        <div className="row">
          <div className="col-md-5 m-auto">
            {this.renderSelectedTrip(this.state.selectedTrip)}
          </div>
        </div>
      </div>
    );
  }
}

export default Trips;
