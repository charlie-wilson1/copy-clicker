import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import SelectListGroup from '../common/SelectListGroup';

import { getPosts, getEmailPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';
import PostNavbar from './PostNavbar';
import PostCard from './PostCard';

class PostsFeatured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ''
      // text: '',
      // errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.getPostsToDisplay = this.getPostsToDisplay.bind(this);

    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.getPosts();
    this.getPostsToDisplay(null);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.getPostsToDisplay(e.target.value);
  }

  getPostsToDisplay(filter) {
    let myParams = {};

    if (filter) {
      myParams['type'] = filter;
    }

    myParams['user'] = '5b102e9123984b6b83eda48b';

    // this.state.type = e.target.value;
    this.props.getEmailPosts({
      params: myParams
    });
  }

  render() {
    const { posts, loading } = this.props.post;

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          {/* featured posts */}
          <div className="row">
            {posts
              .slice(0, 2)
              .map(post => <PostCard key={post._id} post={post} />)}
          </div>
          {/* post feed  */}
          <PostFeed posts={posts.slice(2)} />
        </div>
      );
    }

    return (
      <div className="feed">
        <PostNavbar getPostsToDisplay={this.getPostsToDisplay} />
        <h3 className="text-center my-3 mt-4">🎉Welcome to CopyClicker!🚀</h3>
        <p className="text-center">
          <a className="text-center" href="">
            need help?
          </a>
        </p>

        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

PostsFeatured.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getEmailPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts, getEmailPosts })(
  PostsFeatured
);
