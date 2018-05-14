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
        <section class="my-5 py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 mb-4 text-left">
                  Professionally Written:{' '}
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
                  {/* <strong>Focus on selling</strong>  We've got your copy
                  covered  */}
                  <strong>We write copy so you don't have to</strong> ✏️ Just
                  customize & sell 💰 sell 💰 sell 💰
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

        <section className=" py-3 pt-4  section-salmon">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="lead text-center">
                  <strong>
                    Written with landing pages 🖥 , ads 💰, websites 💻, emails
                    💌, text messages 📱, and phone calls ☎️ in mind.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light bg-dark section-2 py-4 ">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/bulletin_board.png'}
                  className="mx-auto d-block home-img"
                />
                <h2 className="text-center">Click.</h2>
                <p className="lead">
                  Click and choose from{' '}
                  <strong>hundreds of pre-written copy pieces.</strong>
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/pencil_tip.png'}
                  className="mx-auto d-block home-img-2"
                />
                <h2 className="text-center">Customize.</h2>
                <p className="lead">
                  Customize your selection to <strong>make it your own</strong>{' '}
                  or save it for later.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/lightbulb_idea.png'}
                  className="mx-auto d-block home-img-2"
                />
                <h2 className="text-center">Copy.</h2>
                <p className="lead">
                  Copy your new content into your{' '}
                  <strong>exisiting sales process.</strong>
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
