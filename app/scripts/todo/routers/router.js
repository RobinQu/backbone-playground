define(["require", "backbone"], function (require, Backbone) {
  
  return Backbone.Router.extend({
    routes:{
      "*filter": "setFilter"
    },

    setFilter: function( param ) {
      var app = require("app");
      
      // Set the current filter to be used
      if (param) {
        param = param.trim();
      }
      app.TodoFilter = param || "";

      // Trigger a collection filter event, causing hiding/unhiding
      // of Todo view items
      app.Todos.trigger("filter");
    }
  });
  
});