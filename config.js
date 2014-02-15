module.exports = function (app, express) {
  var config = {};

  app.configure(function () {
    config.appName = 'Boilerplate web server';
  });

  app.configure('development', function () {
    config.port = 3000;
  });

  app.configure('test', function () {
    config.port = 3000;
  });

  app.configure('production', function () {
    config.port = 80;
  });

  if (!app.config) {
    app.config = config;
  } else {
    _.extend(app.config, config);
  }
};