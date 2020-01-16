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
import TripDetails from './DetailsComponent';

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

  // renderSelectedTrip(trip) {
  //   if (trip) {
  //     return (
  //       <Card>
  //         <CardImg top src={trip.image} alt={trip.name} />
  //         <CardBody>
  //           <CardTitle>{trip.name}</CardTitle>
  //           <CardText>{trip.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   }
  //   return <div />;
  // }

  render() {
    const trips = this.props.trips.map(trip => {
      return (
        <div key={trip.id} className="col-md-6 my-3">
          <Card onClick={() => this.onTripSelect(trip)}>
            <div className="row">
              <div className="col-md-4">
                <CardImg width="100%"
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
            </div>
          </Card>
        </div>

        // <div key={trip.id} className="col-md-5 mx-auto my-3">
        //   <Card onClick={() => this.onTripSelect(trip)}>
        //     <CardImg top className="text-center" style={{ height:"400px", width:"267px" }} src={trip.image} alt={trip.name} />
        //     <CardBody>
        //       <CardTitle>{trip.name}</CardTitle>
        //       <CardSubtitle>Description</CardSubtitle>
        //       <CardText>
        //         {trip.description}
        //       </CardText>
        //       <Button>Button</Button>
        //     </CardBody>
        //   </Card>
        // </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{trips}</div>
        <div className="row">
          <div className="col-md-5 m1">
            <TripDetails trip={this.state.selectedTrip} />
          </div>
        </div>
        {/* <div className="row">{trips}</div>
        <div className="row">
          <div className="col-md-5 m-auto">
            {this.renderSelectedTrip(this.state.selectedTrip)}
          </div>
        </div> */}
      </div>
    );
  }
}

export default Trips;
