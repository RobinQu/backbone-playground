define(["require", "backbone", "app", "views/gallery", "views/lightbox"], function(require, Backbone) {
  
  var slice = Array.prototype.slice.call.bind(Array.prototype.slice);
  
  return Backbone.View.extend({
    
    el: "body .outlet",
    
    transitViews: function(fromView, toView, data, callback) {
      var app = require("app");
      if(typeof data === "function") {
        callback = data;
        data = [];
      }
      app.trigger("view:will:leave", fromView);
      if(fromView) {
        fromView.$el.removeClass("active");
        if(fromView.unload) {
          fromView.unload(name);
        }
      }
      app.trigger("view:did:leave", fromView);
      toView.$el.addClass("active");
      
      app.trigger("view:will:enter", toView);
      if(toView.load) {
        toView.load.apply(toView, data);
      }
      app.currentView = toView;
      app.trigger("view:did:enter", toView);
      if(callback) {
        callback(fromView, toView);
      }
    },
    
    loadView: function() {
      var args = slice(arguments, 0),
          name = args.shift(),
          app = require("app"),
          view = app[name],
          that = this;
      console.log("load view", name, args);
      if(!view) {
        require(["views/" + name], function(V) {
          if(!V) {
            app.trigger("view:unknown");
            console.log("unknown view", name);
            return false;
          }
          view = new V();
          if(!view.$el) {
            that.$el.append(view.render().$el);
          }
          that.transitViews(app.currentView, view, args);
        });
        return false;
      }
      this.transitViews(app.currentView, view, args);
    }
    
  });
  
});