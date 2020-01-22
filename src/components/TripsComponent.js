import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Jumbotron
} from "reactstrap";
import NavbarComp from "./NavbarComponent";
import { Link } from "react-router-dom";

function RenderTripsItem({ trip }) {
  return (
    <React.Fragment>
      <Card>
        <CardImg
          width="100%"
          top
          className="text-center"
          style={{ height: "400px", width: "267px" }}
          src={trip.image}
          alt={trip.name}
        />
        <CardBody>
          <CardTitle>{trip.name}</CardTitle>
          <CardSubtitle>Description</CardSubtitle>
          <CardText>{trip.description}</CardText>
          <Link to={`/trips/${trip.id}`}>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>
    </React.Fragment>
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
    <React.Fragment>
      <NavbarComp />
      <div>
      <Jumbotron fluid className="text-center">>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Welcome To Robber's Roost</h1>
              <h2>Your Next Adventure Starts Here</h2>
            </div>
          </div>
        </div>
      </Jumbotron>
      </div>
      <div className="container">
        <div className="row">{trips}</div>
      </div>
    </React.Fragment>
  );
}

export default Trips;
