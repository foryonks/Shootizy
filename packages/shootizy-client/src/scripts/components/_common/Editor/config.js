import { getAppToken } from "../../../utils/api";

const uploadUrl = "/api/file/upload";

// const uploadConfig = {
//   language: "fr",
//   uploader: {
//     headers,
//     url: uploadUrl,
//   },
//   filebrowser: {
//     headers,
//     language: "fr",
//     ajax: {
//       url: "/api/file/files",
//     },
//     uploader: {
//       url: uploadUrl,
//     },
//   },
// };

const getConfig = () => {
  let headers = {
    authorization: getAppToken(),
  };

  return {
    readonly: false,
    language: "fr",
    headers,
    ajax: {
      headers,
    },
    uploader: {
      headers,
      url: uploadUrl,
    },
    filebrowser: {
      language: "fr",
      ajax: {
        headers,
        url: "/api/file/files",
      },
      uploader: {
        headers,
        url: uploadUrl,
      },
    },
  };
};

export default getConfig;
