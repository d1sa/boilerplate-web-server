var express = require('express'),
  app = express();

var publicFolder = __dirname + '/' + 'public',
  publicUrl = '/';

/*set evironment*/
app.set('env', 'development');

/*load config*/
require('./config.js')(app);

app.use(publicUrl, express.static(publicFolder));

var port = process.env.PORT || app.config.port;
app.listen(port);
console.log(app.config.appName + ' started on ' + port);