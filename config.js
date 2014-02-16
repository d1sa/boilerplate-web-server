module.exports = function (app, express) {
  var config = {};

  app.configure(function () {
    config.appName = 'Boilerplate web server';
  });

  app.configure('development', function () {
    config.port = 3000;
  });

  app.configure('production', function () {
    config.port = 80;
  });

  app.config = config;
};