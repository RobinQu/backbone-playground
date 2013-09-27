require.config({
  paths: {
    jquery: "/bower_components/jquery/jquery",
    underscore: "/bower_components/underscore/underscore-min",
    backbone: "/bower_components/backbone/backbone-min",
    localstorage: "/bower_components/backbone.localStorage/backbone.localStorage",
    handlebars: "/bower_components/handlebars.js/dist/handlebars",
    templates: "/scripts/gallery/templates/gallery"
  },
  
  shim: {
    backbone: {
      deps: ["jquery","underscore","handlebars"],
      exports: "Backbone"
    },
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
  
  return app.initialize();
  
});