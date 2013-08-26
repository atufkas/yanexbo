# yanexbo

## About

_yanexbo = yet another node/express boilerplate_

This is a minimalistic boilerplate which can be used as a quick start for your next node project using express,
mongoose and the jade templating engine. It suggests a simple yet slightly opinionated set of files and directories
giving some structure to your application. It can easily grow into any direction of node/express app.

yanexbo includes:

* [express](https://github.com/visionmedia/express) (incl. [Connect](https://github.com/senchalabs/connect)) - Web development framework
* [mongoose](https://github.com/LearnBoost/mongoose) - Modelling framework for MongoDB
* [jade](https://github.com/visionmedia/jade) - Template engine

yanexbo provides:

* a **small set of files and folders** as a basic project structure
* a small, **uncluttered server.js** main entry point
* a separate **environment configuration** file
* a separate **express settings configuration** file
* a separate **express routing configuration** file
* a simple **HTML5 jade layout** file plus views extending it


## Why?

This boilerplate emerged from working with several other projects and tries to combine some "best practices". I needed
some simple and robust starting point for own node/express projects I recently worked on. Toolboxes/generators provided
by e.g. yeoman do a fantastic job but are bit too heavy when quick and small start is desired. So, to give a
short answer: I'm just sharing my personal flavour for setting up a node/express app structure - perhaps some
of you guys out there may find it useful.

## Installation

### Clone repository and install dependencies

via git and npm:

```
$ git clone git@github.com:atufkas/yanexbo.git [my-app-name]
$ cd [my-app-name]
$ npm install
```

### Setup database connection

```
...
development: {
    db: 'mongodb://localhost:27017/yanexbo-dev'
}
...
```

Database and other environment specific application configuration is meant to be stored in `./config.js`. Be sure to have
your MongoDB up and running and define the connection string in config[env].db like shown above.

**Note**: yanexbo doesn't include a schema definition
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
/views/dump.jade            Example jade view template (extends layout.jade)
/config.js                  Database and application related configuration
/express-routes.js          Express routing definitions
/express-settings.js        Express configuration / settings
/server.js                  Main file for bootstrapping and starting node http server
```

Included are two example routes (`/` and `/hello/host`) rendering output using a simple HTML5 jade layout template.

## Contribute

Ideas, suggestions and pull requests are welcome.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Matthias Lienau &lt;matthias@mlienau.de&gt;