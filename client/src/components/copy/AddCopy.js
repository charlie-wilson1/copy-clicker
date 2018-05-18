import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextEditorGroup from '../common/TextEditorGroup';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddCopy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('submit');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                GO BAAACK
              </Link>
              <h1 className="display-4 text-center">Add Email</h1>
              <p className="lead text-center">Add your jobs and stuff here</p>

              <form onSubmit={this.onSubmit}>
                {/* <TextEditorGroup /> */}

                <h3>Subject</h3>

                <TextAreaFieldGroup
                  placeholder="Job Desc"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="tell us morea bout you"
                />

                <h3>Body</h3>

                <TextAreaFieldGroup
                  placeholder="Job Desc"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="tell us morea bout you"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-lg btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddCopy.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(AddCopy));
