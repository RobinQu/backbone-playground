define(["require", "backbone"], function (require, Backbone) {
  return Backbone.Router.extend({
    routes: {
      "search/:query": "search",
      "search/:query/p:page": "search",
      "view/:id": "view"
    },
    
    search: function (query, page) {
      var app = require("app");
      app.trigger("search", query, page);
    },
    
    view: function (id) {
      var app = require("app");
      app.trigger("view", id);
    }
  });
});