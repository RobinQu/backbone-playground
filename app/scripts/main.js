require.config({
  paths: {
    jquery: "/bower_components/jquery/jquery",
    underscore: "/bower_components/underscore/underscore-min",
    backbone: "/bower_components/backbone/backbone-min",
    localstorage: "/bower_components/backbone.localStorage/backbone.localStorage-min"
  },
  
  shim: {
    backbone: {
      deps: ["jquery","underscore"],
      exports: "Backbone"
    },
    "underscore": {
      exports: "_"
    }
  }
});

define(["app"], function (app) {
  
  return app.initialize();
  
});