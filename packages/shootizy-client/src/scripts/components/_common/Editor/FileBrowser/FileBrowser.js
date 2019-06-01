import React, { Component } from "react";

//import "jodit";
import "jodit/build/jodit.min.css";
import Jodit from "jodit";
import PropTypes from "prop-types";
import getConfig from "../config";
import Icon from "scripts/components/Icon";
import "./FileBrowser.scss";

Jodit.defaultOptions.language = "fr";

const config = getConfig();
class LocalFileBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fileBrowser = null;
  onButtonClick = () => {
    if (!this.fileBrowser)
      this.fileBrowser = new Jodit.modules.FileBrowser(null, config.filebrowser);

    this.fileBrowser.open(data => {
      this.props.onData(data.files);
    });
  };

  render() {
    return <Icon onClick={this.onButtonClick} name="image" className="file-browser clickable" />;
  }
}

LocalFileBrowser.propTypes = {
  src: PropTypes.string,
  onData: PropTypes.func,
};

LocalFileBrowser.defaultProps = {
  onData: () => {},
};

export default LocalFileBrowser;
