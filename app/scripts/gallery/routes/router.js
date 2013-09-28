define(["require", "backbone"], function (require, Backbone) {
  return Backbone.Router.extend({
    routes: {
      "search/:query": "search",
      "search/:query/p:page": "search"
    },
    
    search: function (query, page) {
      var app = require("app");
      app.gallery.trigger("search", query, page);
    }
  });
});