module.exports = function (app) {
  // User Routes
  app.use('/api/user', require('./user.routes.js')());
};

