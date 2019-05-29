import React, { Component } from "react";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";

let CONFIG = {
  readonly: false, // all options from https://xdsoft.net/jodit/play.html
  uploader: {
    url: "/api/file/upload",
  },
  filebrowser: {
    ajax: {
      url: "/api/file/files",
    },
    uploader: {
      url: "/api/file/upload",
    },
  },
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
    };
  }

  onChange = content => {
    this.props.onChange(content);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <JoditEditor value={this.state.content} config={CONFIG} onChange={this.onChange} />
      </div>
    );
  }
}
export default Editor;
