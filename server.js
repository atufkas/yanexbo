var express = require('express')
  , http = require('http')
  , mongoose = require('mongoose')
  // Load environment based configuration
  , env = process.env.NODE_ENV || 'development'
  , config = require('./config')[ env ]

// Connect to mongodb using config file db settings (uncomment to enable!)
mongoose.connect(config.db);

// Create express application
var app = module.exports = express();

// Bootstrap settings for connect/express
require('./express-settings')(app);

// Bootstrap routes
require('./express-routes')(app);

// Create servers and listen to configured port
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('This is yanexbo - yet another node/exporess boilerplate. My env is <%s>',env);
});
