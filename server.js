var express = require('express')
  , http = require('http')
  , mongoose = require('mongoose')
  // Load environment based configuration
  , env = process.env.NODE_ENV || 'development'
  , config = require('./config')[ env ]


// Bootstrap db connection
//mongoose.connect('localhost','meteor',3003);
mongoose.connect(config.db);

// Create express application
var app = module.exports = require('express')();

// Bootstrap settings for connect/express
require('./bootstrap').boot(app);

// Bootstrap routes
require('./routes')(app);

// Create servers and listen to configured port
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Welcome to SHOWTIME server. My environment is <%s>',env);
});
