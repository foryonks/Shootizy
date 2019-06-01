import React, { Component } from "react";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import getConfig from "./config";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
    };
    this.editorConfig = getConfig();
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
        <JoditEditor
          value={this.state.content}
          config={this.editorConfig}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Editor;
