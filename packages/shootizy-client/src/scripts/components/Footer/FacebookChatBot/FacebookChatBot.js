import React from "react";
import { fb } from "./fb";
import config from "scripts/config";

class FacebookChatBot extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb(FB => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={config.facebook.pageId}
        // theme_color="..."
        // logged_in_greeting="..."
        // logged_out_greeting="..."
        // greeting_dialog_display="..."
        // greeting_dialog_delay="..."
        // minimized="false"
        // ref="..."
      />
    );
  }
}

export default FacebookChatBot;
