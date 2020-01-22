import React from 'react';
import NavbarComp from './NavbarComponent';

function Home() {
  return (
    <React.Fragment>
      <NavbarComp />
      <header className="deadhorse">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="text-uppercase">where the pavement ends...</h1>
            <h2>your adventure begins.</h2>
            {/* <a href="trips.html" className="btn btn btn-lg mybtn-white text-white">
              You could be here
            </a> */}
            <button type="button" className="btn btn-lg mybtn-white text-white">
              You could be here
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Home;
