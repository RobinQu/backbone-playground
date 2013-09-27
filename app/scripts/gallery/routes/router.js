define(["require", "backbone"], function (require, Backbone) {
  return Backbone.Router.extend({
    routes: {
      "search/:query": "search"
    },
    
    search: function (query) {
      var app = require("app");
      app.gallery.trigger("search", query);
    }
  });
});