import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }
  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { auth, post, showActions } = this.props;
    // const post = this.props.post.post;
    // console.log(post);

    let icon;
    if (post.type === 'sms') {
      icon = 'fa-comment';
    } else if (post.type === 'email') {
      icon = 'fa-envelope';
    } else if (post.type === 'website') {
      icon = 'fa-desktop';
    }

    return (
      <div className="col-md-6">
        <div className="card card-body mb-3 bg-featured-email text-light">
          <div className="row">
            <div className="col-md-12">
              <p className="lead">
                <i
                  className={classnames('fas mx-2', icon)}
                  style={{ fontSize: '40px' }}
                />
                FEATURED CONTENT
              </p>
              <p className="lead">
                {/* <i
                  className={classnames('fas mx-2', icon)}
                  style={{ fontSize: '40px' }}
                /> */}
                {post.text || post.subject}
              </p>
              <hr />
              <p className="lead">
                {/* <i className={classnames('fas mx-2', icon)} /> */}
                {post.body}
              </p>
              <p>by {post.name}</p>
              {showActions ? (
                <span>
                  {' '}
                  <button
                    onClick={this.onLikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-light mr-1"
                  >
                    <i
                      className={classnames('fas fa-thumbs-up', {
                        'text-info': this.findUserLike(post.likes)
                      })}
                    />
                    <span className="badge badge-light">
                      {post.likes.length}
                    </span>
                  </button>
                  <button
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-light mr-1"
                  >
                    <i className="text-secondary fas fa-thumbs-down" />
                  </button>
                  <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                    Comments
                  </Link>
                  {post.user === auth.user.id ? (
                    <button
                      onClick={this.onDeleteClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-danger mr-1"
                    >
                      <i className="fas fa-times" />
                    </button>
                  ) : null}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
