const fs = require("fs");
const path = require("path");
const express = require("express");
const { asyncRouteWrapper } = require("api/api.utils");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const { CustomError } = require("api/api.errors");
const fileService = require("./file.service");
const loginMiddleware = require("middleware/login");

const { getFolderUpload, isImage } = require("./helpers");

/**
 * TODO: Ajouter une vérification si le fichier existe et renomer le fichier avec un Date.now()
 */

const routes = express.Router();
routes.use(fileUpload());
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

/**
 * Upload multiple files
 */
routes.post(
  "/upload",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    if (Object.keys(req.files).length == 0) {
      throw new CustomError("No files were uploaded.", 400);
    }
    const { path } = req.body;
    const resultTest = await fileService.upload(req.files, path);
    res.json(resultTest);
  })
);

/**
 * Return file from url (asset route)
 */
routes.get(
  "/assets/:file*",
  asyncRouteWrapper(async (req, res) => {
    const file = `${req.params.file}${req.params[0]}`;
    if (!isImage(file)) {
      throw new CustomError("Forbidden", 403);
    }
    const folder = getFolderUpload();
    const filePath = path.join(folder, file);

    if (!fs.existsSync(filePath) && /\/_thumb\//.test(filePath)) {
      await fileService.createThumb(filePath);
    }
    if (!fs.existsSync(filePath)) {
      throw new CustomError("File not found", 404);
    }
    res.sendFile(filePath);
  })
);

// // thumbs
// routes.get(
//   "/assets/:file*",
//   asyncRouteWrapper((req, res) => {
//     const folder = getFolderUpload();
//     const file = `${req.params.file}${req.params[0]}`;

//     if (!isImage(file)) {
//       throw new CustomError("Forbidden", 400);
//     }

//     const filePath = `${folder}/${file}`;
//     res.sendFile(filePath);
//   })
// );

routes.post(
  "/files",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper((req, res) => {
    const { action, path, source, name, from } = req.body;
    let response;
    switch (action) {
      case "permissions":
        response = fileService.permissions();
        break;
      case "files":
        response = fileService.browseFiles(path);
        break;
      case "folders":
        response = fileService.browseFolders(path);
        break;
      case "fileRemove":
      case "folderRemove":
        response = fileService.remove(path, name);
        break;
      case "folderCreate":
        response = fileService.folderCreate(path, name);
        break;
      case "fileMove":
      case "folderMove":
        response = fileService.move(from, path);
        break;
    }
    res.json(response);
  })
);

//  // Access files in frontend
//  server.route({
//   method: "GET",
//   path: "/assets/{file*}",
//   handler: (request, reply) => {
//     return reply.file("./public/" + request.params.file);
//   }
// });

// File browser handler
// routes.post("/files", browseHandler);

module.exports = routes;
