import React, { useEffect } from "react";

//import "jodit";
import "jodit/build/jodit.min.css";
import Jodit from "jodit";
import PropTypes from "prop-types";
import getConfig from "../config";
import Icon from "scripts/components/Icon";
import "./FileBrowser.scss";

Jodit.defaultOptions.language = "fr";

let fileBrowser = null;

const LocalFileBrowser = ({ currentFile, onData }) => {
  const onButtonClick = () => {
    if (!fileBrowser) {
      const config = getConfig();
      fileBrowser = new Jodit.modules.FileBrowser(null, config.filebrowser);
    }
    fileBrowser.open(data => {
      onData(data.files);
    });
  };

  useEffect(() => {
    if (fileBrowser) {
      // Close if switching item
      fileBrowser.close();
    }
  }, [currentFile]);

  return <Icon onClick={onButtonClick} name="image" className="file-browser clickable" />;
};

LocalFileBrowser.propTypes = {
  currentFile: PropTypes.string,
  onData: PropTypes.func,
};

LocalFileBrowser.defaultProps = {
  onData: () => {},
};

export default LocalFileBrowser;
