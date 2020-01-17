import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

  function RenderTripDetails (trip) {
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


  
function TripDetails(props) {
  if (props.trip) {
    return (
      <div className="row">
      {RenderTripDetails(props.trip)}
      </div>
    );
  }
  return <div />;
}

export default TripDetails;