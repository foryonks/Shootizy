import React from "react";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import getConfig from "./config";
import "./Editor.scss";

const editorConfig = getConfig();

const Editor = React.memo(({ onChange, content }) => {
  const onEditorChange = content => {
    onChange(content);
  };

  return (
    <div className="Editor rte-content">
      <JoditEditor value={content} config={editorConfig} onChange={onEditorChange} />
    </div>
  );
});

export default Editor;
