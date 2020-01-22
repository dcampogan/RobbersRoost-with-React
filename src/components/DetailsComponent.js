import React from "react";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Jumbotron
} from "reactstrap";
import NavbarComp from "./NavbarComponent";

function RenderTripDetails(trip) {
  return (
    <React.Fragment>
      {/* <div className="col-md-5 m-1"> */}
      {/* <div className="row">
        <Card>
          <CardImg top src={trip.image} alt={trip.name} />
          <CardBody>
            <CardTitle>{trip.name}</CardTitle>
            <CardText>{trip.description}</CardText>
          </CardBody>
        </Card> */}

      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Welcome To Robber's Roost</h1>
              <h2>Your Next Adventure Starts Here</h2>
            </div>
          </div>
        </div>
      </Jumbotron>

      <div className="row my-3">
        <div className="col-md-4">
          <CardImg
            width="100%"
            top
            className="text-center"
            style={{ height: "400px", width: "267px" }}
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
      </div>

      {/* </div> */}
    </React.Fragment>
  );
}

function TripDetails(props) {
  if (props.trip) {
    return (
      <React.Fragment>
        <NavbarComp />
        <div className="container">{RenderTripDetails(props.trip)}</div>
      </React.Fragment>
    );
  }
  return <div />;
}

export default TripDetails;
