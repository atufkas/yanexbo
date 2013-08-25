var express = require('express')
  , path = require('path')
  , fs = require('fs')

module.exports = function(app) {

  // Settings for all environments
  app.configure(function() {

    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret goes here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.locals.pretty = true;

    // Example function populating req object to res.locals object
    app.all('*', function(req, res, next) {
      res.locals.req = req;
      next();
    });
  });

  // Additional development settings
  app.configure('development', function() {
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  // Additional production settings
  app.configure('production', function() {
      app.use(express.errorHandler());
  });

  return this;
};