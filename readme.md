# yanexbo

## About

_yanexbo = yet another node/express boilerplate_

This is a minimalistic boilerplate which can be used as a quick start for your next node project using (connect-)express,
mongoose and the jade templating engine. It suggests a simple yet opinionated set of files and directories giving some
structure to your application. It can easily grow into any direction of node/express app.

yanexbo includes and bootstraps:

* express
* mongoose
* jade

## Why?

I created this boilerplate because I needed some simple and robust starting point for own node/express projects
I recently worked on. Generators like yeoman do a good job but are bit too heavy when a quick and small start is
desired. So, to give a short answer: I'm just sharing my personal boilerplate - perhaps some of you guys out there
may find it useful.

## Installation

### Clone repository and install dependencies

via git and npm:

```
$ git clone http://github.com/atufkas/yanexbo.git [my-app-name]
$ cd [my-app-name]
$ npm install
```

### Setup database connection

Database and other business specific application configuration is meant to be stored in `./config.js`. Be sure to have
your MongoDB up and running and define the connection string in config[env].db. yanexbo doesn't include a schema definition
nor any other db access example at all (at least not yet) - it just illustrates how to setup the connection.
If you don't want to use MongoDB at all right now, just remove or uncomment two lines in `./server.js` (require() + connect()).

### Run server

```
node servers.js
```

Open `http://localhost:3000` for sample page.

## Structure

```
/public                     Public (static) static files for express http server
/public/javascripts         Public javascript files
/public/javascripts/app.js  Sample javascript file (just a wrapper)
/public/stylesheets         Public stylesheet files
/public/stylesheets/app.js  Sample stylesheet file (minimalistic)
/routes                     Routing modules ("controllers")
/routes/index.js            Example routing module
/routes/hello.js            Example routing module
/views/                     View templates
/views/layout.jade          Example jade view (layout) template
/views/index.jade           Example jade view template (extends layout.jade)
/views/hello.jade           Example jade view template (extends layout.jade)
/config.js                  Database and application related configuration
/express-routes.js          Express routing definitions
/express-settings.js        Express configuration / settings
/server.js                  Main file for bootstrapping and starting node http server
```

Included are two example routes (`/` and `/hello/host`) rendering output using a simple HTML5 jade layout template.

## License

[X11 License](http://directory.fsf.org/wiki/License:X11) ("MIT License") - see file LICENSE

## Contribute

Ideas, suggestions and pull requests are welcome.