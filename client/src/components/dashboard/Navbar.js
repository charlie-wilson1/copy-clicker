import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class DashboardNavbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

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
                {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li> */}
                <li className="nav-item mr-2">
                  {/* <a className="nav-link" href="#">
                  Link
                </a> */}
                  <select className="custom-select">
                    <option selected>Fresh</option>
                    <option value="1">Most Liked</option>
                    {/* <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </li>

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

                <li className="nav-item">
                  {/* <a className="nav-link" href="#">
                  Link
                </a> */}
                  <select className="custom-select">
                    <option selected>Industry</option>
                    <option value="1">Digital Marketing</option>
                    <option value="1">SMS</option>
                    <option value="1">Landing Pages</option>

                    {/* <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </li>

                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li> */}
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button> */}
              </form>
            </div>
          </nav>
        </div>
      </div>

      //  <select class="custom-select">
      //   <option selected>Open this select menu</option>
      //   <option value="1">One</option>
      //   <option value="2">Two</option>
      //   <option value="3">Three</option>
      // </select>

      // <div className="nav-scroller bg-white box-shadow">
      //   <div className="container">
      //     <ul className="nav nav-underline">
      //       <li className="nav-item dropdown">
      //         <a
      //           className="nav-link dropdown-toggle"
      //           data-toggle="dropdown"
      //           href="#"
      //           role="button"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Dropdown
      //         </a>
      //         <div className="dropdown-menu">
      //           <a className="dropdown-item" href="#">
      //             Action
      //           </a>
      //           <a className="dropdown-item" href="#">
      //             Another action
      //           </a>
      //           <a className="dropdown-item" href="#">
      //             Something else here
      //           </a>
      //           <div className="dropdown-divider" />
      //           <a className="dropdown-item" href="#">
      //             Separated link
      //           </a>
      //         </div>
      //       </li>
      //       <a className="nav-link active" href="#">
      //         Featured
      //       </a>
      //       <a className="nav-link" href="#">
      //         Community
      //         <span className="badge badge-pill bg-light align-text-bottom">
      //           27
      //         </span>
      //       </a>
      //       <a className="nav-link" href="#">
      //         Liked
      //       </a>
      //       <a className="nav-link" href="#">
      //         Feedback22
      //       </a>
      //       <select class="selectpicker">
      //         <option>Mustard</option>
      //         <option>Ketchup</option>
      //         <option>Relish</option>
      //       </select>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

DashboardNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  DashboardNavbar
);
