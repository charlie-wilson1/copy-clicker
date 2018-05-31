import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import { withRouter } from 'react-router-dom';

import { addPost } from '../../actions/postActions';
import SelectListGroup from '../common/SelectListGroup';

import { toast } from 'react-toastify';

class FormSMS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      //   body: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      subject: this.state.subject,
      //   body: this.state.body,
      type: 'sms',
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);

    // this.setState({ text: '' });

    toast('Fuck yeah boi 🚀 🚀');

    this.props.history.push('/community');

    console.log('submitted');
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="post-form mb-3">
              <div className="card card-info">
                <div className="card-header bg-info text-white">
                  Add some copy, totally rad
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <h3>Message</h3>
                    <div className="form-group">
                      <TextAreaFieldGroup
                        placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChange}
                        error={errors.subject}
                      />
                    </div>

                    {/* <h3>Body:</h3>
                    <div className="form-group">
                      <TextAreaFieldGroup
                        placeholder="Body"
                        name="body"
                        value={this.state.body}
                        onChange={this.onChange}
                        error={errors.body}
                      />
                    </div> */}
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FormSMS.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(withRouter(FormSMS));
