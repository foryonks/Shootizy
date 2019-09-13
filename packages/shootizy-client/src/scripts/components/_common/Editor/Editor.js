import React, { Component } from "react";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import getConfig from "./config";
import "./Editor.scss";

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
      <div className="Editor rte-content">
        <JoditEditor
          value={this.state.content}
          config={this.editorConfig}
          onChange={this.onChange}
        />

        <div className="help">
          <a href="#help">Aide</a>
          <ul>
            <li>
              <h3>Pour mettre une image en pleine largeur</h3>
              <ul>
                <li>Cliquez sur l'image</li>
                <li>Cliquez sur le crayon au dessus ou en dessous (Edit)</li>
                <li>Cliquez sur avancé, et mettez la class "fullsize"</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Editor;
