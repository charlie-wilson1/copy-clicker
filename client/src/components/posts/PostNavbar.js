import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostNavbar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <div className="container">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: 'white' }}
          >
            {/* <a className="navbar-brand" href="#">
                Navbar
              </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  {/* <a className="nav-link" href="#">
                    Link
                  </a> */}
                  <select className="custom-select">
                    <option selected>All Types</option>
                    <option value="1">Emails</option>
                    <option value="1">SMS</option>
                    <option value="1">Landing Pages</option>

                    {/* <option value="2">Two</option>
                      <option value="3">Three</option> */}
                  </select>
                </li>
              </ul>

              <Link to="add-post" className="btn btn-info mr-1">
                Add Copy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default PostNavbar;
