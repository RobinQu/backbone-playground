require.config({
  paths: {
    jquery: "/bower_components/jquery/jquery",
    underscore: "/bower_components/underscore/underscore-min",
    backbone: "/bower_components/backbone/backbone-min",
    localstorage: "/bower_components/backbone.localStorage/backbone.localStorage",
    // relational: "/bower_components/backbone-relational/backbone-relational",
    handlebars: "/bower_components/handlebars.js/dist/handlebars",
    marionette: "/bower_components/marionette/lib/backbone.marionette.min",
    templates: "/scripts/moment/templates/moment"
  },
  shim: {
    backbone: {
      deps: ["jquery", "underscore","handlebars"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Backbone.Marionette"
    },
    // relational: {
    //   deps: ["backbone"]
    // },
    underscore: {
      exports: "_"
    },
    localstorage: {
      deps: ["backbone"]
    },
    handlebars: {
      exports: "Handlebars"
    }
  }
});


define(["app"], function (app) {
  app.start();
});