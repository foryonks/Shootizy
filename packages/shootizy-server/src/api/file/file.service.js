/**
 * TODO: Sanitize name on upload (save)
 * TODO: Rename file (when jodit implement that)
 * TODO: Rename Folder (when jodit implement that)
 */

const fs = require("fs");
const shell = require("shelljs");
const path = require("path");
const sharp = require("sharp");
const {
  getFolderUpload,
  moveFileOnUpload,
  browseFiles: listFiles,
  BASE_URL,
  dateNow,
  sanitizePath,
} = require("./helpers");

const formatEntry = ({ ...others }) => ({
  success: true,
  time: dateNow(),
  data: {
    code: 220,
    ...others,
  },
});

/**
 * Return list of customers' ratings
 * @returns {array}
 */
const upload = async (filesMap, path) => {
  const files = Object.keys(filesMap).map(key => filesMap[key]);
  let fileNames = [],
    isImages = [];
  for (var i = 0; i < files.length; i++) {
    const { fileName, isImage } = await moveFileOnUpload(files[i], path);
    fileNames.push(fileName);
    isImages.push(isImage);
  }
  var resultTest = {
    success: true,
    time: Date.now(),
    data: {
      baseurl: BASE_URL,
      messages: [],
      files: fileNames,
      isImages,
      code: 220,
    },
  };
  return resultTest;
};

const browseFiles = path => {
  const files = listFiles(path);
  return formatEntry({
    sources: {
      default: {
        baseurl: sanitizePath(BASE_URL),
        path: sanitizePath(path),
        files,
      },
    },
  });
};

const browseFolders = path => {
  const folders = listFiles(path, {
    foldersOnly: true,
    filter: file => !/_thumb/.test(file),
  });

  return formatEntry({
    sources: {
      default: {
        baseurl: sanitizePath(BASE_URL),
        path: sanitizePath(path),
        folders,
      },
    },
  });
};

const remove = (folder, filename = "") => {
  let folderOrFile = path.join(getFolderUpload(), folder, filename);
  if (filename) {
    shell.rm(folderOrFile);
    // remove thumb of file
    const { dir, base } = path.parse(folderOrFile);
    shell.rm(path.join(dir, "_thumb", base));
  } else {
    //if not filename, then use -rf params
    shell.rm("-rf", folderOrFile);
  }
  return formatEntry({});
};

const folderCreate = (folderPath, folderName) => {
  let folderPathToCreate = path.join(getFolderUpload(), folderPath, folderName);
  shell.mkdir("-p", folderPathToCreate);
  return formatEntry({});
};

const move = (from, folderPath) => {
  let folderDest = path.join(getFolderUpload(), folderPath);
  let folderOrFileFrom = path.join(getFolderUpload(), from);
  shell.mv("-f", folderOrFileFrom, folderDest);
  return formatEntry({});
};

const createThumb = async file => {
  if (fs.existsSync(file)) {
    return;
  }
  const realFile = file.replace(/\/_thumb\//, "/");
  if (!fs.existsSync(realFile)) return;
  const folder = path.dirname(realFile);
  shell.mkdir("-p", `${folder}/_thumb`);
  await sharp(realFile)
    .resize({ width: 150, height: 150, fit: "inside" })
    .toFormat("jpeg")
    .toFile(file);
};

const permissions = () =>
  formatEntry({
    permissions: require("./permissions.json"),
  });

module.exports = {
  upload,
  browseFiles,
  browseFolders,
  permissions,
  remove,
  move,
  folderCreate,
  createThumb,
};
