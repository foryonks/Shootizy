const express = require("express");
const contactService = require("./contact.service");
const { asyncRouteWrapper } = require("api/api.utils");

const routes = express.Router();

/**
 * Route Factory
 */
const routeActionFactory = (subPath, contactType, fields) =>
  routes.post(
    subPath,
    asyncRouteWrapper(async (req, res) => {
      const data = req.body;
      await contactService.add(contactType, data, fields);
      res.json("ok");
    })
  );

/**
 * Sur mesure
 */
routeActionFactory("/sur-mesure", "SUR_MESURE", ["email", "message"]);

/**
 * Venir au studio
 */
routeActionFactory("/venir-au-studio", "VENIR_AU_STUDIO", ["name", "email", "message"]);

module.exports = routes;
