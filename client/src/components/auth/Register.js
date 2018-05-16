import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
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
                  <div className="card">
                    <div className="card-body bg-white card-login">
                      <h1 className="display-4 text-center">Sign Up</h1>
                      <p className="lead text-center">
                        Create your CopyClicker account
                      </p>

                      <form noValidate onSubmit={this.onSubmit}>
                        <TextFieldGroup
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                          error={errors.name}
                        />

                        <TextFieldGroup
                          placeholder="Email"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                          info="Confirmation email will be sent"
                        />

                        <TextFieldGroup
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        />

                        <TextFieldGroup
                          placeholder="Confirm Password"
                          name="password2"
                          type="password"
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}
                        />

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
