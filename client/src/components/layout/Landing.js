import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ProperEmoji from '../common/ProperEmoji';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <section className="my-5 py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 mb-4 text-left">
                  Ready to Use:{' '}
                  <TypistLoop interval={1000}>
                    {[
                      'Email Sequences',
                      'Text Messages',
                      'Call Scripts',
                      'Headlines',
                      'Ads',
                      'Emails',
                      'Product Descriptions',
                      'Copy'
                    ].map(text => (
                      <Typist key={text} startDelay={1000}>
                        {text}
                      </Typist>
                    ))}
                  </TypistLoop>
                </h1>
                <p className="lead text-left">
                  <strong>Prewritten, professional copy:</strong> Just customize
                  & sell, sell, sell
                  <span role="img" alt="">
                    {' '}
                    💰💰💰
                  </span>
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
          </div>
        </section>

        <section className=" py-3 pt-4  section-salmon">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="lead text-center">
                  <strong>
                    Designed for landing pages <ProperEmoji emoji="🖥" alt="" />,
                    ads <ProperEmoji emoji="💰" alt="" />, websites
                    <ProperEmoji emoji="💻" alt="" />, emails
                    <ProperEmoji emoji="💌" alt="" />, text messages
                    <ProperEmoji emoji="📱" alt="" />, and phone calls{' '}
                    <ProperEmoji emoji="☎️" alt="" />
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
                  alt=""
                />
                <h2 className="text-center">Click.</h2>
                <p className="lead pt-2">
                  Click and choose from <strong>hundreds of snippets</strong> in
                  multiple niches.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/pencil_tip.png'}
                  className="mx-auto d-block home-img-2"
                  alt=""
                />
                <h2 className="text-center">Customize.</h2>
                <p className="lead pt-2">
                  Customize your selection to <strong>make it your own</strong>{' '}
                  or save it for later.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={window.location.origin + '/img/lightbulb_idea.png'}
                  className="mx-auto d-block home-img-2"
                  alt=""
                />
                <h2 className="text-center">Copy.</h2>
                <p className="lead pt-2">
                  Copy your new content into your sales process...{' '}
                  <strong> Step 3: PROFIT.</strong>
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
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
