require.config({
  paths: {
    jquery: "/bower_components/jquery/jquery",
    underscore: "/bower_components/underscore/underscore-min",
    backbone: "/bower_components/backbone/backbone-min",
    localstorage: "/bower_components/backbone.localStorage/backbone.localStorage-min",
    handlebars: "/bower_components/handlebars.js/dist/handlebars",
    templates: "/scripts/todo/templates/todo"
  },
  
  shim: {
    backbone: {
      deps: ["jquery","underscore","handlebars", "utils/handlebars_helpers"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    },
    handlebars: {
      exports: "Handlebars"
    }
  }
});

define(["app"], function (app) {
  
  return app.initialize();
  
});