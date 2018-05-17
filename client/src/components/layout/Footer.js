import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section className="bg-white">
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            CopyClicker
            <small className="d-block mb-3 text-muted">
              {new Date().getFullYear()}
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Legal</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/privacy">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Navigate</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};
