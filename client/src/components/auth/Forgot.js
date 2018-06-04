import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { forgotUser } from '../../actions/authActions';

import TextFieldGroup from '../common/TextFieldGroup';

class Forgot extends Component {
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
      this.props.history.push('/home');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/home');
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
      email: this.state.email
      //   password: this.state.password
    };

    // console.log(user);
    this.props.forgotUser(userData, this.props.history);
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
                      <h1 className="display-4 text-center">Forgot Pass</h1>
                      <p className="lead text-center">
                        <strong>(BETA)</strong> Feature not ready yet
                      </p>
                      <form noValidate onSubmit={this.onSubmit}>
                        <TextFieldGroup
                          placeholder="Email Address"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                        />

                        {/* <TextFieldGroup
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        /> */}

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

Forgot.propTypes = {
  forgotUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { forgotUser })(withRouter(Forgot));
