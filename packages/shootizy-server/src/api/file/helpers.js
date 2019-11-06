"use strict";
const path = require("path");
const fs = require("fs");
//const _ = require("lodash");
const shell = require("shelljs");
const fecha = require("fecha");
const logger = require("logger");

// Should not allow `.file` or `file.` or `fi..le` or `fi--le` or `file___`
const INVALID_FILENAME = /^\.|\.$|\.{2,}|([^a-z0-9\.\_\-])|^\-|\-$|\-{2,}|\_{3,}/gi;

// Make sure filename meets `*.*` file naming standards
//const VALID_FILENAME_FORMAT = /.\.[a-z0-9]+$/i;

// File whitelist for images, videos, documents
// const FILE_WHITELIST = {
//   images: ["png", "jpeg", "gif", "jpg"],
//   videos: [],
//   documents: [],
//   graphics: [],
// };

// Base URL for images to be sourced
const BASE_URL = "/api/file/assets/";

// Root filepath to store images
const ROOT_URL = "public/images/";

// Upload errors
// const ERRORS = [
//   "File uploaded with success",
//   "File name missing or invalid",
//   "File type not allowed",
//   "File by that name already exists",
//   "File cannot exceed 5MB",
//   "File was only partially uploaded",
//   "No file was uploaded",
//   "Missing a temporary folder",
//   "Failed to write file to disk.",
// ];

const getFolderUpload = function(folderPath = "") {
  if (!process.env.STORAGE) {
    logger.error("please create env variable STORAGE, in dev");
    logger.error("STORAGE=$PWD/storage");
  }
  let folder = process.env.STORAGE.replace("$PWD", process.env.PWD)
    .replace("$CWD", process.cwd())
    .replace("$dirname", __dirname);
  folder = path.join(path.resolve(folder), folderPath);
  shell.mkdir("-p", folder);
  return folder;
};

// Attach errors to results for editor feedback
// error_handler: function(results, errno) {
//   results.error = errno;
//   results.msg.push(internals.errors[errno]);
// },

// Request returns files in `request.payload` vs `request.files`
// This function extracts them
// get_payload_files: function(payload) {
//   const files = {};

//   _.each(payload, (file, key) => {
//     if (/^(images|files)\[\d+\]/.test(key)) {
//       var filename = internals.sanitize_filename(file.hapi.filename);
//       files[filename] = file;
//     }
//   });

//   return files;
// },

// Removes special characters
// Turns spaces into dashes
const sanitize_filename = filename => {
  INVALID_FILENAME.lastIndex = 0;
  return filename
    .trim()
    .replace(/\s/g, "-")
    .replace(INVALID_FILENAME, "");
};

// Checks to see if filename is invalid
// const valid_filename = filename => {
//   INVALID_FILENAME.lastIndex = 0;
//   return INVALID_FILENAME.test(filename);
// };

// Checks to see if filename has a normal format
// EG: filename.extension
// const is_file = function(filename) {
//   return VALID_FILENAME_FORMAT.test(filename);
// };

// Make sure file type is whitelisted
// Defaults to `FILE_WHITELIST.images`
// const is_whitelisted = (filename, list) => {
//   return (
//     FILE_WHITELIST[list || "images"].filter(type => {
//       return new RegExp(`\.${type}$`, "i").test(filename);
//     }).length > 0
//   );
// };

const imagesExtensions = ["jpg", "gif", "png", "bmp"];

const isImage = file => {
  var extension = file.replace(/^.+?\.(\w+)$/, "$1");
  return imagesExtensions.indexOf(extension) != -1;
};

const moveFileOnUpload = async function(file, pathParam = "") {
  return new Promise(function(resolve, reject) {
    const folder = getFolderUpload(pathParam);
    const fileName = sanitize_filename(file.name);
    const filepath = `${folder}/${fileName}`;
    file.mv(filepath, err => {
      if (err) reject(err);
      else
        resolve({
          fileName,
          isImage: isImage(fileName),
        });
    });
  });
};

// useless
// TODO: remove or check if useful
const sanitizePath = str => str;
const formatDate = (date, format = "YYYY-MM-DD HH:mm:ss") => fecha.format(date, format);
const dateNow = () => formatDate(Date.now());
const isDirectory = dir => {
  return fs.lstatSync(dir).isDirectory();
};

const browseFiles = (filepath, { foldersOnly, filter = () => true } = {}) => {
  const folder = path.join(getFolderUpload(), filepath);
  const options = "-l"; //foldersOnly ? "-d" : "-l";
  const files = shell.ls(`${options}`, folder);
  if (foldersOnly) {
    //const folders = files.filter(f => f.nlink == 2).map(f => f.name);
    const folders = files
      .filter(f => isDirectory(`${folder}/${f.name}`))
      .map(f => f.name)
      .filter(filter);

    folders.unshift(filepath == "" || filepath == "/" ? "." : "..");
    return folders;
  } else {
    return files
      .filter(f => fs.lstatSync(path.join(folder, f.name)).isFile())
      .map(file => {
        return {
          file: file.name,
          thumb: `_thumb/${file.name}`,
          changed: formatDate(new Date(file.mtimeMs)),
          size: file.size,
          isImage: isImage(file.name),
        };
      });
  }
};
module.exports = {
  getFolderUpload,
  isImage,
  moveFileOnUpload,
  BASE_URL,
  ROOT_URL,
  browseFiles,
  formatDate,
  dateNow,
  sanitizePath,
};
