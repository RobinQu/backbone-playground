define(["require", "backbone", "app"], function (require, Backbone) {
  
  
  return Backbone.Router.extend({
    routes: {
      "search/:query": "search",
      "search/:query/p:page": "search",
      "view/:id": "view",
      "*actions": "home"
    },
    
    home: function() {
      var app = require("app");
      app.searchbar.focus();
      document.title = "Gallery";
    },
    
    search: function (query, page) {
      var app = require("app");
      app.outletView.loadView("gallery", query, page);
      app.trigger("search", query, page);
      document.title = [query, "search", "Gallery"].join(" - ");
    },
    
    view: function (id) {
      var app = require("app");
      app.outletView.loadView("lightbox", id);
      app.trigger("view", id);
      document.title = [id, "photo", "Gallery"].join(" - ");
    }
    
    
  });
});