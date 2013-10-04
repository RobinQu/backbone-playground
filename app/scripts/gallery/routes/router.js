define(["require", "backbone"], function (require, Backbone) {
  var slice = Array.prototype.slice.call.bind(Array.prototype.slice);
  
  return Backbone.Router.extend({
    routes: {
      "search/:query": "search",
      "search/:query/p:page": "search",
      "view/:id": "view",
      "*actions": "home"
    },
    
    home: function() {
      this.loadView("querylist");
    },
    
    search: function (query, page) {
      var app = require("app");
      app.trigger("search", query, page);
      this.loadView("gallery", query, page);
    },
    
    view: function (id) {
      this.loadView("lightbox", id);
    },
    
    loadView: function() {
      var args = slice(arguments, 0),
          name = args.shift(),
          app = require("app"),
          view = app[name];
      if(!view) {
        app.trigger("view:unknown");
        console.log("unknown view", name);
        return false;
      }
      app.trigger("view:will:leave", app.currentView);
      if(app.currentView && app.currentView.unload) {
        app.currentView.unload(name);
      }
      app.trigger("view:did:leave", app.currentView);
      view.$el.addClass("active");
      app.currentView = view;
      app.trigger("view:will:enter", view);
      if(view.load) {
        view.load.apply(view, args);
      }
      app.trigger("view:did:enter", view);
    }
  });
});