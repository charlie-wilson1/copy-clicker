import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';

import { withRouter } from 'react-router-dom';

import { addPost } from '../../actions/postActions';
import SelectListGroup from '../common/SelectListGroup';

import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import * as Icons from 'images/icons';

class FormEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   type: '',
      subject: '',
      body: '',
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
      body: this.state.body,
      type: 'email',
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);

    // this.setState({ text: '' });

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
                      <TextAreaFieldGroup
                        placeholder="Body"
                        name="body"
                        value={this.state.body}
                        onChange={this.onChange}
                        error={errors.body}
                      />
                    </div>
                    {/* <Editor /> */}
                    <Editor
                      toolbarClassName="demo-toolbar-custom"
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor-custom"
                      toolbar={{
                        options: [
                          'inline',
                          'blockType',
                          'fontSize',
                          'fontFamily',
                          'list',
                          'textAlign',
                          'colorPicker',
                          'link',
                          'embedded',
                          'emoji',
                          // 'image',
                          // 'remove',
                          'history'
                        ],
                        inline: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                          options: [
                            'bold',
                            'italic',
                            'underline',
                            'strikethrough'
                            // 'monospace',
                            // 'superscript',
                            // 'subscript'
                          ],
                          // bold: { icon: bold, className: undefined },
                          // italic: { icon: italic, className: undefined },
                          // underline: { icon: underline, className: undefined },
                          strikethrough: {
                            // icon: strikethrough,
                            className: undefined
                          },
                          // monospace: { icon: monospace, className: undefined },
                          superscript: {
                            // icon: superscript,
                            className: undefined
                          }
                          // subscript: { icon: subscript, className: undefined }
                        },
                        blockType: {
                          inDropdown: true,
                          options: [
                            'Normal',
                            'H1',
                            'H2',
                            'H3',
                            'H4',
                            'H5',
                            'H6',
                            'Blockquote',
                            'Code'
                          ],
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined
                        },
                        fontSize: {
                          // icon: fontSize,
                          options: [
                            8,
                            9,
                            10,
                            11,
                            12,
                            14,
                            16,
                            18,
                            24,
                            30,
                            36,
                            48,
                            60,
                            72,
                            96
                          ],
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined
                        },
                        fontFamily: {
                          options: [
                            'Arial',
                            'Georgia',
                            'Impact',
                            'Tahoma',
                            'Times New Roman',
                            'Verdana'
                          ],
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined
                        },
                        list: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                          options: ['unordered', 'ordered', 'indent', 'outdent']
                          // unordered: { icon: unordered, className: undefined },
                          // ordered: { icon: ordered, className: undefined },
                          // indent: { icon: indent, className: undefined },
                          // outdent: { icon: outdent, className: undefined }
                        },
                        textAlign: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                          options: ['left', 'center', 'right', 'justify']
                          // left: { icon: left, className: undefined },
                          // center: { icon: center, className: undefined },
                          // right: { icon: right, className: undefined },
                          // justify: { icon: justify, className: undefined }
                        },
                        colorPicker: {
                          // icon: color,
                          className: undefined,
                          component: undefined,
                          popupClassName: undefined,
                          colors: [
                            'rgb(97,189,109)',
                            'rgb(26,188,156)',
                            'rgb(84,172,210)',
                            'rgb(44,130,201)',
                            'rgb(147,101,184)',
                            'rgb(71,85,119)',
                            'rgb(204,204,204)',
                            'rgb(65,168,95)',
                            'rgb(0,168,133)',
                            'rgb(61,142,185)',
                            'rgb(41,105,176)',
                            'rgb(85,57,130)',
                            'rgb(40,50,78)',
                            'rgb(0,0,0)',
                            'rgb(247,218,100)',
                            'rgb(251,160,38)',
                            'rgb(235,107,86)',
                            'rgb(226,80,65)',
                            'rgb(163,143,132)',
                            'rgb(239,239,239)',
                            'rgb(255,255,255)',
                            'rgb(250,197,28)',
                            'rgb(243,121,52)',
                            'rgb(209,72,65)',
                            'rgb(184,49,47)',
                            'rgb(124,112,107)',
                            'rgb(209,213,216)'
                          ]
                        },
                        link: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          popupClassName: undefined,
                          dropdownClassName: undefined,
                          showOpenOptionOnHover: true,
                          defaultTargetOption: '_self',
                          options: ['link', 'unlink']
                          // link: { icon: link, className: undefined },
                          // unlink: { icon: unlink, className: undefined }
                        },
                        emoji: {
                          // icon: emoji,
                          className: undefined,
                          component: undefined,
                          popupClassName: undefined,
                          emojis: [
                            '😀',
                            '😁',
                            '😂',
                            '😃',
                            '😉',
                            '😋',
                            '😎',
                            '😍',
                            '😗',
                            '🤗',
                            '🤔',
                            '😣',
                            '😫',
                            '😴',
                            '😌',
                            '🤓',
                            '😛',
                            '😜',
                            '😠',
                            '😇',
                            '😷',
                            '😈',
                            '👻',
                            '😺',
                            '😸',
                            '😹',
                            '😻',
                            '😼',
                            '😽',
                            '🙀',
                            '🙈',
                            '🙉',
                            '🙊',
                            '👼',
                            '👮',
                            '🕵',
                            '💂',
                            '👳',
                            '🎅',
                            '👸',
                            '👰',
                            '👲',
                            '🙍',
                            '🙇',
                            '🚶',
                            '🏃',
                            '💃',
                            '⛷',
                            '🏂',
                            '🏌',
                            '🏄',
                            '🚣',
                            '🏊',
                            '⛹',
                            '🏋',
                            '🚴',
                            '👫',
                            '💪',
                            '👈',
                            '👉',
                            '👉',
                            '👆',
                            '🖕',
                            '👇',
                            '🖖',
                            '🤘',
                            '🖐',
                            '👌',
                            '👍',
                            '👎',
                            '✊',
                            '👊',
                            '👏',
                            '🙌',
                            '🙏',
                            '🐵',
                            '🐶',
                            '🐇',
                            '🐥',
                            '🐸',
                            '🐌',
                            '🐛',
                            '🐜',
                            '🐝',
                            '🍉',
                            '🍄',
                            '🍔',
                            '🍤',
                            '🍨',
                            '🍪',
                            '🎂',
                            '🍰',
                            '🍾',
                            '🍷',
                            '🍸',
                            '🍺',
                            '🌍',
                            '🚑',
                            '⏰',
                            '🌙',
                            '🌝',
                            '🌞',
                            '⭐',
                            '🌟',
                            '🌠',
                            '🌨',
                            '🌩',
                            '⛄',
                            '🔥',
                            '🎄',
                            '🎈',
                            '🎉',
                            '🎊',
                            '🎁',
                            '🎗',
                            '🏀',
                            '🏈',
                            '🎲',
                            '🔇',
                            '🔈',
                            '📣',
                            '🔔',
                            '🎵',
                            '🎷',
                            '💰',
                            '🖊',
                            '📅',
                            '✅',
                            '❎',
                            '💯'
                          ]
                        },
                        embedded: {
                          // icon: embedded,
                          className: undefined,
                          component: undefined,
                          popupClassName: undefined,
                          defaultSize: {
                            height: 'auto',
                            width: 'auto'
                          }
                        },
                        image: {
                          // icon: image,
                          className: undefined,
                          component: undefined,
                          popupClassName: undefined,
                          urlEnabled: true,
                          uploadEnabled: true,
                          alignmentEnabled: true,
                          uploadCallback: undefined,
                          previewImage: false,
                          inputAccept:
                            'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                          alt: { present: false, mandatory: false },
                          defaultSize: {
                            height: 'auto',
                            width: 'auto'
                          }
                        },
                        remove: {
                          // icon: eraser,
                          className: undefined,
                          component: undefined
                        },
                        history: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                          options: ['undo', 'redo']
                          // undo: { icon: undo, className: undefined },
                          // redo: { icon: redo, className: undefined }
                        }
                      }}
                    />
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
