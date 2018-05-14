import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-black mb-4">
        <div className="container">
          <Link className="navbar-brand logo-text" to="/">
            <i class="fas fa-quote-left logo" />
            CopyClicker
          </Link>

          {/* <i class="fas fa-quote-right logo" /> */}

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  {' '}
                  Try It
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  {' '}
                  FAQ
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link btn-signup" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn-login" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
