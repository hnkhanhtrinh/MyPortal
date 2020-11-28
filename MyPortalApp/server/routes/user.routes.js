var router = require("express").Router();
var userController = require("../controllers/user.controller")
module.exports = function () {
  // User Routes
  router.get('/me', userController.me);
  return router;
};
