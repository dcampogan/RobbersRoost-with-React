import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTripDetails (trip) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={trip.image} alt={trip.name} />
          <CardBody>
            <CardTitle>{trip.name}</CardTitle>
            <CardText>{trip.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    if (this.props.trip) {
      return (
        <div className="row">
          {this.renderTripDetails(this.props.trip)}
        </div>
      );
    }
    return <div />;
  }
}

export default TripDetails;