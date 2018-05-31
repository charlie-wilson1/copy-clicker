import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import SelectListGroup from '../common/SelectListGroup';

import { getPosts, getEmailPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';
import PostNavbar from './PostNavbar';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ''
      // text: '',
      // errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    // alert(e.target.value);
    // this.state.type = e.target.value;
    this.props.getEmailPosts({
      params: {
        type: 'email'
      }
    });
  }

  render() {
    const { posts, loading } = this.props.post;

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    const typeOptions = [
      {
        label: 'Choose',
        value: ''
      },
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
      <div className="feed">
        <PostNavbar />
        <SelectListGroup
          placeholder="type"
          name="type"
          value={this.state.type}
          onChange={this.onChange}
          options={typeOptions}
          // error={errors.status}
          info="Give us an idea of where you are in your career :)"
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getEmailPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts, getEmailPosts })(Posts);
