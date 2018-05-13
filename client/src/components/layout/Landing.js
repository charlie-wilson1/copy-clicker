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
                  <h1 className="display-3 mb-4">Click. Customize. Copy.</h1>
                  <p className="lead"> It's as easy as that.</p>
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
                <h2>HOWDY</h2>
              </div>
              <div className="col-md-4">
                <h2>HOWDY</h2>
              </div>
              <div className="col-md-4">
                <h2>HOWDY</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
