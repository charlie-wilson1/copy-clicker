import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';

import { withRouter } from 'react-router-dom';

import { addPost } from '../../actions/postActions';
import SelectListGroup from '../common/SelectListGroup';
import sanitizeHtml from 'sanitize-html';

// jodit
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';

class FormEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      body: '',
      errors: {},
      content: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateContent(value) {
    this.setState({ content: value });
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
      body: this.state.content,
      type: 'email',
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);

    this.props.history.push('/community');
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  updateContent = value => {
    this.setState({ content: value });
  };
  /**
   * @property Jodit jodit instance of native Jodit
   */
  jodit;
  setRef = jodit => (this.jodit = jodit);

  config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    // useImageEditor: false,
    toolbarButtonSize: 'large',
    buttons:
      'bold,strikethrough,underline,italic,|,font,paragraph,brush,,link,|,align,undo,redo,|,fullsize',
    buttonsXS: 'brush,paragraph,|,align,|,undo,redo',
    buttonsSM: 'bold,brush,paragraph,align,|,undo,redo',
    buttonsMD: 'bold,brush,paragraph,align,|,undo,redo'
  };

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
                    <h3>Subject</h3>
                    <div className="form-group">
                      <TextAreaFieldGroup
                        placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChange}
                        error={errors.subject}
                      />
                    </div>

                    <h3>Body:</h3>
                    <div className="form-group">
                      <JoditEditor
                        editorRef={this.setRef}
                        value={this.state.content}
                        config={this.config}
                        onChange={this.updateContent}
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

FormEmail.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(withRouter(FormEmail));
