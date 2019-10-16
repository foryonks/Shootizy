import React, { useEffect } from "react";
import { fb } from "./fb";
import config from "scripts/config";

const FacebookChatBot = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fb(FB => timer && FB.XFBML.parse());
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

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
};

export default FacebookChatBot;
