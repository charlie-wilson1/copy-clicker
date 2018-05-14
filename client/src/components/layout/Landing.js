import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

class Landing extends Component {
  // return (
  constructor() {
    super();
    // const words = ['one', 'two', 'three'];
  }

  // )

  render() {
    return (
      <div>
        {/* <div className="landing"> */}
        {/* <div className="dark-overlay landing-inner text-light"> */}
        <section class="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 mb-4 text-left">
                  Handcrafted & Proven:{' '}
                  <TypistLoop interval={1000}>
                    {['Emails', 'Sequences', 'SMS', 'Scripts', 'Copy'].map(
                      text => (
                        <Typist key={text} startDelay={1000}>
                          {text}
                        </Typist>
                      )
                    )}
                  </TypistLoop>
                </h1>
                <p className="lead text-left">
                  Focus on selling. Not on writing.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg mr-2 btn-2-signup">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light btn-2-login">
                  Login
                </Link>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>

        <section className="bg-light bg-dark section-2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/bulletin_board.png'}
                  className="mx-auto d-block home-img"
                />
                <h2 className="text-center">Click.</h2>
                <p className="lead">
                  Click through our library of over 100 pre-written copy
                  segments. More are added every week.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/pencil_tip.png'}
                  className="mx-auto d-block home-img-2"
                />
                <h2 className="text-center">Customize.</h2>
                <p className="lead">
                  Customize the copy you choose to cater it towards your
                  audience. Use our AI tips to streamline your process.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/lightbulb_idea.png'}
                  className="mx-auto d-block home-img-2"
                />
                <h2 className="text-center">Copy.</h2>
                <p className="lead">
                  Copy your copy into your pre-existing tools. Sell more with
                  smarter copy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-cta py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="homepage-banner text-center">
                  What are you waiting for?
                </h2>
                <Link to="/register" className="btn btn-lg mr-2 btn-3-signup">
                  Sign Up
                </Link>
                {/* <Link to="/login" className="btn btn-lg btn-light btn-2-login">
                  Login
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
