import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // redux
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    // const { user } = this.props.auth;

    // same as
    // cosnt errors = this.state.errors

    return (
      <div>
        <section className="section-cta py-5">
          <div className="register">
            {/* {user ? user.name : null} */}
            <div className="container">
              <div className="row">
                <div className="col-md-5 m-auto">
                  <div classNamew="card">
                    <div className="card-body bg-white card-login">
                      <h1 className="display-4 text-center">Sign Up</h1>
                      <p className="lead text-center">
                        Create your CopyClicker account
                      </p>
                      <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className={classnames(
                              'form-control form-control-lg rounded-0',
                              {
                                'is-invalid': errors.name
                              }
                            )}
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className={classnames(
                              'form-control form-control-lg rounded-0',
                              {
                                'is-invalid': errors.email
                              }
                            )}
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                          {/* <div className="is-invalid">Email is required!</div> */}
                          {/* <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small> */}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className={classnames(
                              'form-control form-control-lg rounded-0',
                              {
                                'is-invalid': errors.password
                              }
                            )}
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                          {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            className={classnames(
                              'form-control form-control-lg rounded-0',
                              {
                                'is-invalid': errors.password2
                              }
                            )}
                            onChange={this.onChange}
                          />
                          {errors.password2 && (
                            <div className="invalid-feedback">
                              {errors.password2}
                            </div>
                          )}
                        </div>
                        <input
                          type="submit"
                          className="btn btn-lg btn-info btn-block mt-4 rounded-0 btn-submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
