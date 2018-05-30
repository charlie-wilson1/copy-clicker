import React, { Component } from 'react';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

class TextEditorGroup extends Component {
  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent());
  };

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar:
            'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default TextEditorGroup;
