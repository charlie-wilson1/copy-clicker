import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    // console.log(user);
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <section className="section-salmon py-5">
          <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-5 m-auto">
                  <div className="card">
                    <div className="card-body bg-white card-login">
                      {/* cb */}
                      <h1 className="display-4 text-center">Log In</h1>
                      <p className="lead text-center">
                        Sign in to your CopyClicker account
                      </p>
                      <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            // className="form-control form-control-lg"
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
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            // className="form-control form-control-lg"
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
