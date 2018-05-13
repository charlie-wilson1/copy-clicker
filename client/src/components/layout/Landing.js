import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">
                    Focus on Selling, Not on Writing Copy.
                  </h1>
                  <p className="lead">Handcrafted Copy is just a click away.</p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/bulletin_board.png'}
                  className="mx-auto d-block"
                  max-width="256px"
                />
                <h2 className="text-center">Click.</h2>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/pencil_tip.png'}
                  className="mx-auto d-block"
                />
                <h2 className="text-center">Customize.</h2>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/lightbulb_idea.png'}
                  className="mx-auto d-block"
                />
                <h2 className="text-center">Copy.</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
