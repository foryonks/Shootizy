import React, { Component } from "react";
import FileBrowser from "../FileBrowser";
import "./EditableImage.scss";

class EditableImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
    };
  }

  onChange = data => {
    const image = data[0];
    this.setState({
      src: image,
    });
    this.props.onChange(image);
  };

  render() {
    const { src } = this.state;
    const { maxWidth, alt } = this.props;
    return (
      <div className="editable-image">
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: maxWidth + "px",
          }}
        />
        <FileBrowser onData={this.onChange} />
      </div>
    );
  }
}

export default EditableImage;
