var indexRoutes = require('./routes/index')
  , helloRoutes = require('./routes/hello')

module.exports = function (app) {

  // App entry route
  app.get('/', indexRoutes.index);

  // "Hello" example route
  app.get('/hello/dump-request-headers', helloRoutes.dumpRequest);
};
