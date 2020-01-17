import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from 'react-router-dom';

function RenderTripsItem({trip}) {
  return (
    <Card>
      <Link to={`/trips/${trip.id}`}>
            <CardImg
              width="100%"
              top
              className="text-center"
              // style={{ height: "400px", width: "267px" }}
              src={trip.image}
              alt={trip.name}
            />
            <CardBody>
              <CardTitle>{trip.name}</CardTitle>
              <CardSubtitle>Description</CardSubtitle>
              <CardText>{trip.description}</CardText>
              <Button>Button</Button>
            </CardBody>

          {/* <div className="col-md-4">
            <CardImg
              width="100%"
              top
              className="text-center"
              // style={{ height: "400px", width: "267px" }}
              src={trip.image}
              alt={trip.name}
            />
          </div>
          <div className="col-md-8">
            <CardBody>
              <CardTitle>{trip.name}</CardTitle>
              <CardSubtitle>Description</CardSubtitle>
              <CardText>{trip.description}</CardText>
              <Button>Button</Button>
            </CardBody>
          </div>
        </div> */}
      </Link>
    </Card>
  );
}

function Trips(props) {

    const trips = props.trips.map(trip => {
      return (
        <div key={trip.id} className="col-md-6 my-3">
          <RenderTripsItem trip={trip} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {trips}
        </div>
      </div>
    );
  }

export default Trips;
