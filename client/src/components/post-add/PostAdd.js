import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';
import SelectListGroup from '../common/SelectListGroup';

class PostAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      text: '',
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
      text: this.state.text,
      type: this.state.type,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);

    this.setState({ text: '' });

    this.props.history.push('/community');

    // console.log('submitted');
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { errors } = this.state;

    // select options for status
    const typeOptions = [
      {
        label: 'Email',
        value: 'email'
      },
      {
        label: 'SMS',
        value: 'sms'
      },
      {
        label: 'Landing Page',
        value: 'website'
      },
      {
        label: 'Other',
        value: 'Other'
      }
    ];

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
                    <SelectListGroup
                      placeholder="type"
                      name="type"
                      value={this.state.type}
                      onChange={this.onChange}
                      options={typeOptions}
                      error={errors.status}
                      info="Give us an idea of where you are in your career :)"
                    />

                    <div className="form-group">
                      <TextAreaFieldGroup
                        placeholder="Create a post"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        error={errors.text}
                      />
                    </div>
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

PostAdd.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostAdd);
