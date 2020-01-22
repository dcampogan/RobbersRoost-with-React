import React from "react";
import NavbarComp from './NavbarComponent';
import { Jumbotron } from 'reactstrap';


function Contact(props) {
  return (
    <React.Fragment>
      <NavbarComp />
      <Jumbotron fluid className="text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Welcome To Robber's Roost</h1>
                <h2>Your Next Adventure Starts Here</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Contact Us</h2>
            <hr />
          </div>
        </div>
        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Our Address</h5>
            <address>
              1 Nucamp Way
              <br />
              Seattle, WA 98001
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone"></i> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o"></i> campsites@nucamp.co
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Contact;
